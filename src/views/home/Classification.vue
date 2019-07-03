<style lang="less" scoped>
.class_zone {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 3px;
}
.zone_item {
  margin-bottom: 0.5%;
  width: 24%;
}
@media screen and(min-width:530px) {
  .zone_item {
    margin-bottom: 0.5%;
    width: 19%;
  }
}
@media screen and(min-width:750px) {
  .zone_item {
    margin-bottom: 0.5%;
    // flex:1;
    width: 12%;
  }
}

.zone_icon {
  width: 100%;
}

.app_class_wrapper {
  margin-top: 23px;
}
.class_list {
  display: flex;
  flex-direction: column;
}
.class_title .sub .text {
  color: #999;
}
.class_title .icon {
  margin: 0 1px;
  width: 10px;
}
.class_item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  width: 100%;
  height: 80px;
  border: 1px solid #f2f2f2;
  border-radius: 11px;
  background: white;
  box-shadow: 0 0 10px rgba(50, 50, 50, 0.05);
  .parent {
    flex-basis: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 80px;
    .icon_img {
      height: 30px;
    }
    .name {
      margin-top: 5px;
      font-size: 12px;
    }
  }
  .sub {
    flex: 3;
    display: flex;
    align-items: stretch;
    align-content: space-evenly;
    flex-wrap: wrap;
    height: 100%;
    .sub_item {
      vertical-align: middle;
      width: 33.3%;
      font-size: 13px;
      text-align: center;
      color: #1a1a1a;
    }
  }
}
.app_class {
  padding-bottom: 20px;
}
</style>

