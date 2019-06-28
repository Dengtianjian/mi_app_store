<style lang="less" scoped>
.app_list {
  display: flex;
  width: 100%;
}

//一列多行
.app_list_column {
  flex-direction: column;
  .app_item {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }
  .app_icon {
    width: 52px;
    height: 52px;
    border-radius: 10px;
    border: 1px solid #d9d9d9;
  }
  .app_icon_img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  .app_info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    margin-left: 13px;
    .detail {
      display: flex;
      margin: 3px 0 3px;
      font-size: 10px;
      color: #a5a5a5;
      .separator {
        padding: 0 3px;
      }
    }
    .summary {
      height: 16px;
      line-height: 16px;
      font-size: 10px;
      color: #7a7a7a;
      overflow: hidden;
    }
  }
  .app_name {
    font-size: 14px;
    color: #1a1a1a;
  }
}

//一行多列 滑动
.app_list_single_line {
  padding-bottom: 11px;
  overflow-x: scroll;
  .app_item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 22px;
  }
  .app_icon {
    width: 59px;
    height: 59px;
    border-radius: 11px;
    border: 1px solid #d9d9d9;
  }
  .app_icon_img {
    width: 59px;
    height: 59px;
    border-radius: 11px;
  }
  .app_info {
    margin: 9px 0 6px;
    width:100%;
  }
  .app_name {
    font-size: 11px;
    color: #000;
    text-align: center;
    text-overflow:ellipsis;
    white-space:nowrap;
    overflow:hidden;
  }
}

/* 多行多列 */
.app_list_multi_line {
  overflow-x: hidden;
  flex-wrap: wrap;
  justify-content: space-between;
  padding:0;
  .app_item {
    width: 21%;
    margin: 0 0px 20px;
  }
  .app_icon {
    width: 52px;
    height: 52px;
    .app_icon_img {
      width: 52px;
      height: 52px;
    }
  }
}

.install_button {
  width: 53px;
  height: 26px;
  line-height: 24px;
  text-align: center;
  color: #0bae73;
  font-size: 12px;
  border-radius: 14px;
  border: 1px solid #0bae73;
  box-sizing: border-box;
  cursor: pointer;
}
</style>

<template>
  <div id="app_list">
    <!-- 一列多行 -->
    <div class="app_list app_list_column" v-if="mode=='column'">
      <div class="app_item" v-for="app in apps" :key="app['id']">
        <div class="app_icon">
          <img :src="app['icon']" class="app_icon_img">
        </div>
        <div class="app_info">
          <div class="app_name">{{ app['name'] }}</div>
          <div class="detail">
            <div class="Fstar">{{ app['star'] }}</div>
            <div class="type">{{ app['type'] }}</div>
            <span class="separator">|</span>
            <div class="app_size">{{ app['size'] }}</div>
          </div>
          <div class="summary">{{ app['summary'] | ellipsis }}</div>
        </div>
        <div class="install">
          <div class="install_button">安装</div>
        </div>
      </div>
    </div>
    <!-- 一行多列 -->
    <div class="app_list app_list_single_line" v-if="mode=='single-line'">
      <div class="app_item" v-for="app in apps" :key="app['id']">
        <div class="app_icon">
          <img :src="app['icon']" class="app_icon_img">
        </div>
        <div class="app_info">
          <div class="app_name">{{ app['name'] }}</div>
        </div>
        <div class="install">
          <div class="install_button">安装</div>
        </div>
      </div>
    </div>

    <div class="app_list app_list_single_line app_list_multi_line" v-if="mode=='multi-line'">
      <div class="app_item" v-for="app in apps" :key="app['id']">
        <div class="app_icon">
          <img :src="app['icon']" class="app_icon_img">
        </div>
        <div class="app_info">
          <div class="app_name">{{ app['name'] }}</div>
        </div>
        <div class="install">
          <div class="install_button">安装</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "appList",
  props: ["apps", "mode"],
  filters: {
    ellipsis(value) {
      if (value.length > 15) {
        return value.slice(0, 15) + "...";
      } else {
        return value;
      }
    }
  }
};
</script>


