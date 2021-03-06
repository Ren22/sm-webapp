<template>
  <div class="main-content">
    <div class="mainBanner-wrapper">
      <div class="mainBanner">
        <div style="position: absolute; top: 115px; left: 334px; color: white; font-size: 30px;">Welcome to</div>
        <div style="position: absolute; top: 260px; left: 334px; color: white; font-size: 22px;">Platform for metabolite annotation of imaging mass spectrometry data</div>
      </div>
    </div>
    <div id="about">
    <el-row>
      <el-row id="threePanelHeader" style="margin:20px 0px 50px 0px" :gutter=20>
        <el-col :span=6>
          <h2>Metabolite Annotation</h2>
          <p><a href="/#/upload">Submit</a> your high-resolution imaging mass spectrometry data to our high-throughput metabolite annotation engine</p>
        </el-col>

        <el-col :span=6>
          <h2>Explore the Knowledgebase</h2>
          <p><a href="/#/annotations">Browse</a> annotations from all datasets using our interactive interface </p>
          <p>You can search, filter and compare youre annotations alongside those from the whole imaging mass spectrometry community</p>
        </el-col>

        <el-col :span=6>
          <h2>Get Going Fast</h2>
          <p>Head to the <a href="/#/upload">upload </a> page to submit a dataset. </p>
          <p> We also have interactive <a href="/#/help">tutorials</a> prepared to help you.</p>
        </el-col>

        <el-col :span=6>
          <h2>Open Access</h2>
          <p>All code is open-source, the input format is the <a
            href="http://imzml.org/">imzML</a>
            supported by all mass spec major vendors, the metabolite annotations from the community datasets are public
            and can be browsed or exported.
          </p>
        </el-col>
      </el-row>
      <el-row id="whoAreWe">
        <h2>What is the METASPACE Platform?</h2>
        <p>The METASPACE platform hosts an engine for metabolite annotation of imaging mass spectrometry data as well as a
          spatial metabolite knowledgebase of the metabolites from hundreds of public datasets provided by the
          community.</p>
        <p>The METASPACE platform is developed by software engineers, data scientists and mass spectrometrists from the <a
          href="http://www.embl.de/research/units/scb/alexandrov/">Alexandrov team at EMBL</a>. This work is a part of the
          <a href="http://project.metaspace2020.eu">European project METASPACE</a>.</p>
      </el-row>
      <el-row id="A public space">
        <h2 id="open-as-public-space">Open as public space</h2>
        <p>We do not hide anything. All code is open-source, the input format is the <a href="http://imzml.org/">imzML</a>
          supported by all mass spec major vendors, the metabolite annotations from the community datasets are public and
          can be browsed or exported.</p>
      </el-row>
      <el-row id="getInvolved">
        <h2 id="how-can-i-contribute-">How can I contribute?</h2>
        <p>Please read <a href="http://www.nature.com/nmeth/journal/v14/n1/full/nmeth.4072.html">our publication in Nature
          Methods</a>, follow us on <a href="http://twitter.com/metaspace2020">Twitter</a>, spread the word, and think of
          us while doing good deeds :)</p>
        <ul>
          <li><strong>Have high-resolution imaging mass spectrometry data</strong>? Please consider uploading them.</li>
          <li><strong>Are you a data scientist</strong>? Please feel free to the export the metabolite annotations to mine
            thousands of metabolites found in hundreds of community-provided datasets.
          </li>
        </ul>
      </el-row>
      <el-row id="citation">
        <h2 id="how-shall-i-cite-metaspace-in-a-publication-">How shall I cite METASPACE in a publication?</h2>
         <p>Please cite our publication <a
        href="http://www.nature.com/nmeth/journal/v14/n1/full/nmeth.4072.html">(Palmer et al., 2016, Nature Methods)</a>
        and
        refer to <a href="http://metaspace2020.eu">http://metaspace2020.eu</a>.</p>
      </el-row>
      <el-row id="contact">
        <h2 id="how-to-stay-in-touch-">How to stay in touch?</h2>
        <p>Follow us on <a href="http://twitter.com/metaspace2020">Twitter</a> or drop a line to <a
          href="mailto:contact@metaspace2020.eu">our email</a>, we will add you to our special list :)</p>
        <p> Find out more about the METASPACE consortium at the <a href="http://project.metaspace2020.eu/">project website</a> </p>
        <p>For all other inquiries or questions, please <a href="mailto:contact@metaspace2020.eu">contact us over
          email</a>.
        </p>
      </el-row>
      <el-row id="funding">
        <h2 id="please-appreciate-those-who-funded-it">Funding</h2>
        <div style="display:flex; flex-direction: row; flex-wrap: wrap; width: 100%;">
          <div style="flex-basis: 200px; padding: 16px 0">
            <img src="../assets/eu_flag.jpg" alt="EU" style="width: 90px">
            <img src="../assets/nih_logo.png" alt="NIH" style="width: 90px">
          </div>
          <div style="flex-basis: 70%; flex-grow: 1"><p> We acknowledge funding from the
            European Union’s Horizon 2020 programme under the grant agreement 634402
            as well as from the National Institutes of Health NIDDK Kidney Precision Medicine Project.</p>
          </div>
        </div>
      </el-row>
      <el-row id="acknowledgement">
        <h2>Other acknowledgements</h2>
        <p>
          Icons by <a href="http://www.freepik.com/">Freepik</a> from <a href="www.flaticon.com">www.flaticon.com</a>
        </p>
      </el-row>
    </el-row>
    </div>
  </div>
</template>

<script lang="ts">
 export default {
   name: 'about-page'
 }
</script>

<style>
 #about {
   display: flex;
   padding: 0px 20px;
   align-items: center;
   justify-content: center;
 }

 #about > div, #about img {
   max-width: 900px;
 }

 .mainBanner {
   position: relative;
   height: 400px;
   max-width: 1100px;
   width: 100%;
   background: url("../assets/METASPACE_banner_blue_bg.jpg") -50px;
   background-size: cover;
   margin: -8px auto 0 auto;
   /*outline: 1px solid red;*/
   box-sizing: border-box;
 }
 .mainBanner-wrapper {
   width: 100%;
   background-color: #008aff;
 }


</style>
