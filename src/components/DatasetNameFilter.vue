<template>
  <tag-filter :name="name" @destroy="destroy" :width=900>
    <el-select slot="edit"
               ref="select"
               placeholder="Start typing dataset name"
               remote multiple filterable clearable
               :remote-method="fetchOptions"
               :loading="loading"
               loading-text="Loading matching entries..."
               no-match-text="No matches"
               :multiple-limit=10
               v-model="value2" @change="onChange">
      <el-option v-for="item in options"
                 :label="item.label"
                 :value="item.value"
                 :key="item.value">
      </el-option>
    </el-select>

    <span slot="show" class="tf-value-span">
      <span v-if="value2.length == 1">
        {{ currentLabel }}
      </span>
      <span v-if="value2.length > 1" >
        ({{ value2.length }} items selected)
      </span>
      <span v-if="value2.length == 0">
        (any)
      </span>
    </span>
  </tag-filter>
</template>

<script>
 import TagFilter from './TagFilter.vue';
 import gql from 'graphql-tag';

 export default {
   name: 'dataset-name-filter',
   components: {
     TagFilter
   },
   props: ["name", "value"],

   data() {
     return {
       optionsQuery: gql`query DatasetFilterOptions($df: DatasetFilter,
                                                    $orderBy: DatasetOrderBy,
                                                    $sortDir: SortingOrder) {
         options: allDatasets(filter: $df,
                              orderBy: $orderBy, sortingOrder: $sortDir, limit: 20) {
           value: id
           label: name
         }
       }`,
       namesQuery: gql`query DatasetNames($ids: String) {
         options: allDatasets(filter: {ids: $ids}) {
           value: id
           currentLabel: name
         }
       }`,
       loading: false,
       options: [],
       cachedOptions: [],
       currentLabel: '',
       value2: this.value || []
     }
   },

   watch: {
     value(newValue) {
       this.value2 = newValue;

       this.fetchNames(newValue);
     }
   },

   created() {
     this.fetchNames(this.value2);
     this.fetchOptions('');
   },

   methods: {
     joinOptions() {
       // adds/moves selected values to the top of the options list

       let valueToLabel = {};
       for (let {value, currentLabel} of this.cachedOptions)
         valueToLabel[value] = currentLabel;

       let options = this.value2.map(value => ({value, label: valueToLabel[value]}));
       let values = [...this.value2];

       // add currently selected values to the list
       for (let i = 0; i < this.options.length; i++) {
         const item = this.options[i];
         if (values.indexOf(item.value) == -1) {
           values.push(item.value);
           options.push(item);
         }
       }

       this.options = options;
     },

     fetchNames(ids) {
       this.$apollo.query({
         query: this.namesQuery,

         // TODO update when we make GraphQL accept an array
         variables: {ids: ids.join('|')}
       }).then(({data}) => {
         /* hack to make it show dataset names instead of ids */
         this.$refs.select.cachedOptions = data.options;
         this.$refs.select.setSelected();

         this.cachedOptions = data.options;
         this.joinOptions();
         if (ids.length == 1) {
           this.currentLabel = data.options[0].currentLabel;
         }
       }).catch((err) => {/* TODO: more error reporting */});
     },

     fetchOptions(query) {
       this.loading = true;

       let orderBy = 'ORDER_BY_NAME', sortDir = 'ASCENDING';
       if (query.length == 0) {
         // show most recent datasets for an empty query
         orderBy = 'ORDER_BY_DATE';
         sortDir = 'DESCENDING';
       }

       // take current dataset filter from the store and adjust it
       const df = Object.assign({name: query}, this.$store.getters.gqlDatasetFilter);
       delete df.ids;

       this.$apollo.query({
         query: this.optionsQuery,
         variables: {df, orderBy, sortDir}
       }).then(({data}) => {
         this.loading = false;
         this.options = data.options.sort();
         this.joinOptions();
       }).catch((err) => {
         // TODO: more error reporting
         this.options = [];
       });
     },
     onChange(val) {
       this.$emit('input', val);
       this.$emit('change', val);
     },
     destroy(val) {
       this.$emit('destroy');
     }
   }
 }
</script>

<style>
 .el-select-dropdown.is-multiple .el-select-dropdown__wrap {
   max-height: 600px;
 }
</style>