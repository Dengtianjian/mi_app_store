import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apps: [{
        id: 1,
        icon: "/static/app_icon/douyin.png",
        name: "抖音短视频",
        star: 4,
        type: "影音视听",
        size: "71.8M",
        summary: "抖音记录美好生活"
      },
      {
        id: 2,
        icon: "/static/app_icon/qq.png",
        name: "QQ",
        star: 2,
        type: "聊天社交",
        size: "67.1M",
        summary: "乐在沟通20年，聊天欢乐9亿人"
      },
      {
        id: 3,
        icon: "/static/app_icon/bosszhipin.png",
        name: "Boss直聘",
        star: 4.5,
        type: "实用工具",
        size: "44.4M",
        summary: "互联网招聘、求职、找工作APPPPPPPPPPPPPPPPP"
      },
      {
        id: 4,
        icon: "/static/app_icon/kuaishou.png",
        name: "快手",
        star: 4.5,
        type: "摄影影响",
        size: "77.7M",
        summary: "看见每一种生活"
      },
      {
        id: 5,
        icon: "/static/app_icon/chucp.png",
        name: "处CP",
        star: 5,
        type: "聊天社交",
        size: "37.0M",
        summary: "处CP玩游戏"
      },
      {
        id: 6,
        icon: "/static/app_icon/pinduoduo.png",
        name: "拼多多",
        star: 3.5,
        type: "时尚购物",
        size: "19.4M",
        summary: "3亿人都在拼的购物App"
      },
      {
        id: 7,
        icon: "/static/app_icon/weixin.png",
        name: "微信",
        star: 3.5,
        type: "聊天社交",
        size: "96.9M",
        summary: "微信，是一种生活方式"
      },
      {
        id: 8,
        icon: "/static/app_icon/tencentvideo.png",
        name: "腾讯视频",
        star: 4,
        type: "影音视听",
        size: "36.9M",
        summary: "明日之子首播"
      },
      {
        id: 9,
        icon: "/static/app_icon/qqemail.png",
        name: "QQ邮箱",
        star: 3.5,
        type: "效率办公",
        size: "19.5M",
        summary: "全面管理你的所有邮箱"
      },
      {
        id: 10,
        icon: "/static/app_icon/aiqiyijisuban.png",
        name: "爱奇艺 极速版",
        star: 4.5,
        type: "影音视听",
        size: "23.7M",
        summary: "中国新说唱抢先看"
      },
      {
        id: 11,
        icon: "/static/app_icon/huoshanxiaoshipin.png",
        name: "火山小视频",
        star: 4.5,
        type: "影音视听",
        size: "28.3M",
        summary: "在火山热爱生活"
      },
      {
        id: 12,
        icon: "/static/app_icon/xinlangxinwen.png",
        name: "新浪新闻",
        star: 2,
        type: "新闻资讯",
        size: "34.2M",
        summary: "资讯头条看不断，财经娱乐全掌握"
      }
    ]
  },
  mutations: {

  },
  actions: {

  }
})