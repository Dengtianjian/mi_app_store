<style lang="less">
.home {
  padding-bottom: 50px;
}
.tab_title {
  position: fixed;
  z-index:2;
  top: 53px;
  left: 0;
  padding:5px 15px 5px;
  width:100%;
  background:white;
  box-sizing:border-box;
}
.top_placeholder {
  height:93px;
}
</style>

<template>
  <div id="home_page" class="home">
    <div class="top_placeholder"></div>
    <Header class="default_header"/>
    <tabs :defaultKey="1" @change="switchPage" class="tabs_com">
      <tab-pane idkey="1" name="推荐">
        <Recommend v-if="currentKey==1"/>
      </tab-pane>
      <tab-pane idkey="2" name="必备"><Mandatory v-if="currentKey==2" /></tab-pane>
      <tab-pane idkey="3" name="免费小说">Contact</tab-pane>
      <tab-pane idkey="4" name="分类">
        <Classification v-if="currentKey==4" />
      </tab-pane>
      <tab-pane idkey="5" name="金米奖">
        <GlodelRiceAward v-if="currentKey==5" />
      </tab-pane>
    </tabs>
  </div>
</template>

<script>
import tabs from "../../components/tab/tabs";
import tabPane from "../../components/tab/pane";

import Header from "../../components/header";
import Recommend from "./Recommend";
import Mandatory from "./Mandatory";
import Classification from "./Classification";
import GlodelRiceAward from "./GlodenRiceAward";
export default {
  name: "HomePage",
  data() {
    return {
      currentKey: 1
    };
  },
  methods: {
    switchPage(parent) {
      this.currentKey = parent["key"];
    }
  },
  components: {
    Header,
    tabs,
    "tab-pane": tabPane,
    Recommend,
    Mandatory,
    Classification,
    GlodelRiceAward
  }
};
</script>


