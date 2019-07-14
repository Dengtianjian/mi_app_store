<style lang="less" scoped>
.tab_title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  .title_item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: inherit;
    font-size: 11px;
    color: #7f7f7f;
    cursor: pointer;
    transition: all 0.4s linear;
  }
  .title_item.c {
    color: #000;
    font-size: 14px;
    font-weight: 600;
  }
  .title_item.c::after {
    content: "";
    position: absolute;
    bottom: 2px;
    left: 0;
    right: 0;
    margin: auto;
    display: block;
    width: 17px;
    height: 3px;
    border-radius: 2px;
    background: #ff6243;
  }
}
.tab_content_wrapper {
  width: 100%;
  overflow: hidden;
}
.tab_content {
  display: flex;
  transition-duration: 0.8s;
  transition-property: all;
  transition-timing-function: ease-in-out;
}
.tab_content .pane {
  display: inline-block;
  width: 100vw;
}
</style>

<template>
  <div class="nav-link">
    <div class="tab_title">
      <div
        class="title_item"
        :class="{'c':index==showIndex}"
        v-for="(titleItem,index) in children"
        :key="index"
        @click.stop="switchPage(index)"
      >{{ titleItem['name'] }}</div>
    </div>
    <div
      class="tab_content_wrapper"
      @touchstart="tabTouchStart"
      @touchmove="tabTouchMove"
      @touchend="tabTouchEnd"
    >
      <div
        ref="tabContent"
        class="tab_content"
        :style="{width:tabContentWidth,position:'relative',left:`-${movePage.ContentLeft}px`,'transition-duration':movePage.duration}"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["defaultKey"],
  name: "tabs",
  mounted() {
    for (let index = 0; index < this.children.length; index++) {
      if (this.defaultKey == this.children[index]["key"]) {
        this.switchPage(index);
        break;
      }
    }
  },
  data() {
    return {
      showIndex: 0,
      children: [],
      movePage: {
        startPageY: 0,
        startPageX: 0,
        movePageY: 0,
        movePageX: 0,
        offsetLeft: 0,
        showIndex: 0,
        startOffsetLeft: 0,
        startTime: 0,
        endTime: 0,
        duration: "0s",
        ContentLeft: 0,
        isScrolling: false,
        isLangscape: false,
        prveious: 0
      }
    };
  },
  computed: {
    tabContentWidth() {
      return window.innerWidth * this.children.length + "px";
    }
  },
  methods: {
    init() {
      this.chidlren = [];
      for (let i = 0; i < this.$children.length; i++) {
        if (this.children.length == this.$children.length) {
          break;
        }
        this.children.push({
          name: this.$children[i].name,
          key: this.$children[i].idkey
        });
      }
    },
    switchPage(index) {
      this.$children[index]["isShow"] = true;
      this.showIndex = index;
      this.movePage.ContentLeft = this.showIndex * window.innerWidth;
      this.$emit("change", { key: this.children[index]["key"] });
    },
    tabTouchStart(e) {
      this.movePage.startPageY = e.touches[0].pageY;
      this.movePage.startTime = new Date().getTime();
      this.movePage.startOffsetLeft = this.$refs.tabContent.offsetLeft;
      this.movePage.startPageX = e.touches[0].pageX;
      this.movePage.offsetLeft =
        e.touches[0].pageX + Math.abs(this.$refs.tabContent.offsetLeft);
      this.movePage.duration = "0s";
    },
    tabTouchMove(e) {
      this.movePage.movePageY = e.touches[0].pageY;
      this.movePage.movePageX = e.touches[0].pageX;
      if (
        this.movePage.isScrolling === false &&
        Math.abs(this.movePage.movePageY - this.movePage.startPageY) <
          Math.abs(this.movePage.movePageX - this.movePage.startPageX)
      ) {
        this.movePage.isLangscape = true;
        e.preventDefault();
        if (Math.abs(this.movePage.movePageX - this.movePage.startPageX) < 10) {
          return;
        }
        if (this.movePage.movePageX < this.movePage.startPageX) {
          if (
            Math.abs(this.movePage.offsetLeft - this.movePage.movePageX) >
            (this.children.length - 1) * window.innerWidth
          ) {
            return;
          }
        }
        this.movePage.ContentLeft =
          this.movePage.offsetLeft - this.movePage.movePageX;
      } else if (this.movePage.isLangscape === false) {
        this.movePage.isScrolling = true;
      }
    },
    tabTouchEnd(e) {
      this.movePage.endTime = new Date().getTime();
      let duration = this.movePage.endTime - this.movePage.startTime;
      this.movePage.duration =
        (duration > 1500 ? 800 : duration < 300 ? 300 : duration) + "ms";

      let resultTime = this.movePage.endTime - this.movePage.startTime;
      let resultDistance = Math.abs(
        this.movePage.startPageX - this.movePage.movePageX
      );

      if (
        (resultTime > 700 && resultDistance > window.innerWidth / 2) ||
        resultDistance > 50
      ) {
        if (this.movePage.movePageX < this.movePage.startPageX) {
          this.showIndex++;
        } else {
          this.showIndex--;
        }
        this.showIndex = this.showIndex < 0 ? 0 : this.showIndex;
        this.showIndex =
          this.showIndex >= this.children.length - 1
            ? this.children.length - 1
            : this.showIndex;
      }

      this.switchPage(this.showIndex);
      this.movePage.isScrolling = false;
      this.movePage.isLangscape = false;
    }
  }
};
</script>


