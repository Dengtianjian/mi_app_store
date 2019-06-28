<style lang="less" scoped>
.mandatory_apps_list {
  margin-top: 6px;
}
.all_install_button {
  width: 100%;
  height: 43px;
  line-height: 43px;
  color: white;
  text-align: center;
  border-radius: 22px;
  background: #0bae73;
}
.type_mandatory_apps {
  margin-top: 10px;
}
.type_mandatory_apps1 {
  margin-top:30px;
}
.type_mandatory_apps_list {
  margin-top: 12px;
}
</style>

<template>
  <div id="mandatory" class="mandatory">
    <div class="mandatory_apps">
      <AppList class="mandatory_apps_list" :apps="$store.state.apps" mode="multi-line"/>
      <div class="all_install_button">全部安装</div>
    </div>
    <div class="type_mandatory_apps" :class="'type_mandatory_apps'+(appsIndex+1)" v-for="(appsItem,appsIndex) in MandatoryTypeApps" :key="appsItem['id']">
      <div class="title_common">
        <div class="main">
          <div class="text">{{ appsItem['typeName'] }}</div>
        </div>
      </div>
      <AppList class="type_mandatory_apps_list" :apps="appsItem['apps']" mode="column"/>
    </div>
  </div>
</template>

<script>
import AppList from "../../components/appList";
export default {
  name: "Mandatory",
  data() {
    return {
      MandatoryTypeApps: [
        {
          id: 1,
          typeName: "生活服务",
          apps: this.$store.state.apps.slice(0, 5)
        },
        {
          id: 2,
          typeName: "影音视听",
          apps: this.$store.state.apps.slice(0, 5)
        },
        {
          id: 3,
          typeName: "社交通讯",
          apps: this.$store.state.apps.slice(0, 5)
        },
        {
          id: 4,
          typeName: "随心阅读",
          apps: this.$store.state.apps.slice(0, 5)
        },
        {
          id: 5,
          typeName: "学习教育",
          apps: this.$store.state.apps.slice(0, 5)
        },
        {
          id: 6,
          typeName: "便捷出行",
          apps: this.$store.state.apps.slice(0, 5)
        },
        {
          id: 7,
          typeName: "购物优惠",
          apps: this.$store.state.apps.slice(0, 5)
        }
      ]
    };
  },
  components: {
    AppList
  }
};
</script>


