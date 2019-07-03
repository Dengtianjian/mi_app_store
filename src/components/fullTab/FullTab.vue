<style lang="less" scoped>
.navigator_wrapper {
  height: 43px;
}
.navigator {
  position: relative;
  z-index:6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 43px;
  background: white;
  border-bottom:1px solid #EFEFF0;
  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
  }
  .nav_item {
    position: relative;
    flex: 1;
    margin: 0 10px;
    height: 43px;
    line-height: 43px;
    color: #666;
    font-weight: 600;
    font-size: 14px;
    text-align: center;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
    &.active {
      color: #33adff;
    }
    &.active::after {
      display: block;
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      height: 2px;
      width: 100%;
      background: #33adff;
      border-radius: 20px;
    }
  }
}
.separate_block {
  height: 7px;
  width: 100%;
  background: #efeff0;
}
</style>

<template>
  <div id="fulltab_com" class="fulltab">
    <div class="navigator_wrapper">
      <div class="navigator" :class="{'fixed':isFixed}" ref="navigator">
        <div
          class="nav_item"
          :class="{active:activeKey==key}"
          v-for="(pane,key) in panes"
          :key="pane['idkey']"
          @click="switchTab(pane)"
        >{{ pane.title }}</div>
      </div>
    </div>
    <div class="pane_warpper">
      <div class="separate_block"></div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "FullTab",
  props: ["defaultkey"],
  mounted() {
    for (let i = 0; i < this.$children.length; i++) {
      this.$set(this.panes, this.$children[i]["idkey"], {
        index: i,
        title: this.$children[i]["title"],
        idkey: this.$children[i]["idkey"]
      });
      if (this.defaultkey == this.$children[i]["idkey"]) {
        this.switchTab(this.panes[this.defaultkey]);
      }
    }

    let navigatorScrollTop = this.$refs.navigator.offsetTop;

    window.onscroll = () => {
      if (window.scrollY >= navigatorScrollTop) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    };
  },
  data() {
    return {
      panes: {},
      activeKey: 1,
      isFixed: false
    };
  },
  methods: {
    switchTab(pane) {
      this.$children[this.panes[this.activeKey]["index"]]["isShow"] = false;
      this.$children[pane.index]["isShow"] = true;
      this.activeKey = this.$children[pane.index]["idkey"];
    },
    showScroll() {
      console.log(1);
    }
  }
};
</script>