<template>
  <div id="classification_page" class="classification">
    <div class="page_width">
      <div class="class_zone">
        <div class="zone_item" v-for="zone in classZones" :key="zone['id']">
          <img class="zone_icon" :src="zone['icon']" alt srcset />
        </div>
      </div>
      <div class="game_class app_class_wrapper">
        <div class="title_common class_title">
          <div class="main">
            <div class="text">游戏分类</div>
          </div>
          <div class="sub">
            <div class="text">精品游戏</div>
            <svg
              t="1561714096114"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4971"
              fill="#999999"
            >
              <path
                d="M657.8 508.4L292.2 874c-11.7 11.7-11.7 30.7 0 42.4s30.7 11.7 42.4 0l365.6-365.6 42.4-42.4-42.4-42.4-357.5-357.5c-11.7-11.7-30.7-11.7-42.4 0s-11.7 30.7 0 42.4l357.5 357.5z"
                p-id="4972"
              />
            </svg>
          </div>
        </div>
        <div class="class_list">
          <div class="class_item" v-for="classItem in gameClass" :key="classItem['id']">
            <div class="parent">
              <div class="icon">
                <img class="icon_img" :src="classItem['icon']" alt />
              </div>
              <div class="name" :style="{ color:classItem['color'] }">{{ classItem['name'] }}</div>
            </div>
            <div class="sub">
              <div
                class="sub_item"
                v-for="(subClass,subIndex) in classItem['sub']"
                :key="subIndex"
              >{{ subClass['name'] }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="app_class app_class_wrapper">
        <div class="title_common class_title">
          <div class="main">
            <div class="text">应用分类</div>
          </div>
        </div>
        <div class="class_list">
          <div class="class_item" v-for="classItem in appClass" :key="classItem['id']">
            <div class="parent">
              <div class="icon">
                <img class="icon_img" :src="classItem['icon']" alt />
              </div>
              <div class="name" :style="{ color:classItem['color'] }">{{ classItem['name'] }}</div>
            </div>
            <div class="sub">
              <div
                class="sub_item"
                v-for="(subClass,subIndex) in classItem['sub']"
                :key="subIndex"
              >{{ subClass['name'] }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Classification",
  data() {
    return {
      classZones: [
        {
          id: 1,
          icon: "/static/icon/read_type_zone.png"
        },
        {
          id: 2,
          icon: "/static/icon/shop_type_zone.png"
        },
        {
          id: 3,
          icon: "/static/icon/edu_type_zone.png"
        },
        {
          id: 4,
          icon: "/static/icon/fastapp_type_zone.png"
        },
        {
          id: 5,
          icon: "/static/icon/miprod_type_zone.png"
        },
        {
          id: 6,
          icon: "/static/icon/topic_type_zone.png"
        },
        {
          id: 7,
          icon: "/static/icon/staring_type_zone.png"
        },
        {
          id: 8,
          icon: "/static/icon/child_type_zone.png"
        }
      ],
      gameClass: [
        {
          id: 1,
          name: "动作冒险",
          icon: "/static/icon/class_icon_1.png",
          color: "#23b577",
          sub: [
            {
              id: 1,
              name: "跑酷闯关"
            },
            {
              id: 2,
              name: "网游RPG"
            },
            {
              id: 3,
              name: "赛车体育"
            },
            {
              id: 4,
              name: "飞行空战"
            },
            {
              id: 5,
              name: "动作枪战"
            },
            {
              id: 6,
              name: "格斗快打"
            }
          ]
        },
        {
          id: 2,
          name: "休闲益智",
          icon: "/static/icon/class_icon_2.png",
          color: "#ff8b00",
          sub: [
            {
              id: 1,
              name: "休闲创意"
            },
            {
              id: 2,
              name: "棋牌桌游"
            },
            {
              id: 3,
              name: "模拟经营"
            },
            {
              id: 4,
              name: "战争策略"
            },
            {
              id: 5,
              name: "塔防迷宫"
            },
            {
              id: 6,
              name: "儿童益智"
            }
          ]
        }
      ],
      appClass: [
        {
          id: 3,
          name: "影音视听",
          icon: "/static/icon/class_icon_3.png",
          color: "#ff2e28",
          sub: [
            {
              id: 1,
              name: "视频"
            },
            {
              id: 2,
              name: "直播"
            },
            {
              id: 3,
              name: "播放器"
            },
            {
              id: 4,
              name: "音乐"
            },
            {
              id: 5,
              name: "电台"
            }
          ]
        },
        {
          id: 4,
          name: "试用工具",
          icon: "/static/icon/class_icon_4.png",
          color: "#1f72ed",
          sub: [
            {
              id: 1,
              name: "系统"
            },
            {
              id: 2,
              name: "浏览器"
            },
            {
              id: 3,
              name: "输入法"
            },
            {
              id: 4,
              name: "安全"
            },
            {
              id: 5,
              name: "小工具"
            }
          ]
        },
        {
          id: 5,
          name: "聊天社交",
          icon: "/static/icon/class_icon_5.png",
          color: "#28c428",
          sub: [
            {
              id: 1,
              name: "聊天"
            },
            {
              id: 2,
              name: "婚恋"
            },
            {
              id: 3,
              name: "通讯"
            },
            {
              id: 4,
              name: "交友"
            },
            {
              id: 5,
              name: "社区"
            }
          ]
        },
        {
          id: 6,
          name: "图书阅读",
          icon: "/static/icon/class_icon_6.png",
          color: "#04b59a",
          sub: [
            {
              id: 1,
              name: "听书"
            },
            {
              id: 2,
              name: "漫画"
            },
            {
              id: 3,
              name: "电子书"
            },
            {
              id: 4,
              name: "小说"
            },
            {
              id: 5,
              name: "杂志"
            }
          ]
        },
        {
          id: 7,
          name: "时尚购物",
          icon: "/static/icon/class_icon_7.png",
          color: "#fe3216",
          sub: [
            {
              id: 1,
              name: "电商"
            },
            {
              id: 2,
              name: "团购"
            },
            {
              id: 3,
              name: "海淘"
            },
            {
              id: 4,
              name: "导购"
            },
            {
              id: 5,
              name: "时尚"
            }
          ]
        },
        {
          id: 8,
          name: "摄影摄像",
          icon: "/static/icon/class_icon_8.png",
          color: "#0374ee",
          sub: [
            {
              id: 1,
              name: "美图"
            },
            {
              id: 2,
              name: "相机"
            },
            {
              id: 3,
              name: "图片分享"
            },
            {
              id: 4,
              name: "相册"
            },
            {
              id: 5,
              name: "视频"
            }
          ]
        },
        {
          id: 9,
          name: "学习教育",
          icon: "/static/icon/class_icon_9.png",
          color: "#9953ff",
          sub: [
            {
              id: 1,
              name: "外语"
            },
            {
              id: 2,
              name: "词典"
            },
            {
              id: 3,
              name: "驾考"
            },
            {
              id: 4,
              name: "考试"
            },
            {
              id: 5,
              name: "教育"
            },
            {
              id: 6,
              name: "育儿"
            }
          ]
        },
        {
          id: 10,
          name: "旅行交通",
          icon: "/static/icon/class_icon_10.png",
          color: "#2eb53d",
          sub: [
            {
              id: 1,
              name: "用车"
            },
            {
              id: 2,
              name: "地图"
            },
            {
              id: 3,
              name: "旅游"
            },
            {
              id: 4,
              name: "酒店"
            },
            {
              id: 5,
              name: "票务"
            },
            {
              id: 6,
              name: "公交地铁"
            }
          ]
        },
        {
          id: 11,
          name: "金融理财",
          icon: "/static/icon/class_icon_11.png",
          color: "#ff9f00",
          sub: [
            {
              id: 1,
              name: "银行"
            },
            {
              id: 2,
              name: "股票"
            },
            {
              id: 3,
              name: "基金"
            },
            {
              id: 4,
              name: "记账"
            },
            {
              id: 5,
              name: "支付"
            },
            {
              id: 6,
              name: "贷款"
            }
          ]
        },
        {
          id: 12,
          name: "娱乐消遣",
          icon: "/static/icon/class_icon_12.png",
          color: "#ff5f25",
          sub: [
            {
              id: 1,
              name: "搞怪"
            },
            {
              id: 2,
              name: "小游戏"
            },
            {
              id: 3,
              name: "星座运势"
            },
            {
              id: 4,
              name: "笑话"
            }
          ]
        },
        {
          id: 13,
          name: "新闻资讯",
          icon: "/static/icon/class_icon_13.png",
          color: "#0f74ff",
          sub: [
            {
              id: 1,
              name: "资讯"
            },
            {
              id: 2,
              name: "科技"
            },
            {
              id: 3,
              name: "热点"
            },
            {
              id: 4,
              name: "头条"
            },
            {
              id: 5,
              name: "杂志"
            }
          ]
        },
        {
          id: 14,
          name: "居家生活",
          icon: "/static/icon/class_icon_14.png",
          color: "#ff540e",
          sub: [
            {
              id: 1,
              name: "闹钟"
            },
            {
              id: 2,
              name: "查违章"
            },
            {
              id: 3,
              name: "天气日历"
            },
            {
              id: 4,
              name: "美食"
            },
            {
              id: 5,
              name: "电影票"
            },
            {
              id: 6,
              name: "房产家居"
            }
          ]
        },
        {
          id: 15,
          name: "体育运动",
          icon: "/static/icon/class_icon_15.png",
          color: "#9750ff",
          sub: [
            {
              id: 1,
              name: "健身"
            },
            {
              id: 2,
              name: "计步"
            },
            {
              id: 3,
              name: "球类"
            },
            {
              id: 4,
              name: "直播"
            }
          ]
        },
        {
          id: 16,
          name: "医疗健康",
          icon: "/static/icon/class_icon_16.png",
          color: "#fe2116",
          sub: [
            {
              id: 1,
              name: "减肥"
            },
            {
              id: 2,
              name: "经期"
            },
            {
              id: 3,
              name: "养生"
            },
            {
              id: 4,
              name: "孕育"
            },
            {
              id: 5,
              name: "美容"
            },
            {
              id: 6,
              name: "医疗"
            }
          ]
        },
        {
          id: 17,
          name: "效率办公",
          icon: "/static/icon/class_icon_17.png",
          color: "#1d74ee",
          sub: [
            {
              id: 1,
              name: "办公"
            },
            {
              id: 2,
              name: "邮箱"
            },
            {
              id: 3,
              name: "笔记"
            },
            {
              id: 4,
              name: "云盘"
            },
            {
              id: 5,
              name: "日程"
            }
          ]
        }
      ]
    };
  }
};
</script>


