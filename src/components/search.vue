<style lang="less" scoped>
.search {
  display: flex;
  align-items: center;
}
.go_back {
  flex: 2;
}
.go_back_svg {
  width: 14px;
}
.search_input {
  flex: 14;
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 33px;
  width: 300px;
  border-radius: 18px;
  box-sizing: border-box;
  background: #f0f0f0;
  .icon {
    width: 20px;
    color: #000;
  }
  .keyword_textinput {
    width: 100%;
    padding: 0 10px 0 5px;
    outline: none;
    border: none;
    background: transparent;
    box-sizing: border-box;
    transition: width 0.4s linear;
  }
}

.more_area {
  position: fixed;
  z-index: 4;
  top: 53px;
  left: 0;
  padding-bottom: 60px;
  width: 100%;
  height: 100%;
  background: white;
}
//热门搜索
.hot_search {
  margin-top: 14px;
}
.hot_search_apps {
  margin-top: 11px;
}
/* 推荐热词 */
.recommended_hot_word {
  margin-top: 13px;
}
.hot_words {
  margin-top: 11px;
  .badge_item {
    flex: 1;
  }
}

/* 猜你喜欢 */
.may_also_like {
  margin-top: 23px;
  .app_list {
    margin-top: 12px;
  }
}

//搜索历史
.search_history {
  margin-top: 23px;
  .history {
    margin-top: 12px;
  }
}

//广告位
.banner_space {
  margin-top:6px;
  width:100%;
  .item_img {
    width:100%;
  }
}

.scroll_y {
  overflow-y:scroll;
}
</style>

<template>
  <div id="search" class="search">
    <div class="go_back" v-show="isFocus" @click="displayMoreWin('hidden')">
      <img class="go_back_svg" src="/static/svg/left_arrow.svg" alt srcset>
    </div>
    <div class="search_input">
      <img class="icon" src="/static/svg/search_icon.svg" alt srcset>
      <input
        class="keyword_textinput"
        type="text"
        name="keyword"
        @focus="displayMoreWin('display')"
      >
    </div>
    <div class="more_area page_witdh" v-if="isFocus">
      <div class="scroll_y" :style="{ height:winHeight-53+'px' }" >
        <div class="hot_search">
          <div class="title_common">
            <div class="main">
              <div class="text">热门搜索</div>
            </div>
          </div>
          <AppList class="hot_search_apps" :apps="$store.state.apps" mode="single-line"/>
        </div>
        <div class="recommended_hot_word">
          <div class="title_common">
            <div class="main">
              <div class="text">搜索热词</div>
            </div>
          </div>
          <div class="hot_words">
            <div class="badge_common">
              <div
                class="badge_item"
                v-for="wordItem in hotWords"
                :key="wordItem['id']"
              >{{ wordItem['word'] }}</div>
            </div>
          </div>
        </div>

        <div class="may_also_like">
          <div class="title_common">
            <div class="main">
              <div class="text">猜你喜欢</div>
            </div>
          </div>
          <AppList class="app_list" :apps="apps" mode="single-line"/>
        </div>

        <div class="search_history" v-show="history.length>0">
          <div class="title_common">
            <div class="main">
              <div class="text">搜索历史</div>
            </div>
            <div class="sub" @click="history=[]">
              <svg
                t="1561695765149"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4195"
              >
                <path
                  d="M652.8 834.56c15.36 0 25.6-10.24 25.6-25.6v-307.2c0-15.36-10.24-25.6-25.6-25.6s-25.6 10.24-25.6 25.6v307.2c0 12.8 10.24 25.6 25.6 25.6z m-128 0c15.36 0 25.6-10.24 25.6-25.6v-307.2c0-15.36-10.24-25.6-25.6-25.6s-25.6 10.24-25.6 25.6v307.2c0 12.8 10.24 25.6 25.6 25.6z m281.6-614.4H652.8v-51.2c0-28.16-23.04-51.2-51.2-51.2H448c-28.16 0-51.2 23.04-51.2 51.2v51.2H243.2c-28.16 0-51.2 23.04-51.2 51.2v51.2c0 28.16 23.04 51.2 51.2 51.2v460.8c0 56.32 46.08 102.4 102.4 102.4H704c56.32 0 102.4-46.08 102.4-102.4v-460.8c28.16 0 51.2-23.04 51.2-51.2v-51.2c0-28.16-23.04-51.2-51.2-51.2zM448 194.56c0-15.36 10.24-25.6 25.6-25.6H576c15.36 0 25.6 10.24 25.6 25.6v25.6H448v-25.6z m307.2 640c0 28.16-23.04 51.2-51.2 51.2H345.6c-28.16 0-51.2-23.04-51.2-51.2v-460.8h460.8v460.8z m25.6-512h-512c-15.36 0-25.6-10.24-25.6-25.6s10.24-25.6 25.6-25.6h512c15.36 0 25.6 10.24 25.6 25.6 0 12.8-10.24 25.6-25.6 25.6z m-384 512c15.36 0 25.6-10.24 25.6-25.6v-307.2c0-15.36-10.24-25.6-25.6-25.6s-25.6 10.24-25.6 25.6v307.2c0 12.8 10.24 25.6 25.6 25.6z"
                  fill="#a4a4a4"
                  p-id="4196"
                ></path>
              </svg>
              <div class="text">清空</div>
            </div>
          </div>
          <div class="history">
            <div class="badge_common">
              <div
                class="badge_item"
                v-for="historyItem in history"
                :key="historyItem['id']"
              >{{ historyItem['word'] }}</div>
            </div>
          </div>
        </div>

        <div class="banner_space">
          <div class="banner_item">
            <img class="item_img" src="/static/banner/1.png" alt="" srcset="">
          </div>
          <div class="banner_item">
            <img class="item_img" src="/static/banner/2.png" alt="" srcset="">
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import AppList from "./appList";
export default {
  name: "Search",
  mounted() {
    this.apps = this.$store.state.apps;
  },
  data() {
    return {
      winHeight:window.innerHeight,
      isFocus: false,
      hotWords: [
        {
          id: 1,
          word: "Google",
          url: ""
        },
        {
          id: 2,
          word: "Tencent",
          url: ""
        },
        {
          id: 4,
          word: "FaceBook",
          url: ""
        },
        {
          id: 5,
          word: "Microsoft",
          url: ""
        },
        {
          id: 6,
          word: "IMB",
          url: ""
        },
        {
          id: 7,
          word: "AWS",
          url: ""
        },
        {
          id: 8,
          word: "Boss",
          url: ""
        },
        {
          id: 10,
          word: "Vue",
          url: ""
        },
        {
          id: 3,
          word: "Alibaba",
          url: ""
        },
        {
          id: 9,
          word: "Three Kingdom",
          url: ""
        }
      ],
      apps: [],
      history: [
        {
          id: 1,
          word: "Google",
          url: ""
        },
        {
          id: 2,
          word: "Tencent",
          url: ""
        },
        {
          id: 4,
          word: "FaceBook",
          url: ""
        }
      ]
    };
  },
  methods: {
    displayMoreWin(mode) {
      if (mode == "display") {
        this.isFocus = true;
        this.$parent.isBorder = true;
      } else {
        this.isFocus = false;
        this.$parent.isBorder = false;
      }
    }
  },
  components: {
    AppList
  }
};
</script>


