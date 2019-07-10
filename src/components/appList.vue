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
    text-decoration:none;
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
      margin: 1px 0;
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
    text-decoration:none;
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
    width: 100%;
  }
  .app_name {
    font-size: 11px;
    color: #000;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}

/* 一行多列 显示分数和App大小 */
.app_list_single_line_star_size {
  .star_size {
    display: flex;
    margin:5px 0;
    font-size: 10px;
    color: #666666;
    .star {
      display: flex;
      align-items: center;
      color: #ff9600;
      .icon {
        margin-right:2px;
        height: 9px;
        fill: #ff9600;
      }
    }
    .separator {
      margin: 0 2px;
      color: #cecece;
    }
  }
}

/* 多行多列 */
.app_list_multi_line {
  overflow-x: hidden;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  .app_item {
    width: 21%;
    margin: 0 0px 20px;
    text-decoration:none;
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
  text-decoration: none;
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
      <router-link to="/app/1" class="app_item" v-for="app in apps" :key="app['id']">
        <div class="app_icon">
          <img :src="app['icon']" class="app_icon_img" />
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
      </router-link>
    </div>
    <!-- 一行多列 -->
    <div class="app_list app_list_single_line" v-if="mode=='single-line'">
      <div class="app_item" v-for="app in apps" :key="app['id']">
        <div class="app_icon">
          <img :src="app['icon']" class="app_icon_img" />
        </div>
        <div class="app_info">
          <div class="app_name">{{ app['name'] }}</div>
        </div>
        <div class="install">
          <div class="install_button">安装</div>
        </div>
      </div>
    </div>
    <div
      class="app_list app_list_single_line app_list_single_line_star_size"
      v-if="mode=='single-line-star-size'"
    >
      <div class="app_item" v-for="app in apps" :key="app['id']">
        <div class="app_icon">
          <img :src="app['icon']" class="app_icon_img" />
        </div>
        <div class="app_info">
          <div class="app_name">{{ app['name'] }}</div>
          <div class="star_size">
            <div class="star">
              <svg
                t="1562135764580"
                class="icon"
                viewBox="0 0 1032 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="9665"
              >
                <path
                  d="M962.220857 343.684193l-234.111204-29.242399c-14.621199 0-29.242399-7.396607-29.242399-22.017806L589.294265 58.484798c-29.242399-51.260205-102.348396-58.484798-138.987401 0l-102.348396 219.490005c0 14.621199-14.621199 22.017806-22.017806 22.017806L69.983666 336.4596C4.102261 343.684193-25.140137 409.565597 26.120067 460.825802l175.454393 160.833193c14.621199 14.621199 14.621199 22.017806 14.6212 36.639006L164.935455 906.858391c-7.396607 65.881404 43.863598 116.969595 109.745002 80.502603l212.093398-116.969595c14.621199-7.396607 29.242399-7.396607 36.639006 0l226.714598 124.366202c58.484798 29.242399 124.366202-7.396607 109.745002-80.502604l-51.260205-234.111204c0-14.621199 0-29.242399 14.6212-36.639005l190.247606-175.454393c36.466991-43.863598 21.845792-116.969595-51.260205-124.366202z"
                  p-id="9666"
                />
                <path
                  d="M523.584875 17.373425c-26.834201-1.376113-54.872501 11.352931-73.278011 41.111373l-102.348396 219.490005c0 14.621199-14.621199 22.017806-22.017806 22.017806L69.983666 336.4596C4.102261 343.684193-25.140137 409.565597 26.120067 460.825802l175.454393 160.833193c14.621199 14.621199 14.621199 22.017806 14.6212 36.639006L164.935455 906.858391c-7.396607 65.881404 43.863598 116.969595 109.745002 80.502603l212.093398-116.969595c14.621199-7.396607 29.242399-7.396607 36.639006 0l0.172014 0.172014v-853.189988z"
                  p-id="9667"
                />
              </svg>
              <span class="fraction">4.5</span>
            </div>
            <span class="separator">|</span>
            <div class="size">33.4M</div>
          </div>
        </div>
        <div class="install">
          <div class="install_button">安装</div>
        </div>
      </div>
    </div>
    <!-- 多行多列 -->
    <div class="app_list app_list_single_line app_list_multi_line" v-if="mode=='multi-line'">
      <div class="app_item" v-for="app in apps" :key="app['id']">
        <div class="app_icon">
          <img :src="app['icon']" class="app_icon_img" />
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


