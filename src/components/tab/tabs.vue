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
</style>

<template>
  <div class="nav-link">
    <div class="tab_title">
      <div
        class="title_item"
        :class="{'c':index==showIndex}"
        v-for="(titleItem,index) in children"
        :key="index"
        @click="switchPage(index)"
      >{{ titleItem['name'] }}</div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["defaultKey"],
  name: "tabs",
  mounted() {
    for (let index = 0; index < this.children.length; index++) {
      if (this.defaultKey == this.children[index]['key']) {
        this.switchPage(index);
        break;
      }
    }
  },
  data() {
    return {
      showIndex: 0,
      children: []
    };
  },
  methods: {
    switchPage(index) {
      this.$children[this.showIndex].isShow = false;
      this.$children[index].isShow = true;
      this.showIndex = index;
      this.$emit("change", { key: this.children[index]["key"] });
    },
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
    }
  }
};
</script>


