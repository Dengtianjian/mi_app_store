<style lang="less" scoped>
.search {
  position: relative;
  display: flex;
  align-items: center;
  background: white;
}
.go_back {
  flex: 1.8;
}
.go_back_svg {
  width: 14px;
}

.open {
  position: absolute;
  left: 0;
  flex: 14;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}
.static {
  flex: 14;
  .keywords {
    margin-left: 5px;
    height: 33px;
    font-size: 14px;
    color: #909090;
    overflow: hidden;
    .keyword {
      line-height: 33px;
    }
  }
}
.search_input {
  flex: 14;
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 33px;
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
  .title_cus .sub .icon {
    width: 17px;
  }
  .history {
    margin-top: 12px;
  }
}

//广告位
.banner_space {
  margin-top: 6px;
  width: 100%;
  .banner_item {
    margin-bottom: 20px;
  }
  .item_img {
    width: 100%;
  }
}

.scroll_y {
  overflow-y: scroll;
}

.search_focus-enter {
  opacity: 0;
}
.search_focus-enter-active {
  transition: all 0.6s ease-in-out;
}
.search_focus-enter-to {
  opacity: 1;
}
</style>

<template>
  <div id="search" class="search">
    <div class="static" v-show="!isFocus" @click="displayMoreWin('display')">
      <div class="search_input">
        <svg
          t="1563439960280"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3003"
          fill="#1a1a1a"
        >
          <path
            d="M945.28512 875.7248l-159.02208-156.11904c50.65216-67.06688 81.0496-150.27712 81.0496-240.80384 0-221.12256-179.21536-400.37888-400.37376-400.37888-221.13792 0-400.384 179.25632-400.384 400.37888 0 221.16352 179.24096 400.39936 400.384 400.39936 101.888 0 194.62144-38.38464 265.27744-101.05856l159.24736 156.32896c15.6416 15.36512 40.36608 14.71488 55.2448-1.47456 14.84288-16.19456 14.21824-41.856-1.42336-57.27232z m-478.32064-67.15392c-182.10816 0-329.71776-147.6352-329.71776-329.74336 0-182.08768 147.61472-329.728 329.71776-329.728 182.0928 0 329.71776 147.6352 329.71776 329.728 0 182.10816-147.62496 329.74336-329.71776 329.74336z"
            p-id="3004"
          />
        </svg>
        <div class="keywords">
          <div
            class="keyword_wrapper"
            :style="{
              transform:`translateY(-${keyWordsTop}px)`,
              transitionDuration:`${keyWordDuration}s`
            }"
          >
            <div
              class="keyword"
              v-for="(keyword) in keyWords"
              :key="keyword['id']"
            >{{ keyword['appName'] }} - {{ keyword['slogan'] }}</div>
          </div>
        </div>
      </div>
    </div>

    <transition name="search_focus">
      <div class="open" v-show="isFocus">
        <div class="go_back" @click="displayMoreWin('hidden')">
          <img class="go_back_svg" src="/static/svg/left_arrow.svg" alt srcset />
        </div>
        <div class="search_input">
          <svg
            t="1563439960280"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3003"
            fill="#AFAFAF"
          >
            <path
              d="M945.28512 875.7248l-159.02208-156.11904c50.65216-67.06688 81.0496-150.27712 81.0496-240.80384 0-221.12256-179.21536-400.37888-400.37376-400.37888-221.13792 0-400.384 179.25632-400.384 400.37888 0 221.16352 179.24096 400.39936 400.384 400.39936 101.888 0 194.62144-38.38464 265.27744-101.05856l159.24736 156.32896c15.6416 15.36512 40.36608 14.71488 55.2448-1.47456 14.84288-16.19456 14.21824-41.856-1.42336-57.27232z m-478.32064-67.15392c-182.10816 0-329.71776-147.6352-329.71776-329.74336 0-182.08768 147.61472-329.728 329.71776-329.728 182.0928 0 329.71776 147.6352 329.71776 329.728 0 182.10816-147.62496 329.74336-329.71776 329.74336z"
              p-id="3004"
            />
          </svg>
          <input
            class="keyword_textinput"
            type="text"
            name="keyword"
            :placeholder="keyWordPlaceholder"
            autofocus
          />
        </div>
        <div class="more_area page_width">
          <div class="scroll_y" :style="{ height:winHeight-53+'px' }">
            <div class="hot_search">
              <div class="title_common">
                <div class="main">
                  <div class="text">热门搜索</div>
                </div>
              </div>
              <AppList class="hot_search_apps" :apps="$store.state.apps" mode="single-line" />
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
              <AppList class="app_list" :apps="apps" mode="single-line" />
            </div>

            <div class="search_history" v-show="history.length>0">
              <div class="title_common title_cus">
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
                    />
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
                <img class="item_img" src="/static/banner/1.png" alt srcset />
              </div>
              <div class="banner_item">
                <img class="item_img" src="/static/banner/2.png" alt srcset />
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import AppList from "./appList";
export default {
  name: "Search",
  mounted() {
    this.apps = this.$store.state.apps;
    setInterval(() => {
      this.keyWordIndex++;
      if (this.keyWordIndex >= this.keyWords.length) {
        this.keyWordIndex = 0;
        this.keyWordDuration = 0;
      } else {
        this.keyWordDuration = 0.8;
      }
      this.keyWordsTop = this.keyWordIndex * 33;
    }, 2000);
  },
  data() {
    return {
      winHeight: window.innerHeight,
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
      ],
      keyWordIndex: 0,
      keyWordsTop: "0",
      keyWordDuration: 0.2,
      keyWordPlaceholder: "",
      keyWords: [
        { id: 1, appName: "全民小说", slogan: "真免费,不要钱!" },
        { id: 2, appName: "澎拜新闻", slogan: "专注时政,思想新媒体" },
        { id: 3, appName: "皮皮段子", slogan: "脑洞大开神评论" },
        { id: 4, appName: "快游戏", slogan: "百款游戏,轻松好玩!" },
        { id: 5, appName: "小米省钱购", slogan: "天天领红包" },
        { id: 6, appName: "全民小说", slogan: "真免费,不要钱!" }
      ]
    };
  },
  methods: {
    displayMoreWin(mode) {
      if (mode == "display") {
        this.isFocus = true;
        this.keyWordPlaceholder = this.keyWords[this.keyWordIndex]["appName"];
      } else {
        this.isFocus = false;
        this.keyWordIndex--;
        this.keyWordPlaceholder="";
      }
      this.$emit("searchFocus",{show:this.isFocus});
    }
  },
  components: {
    AppList
  }
};
</script>


