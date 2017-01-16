import { renderSumFormula } from './util.js';
import InputFilter from './components/InputFilter.vue';
import SingleSelectFilter from './components/SingleSelectFilter.vue';
import MultiSelectFilter from './components/MultiSelectFilter.vue';

const ADDUCT_POLARITY = {
  '+H': 'POSITIVE',
  '+Na': 'POSITIVE',
  '+K': 'POSITIVE',
  '-H': 'NEGATIVE',
  '+Cl': 'NEGATIVE',
};

function formatAdduct (adduct) {
  if (adduct === null)
    return '';
  else {
    return renderSumFormula('M', adduct, ADDUCT_POLARITY[adduct])
  }
}

const FILTER_SPECIFICATIONS = {
  datasetName: {
    type: SingleSelectFilter,
    name: 'Dataset',
    description: 'Select dataset',
    initialValue: '',

    options: 'datasetNames' // take from Vue instance
  },

  minMSM: {
    type: InputFilter,
    name: 'Min. MSM',
    description: 'Set minimum MSM score',
    initialValue: 0.0
  },

  compoundName: {
    type: InputFilter,
    name: 'Compound',
    description: 'Search compound',
    initialValue: ''
  },

  adduct: {
    type: SingleSelectFilter,
    name: 'Adduct',
    description: 'Select adduct',
    initialValue: null,

    options: [null, '+H', '-H', '+Na', '+Cl', '+K'],
    optionFormatter: formatAdduct,
    valueFormatter: formatAdduct
  }
};

export { FILTER_SPECIFICATIONS as default };