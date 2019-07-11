<style lang="less" scoped>
.page_width_cus {
  padding: 0 9px;
}
//综合评分
.overall_rating {
  display: flex;
  align-items: center;
  height: 40px;
  color: #4a4a4a;
  border-bottom: 1px solid #d9d9d9;
  .title_cus {
    font-size: 15px;
    font-weight: 600;
  }
  .rating {
    display: flex;
    .fraction {
      color: #ff9600;
    }
    .star {
      margin-left: 4px;
    }
    .icon {
      margin-right: 2px;
      width: 12px;
      height: 12px;
      fill: #ff9600;
    }
  }
}
/* 发布评论 */
.publish {
  display: flex;
  padding-top: 13px;
  height: 75px;
  box-sizing: border-box;
  .user_avatar {
    margin-top: 2px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  .comment_enter_warpper {
    position: relative;
    margin-left: 15px;
    height: 35px;
    width: 100%;
  }
  .comment_enter_warpper::after {
    position: absolute;
    top: 0;
    bottom: 0;
    left: -5px;
    margin: auto;
    content: "";
    display: block;
    border-right: 1px solid #b2b2b2;
    border-top: 1px solid #b2b2b2;
    height: 10px;
    width: 10px;
    -webkit-transform: rotate(228deg);
    border-left: 2px solid transparent;
    border-bottom: 2px solid transparent;
    background: white;
  }
  .comment_enter {
    padding: 0 13px;
    width: 100%;
    height: 35px;
    line-height: 33px;
    font-size: 13px;
    color: #808080;
    border: 1px solid #b2b2b2;
    box-sizing: border-box;
    border-radius: 4px;
  }
}
/* 发布评论弹窗 */
.comment_enter_win {
  position: fixed;
  z-index: 7;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 150px;
  border-top: 1px solid #d0d0d0;
  background: #f5f5f5;
  .star_warpper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 16px;
    .icon {
      margin: 0 7px;
      width: 25px;
      fill: #ff9600;
    }
    .star_tips {
      margin-top: 5px;
      font-size: 11px;
      color: #7a7a7a;
    }
  }
  .enter_area {
    display: flex;
    margin-top: 18px;
    textarea {
      flex: 10;
      resize: none;
      padding: 9px 5px;
      height: 58px;
      font-size: 14px;
      border-radius: 4px;
      border: 1px solid #939393;
      box-sizing: border-box;
      outline:none;
      &::placeholder {
        color: #b2b2b2;
      }
    }
    .publish_button {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 2;
      .icon {
        width: 60%;
      }
    }
  }
}

/* 评论类型 */
.comment_type {
  display: flex;
  flex-wrap: wrap;
  .type_item {
    margin-right: 9px;
    padding: 0 9px;
    height: 33px;
    line-height: 31px;
    font-size: 14px;
    color: #4c4c4c;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #d0cfcf;
    &.active {
      color: white;
      background: #ff7200;
      border-color: #e66700;
    }
  }
}
/* 热门评论列表 */
.hot_comment_list {
  margin-top: 13px;
  padding-top: 13px;
  border-top: 1px solid #dadada;
  .title_common_cus .text {
    font-size: 14px;
  }
}
/* 分隔块 */
.separate_block {
  display: block;
  height: 7px;
  width: 100%;
  background: #efeff0;
}
/* 最新评论列表 */
.latest_comment_list {
  margin-top:14px;
  padding-bottom: 80px;
}
</style>

<template>
  <div id="comment_page" class="comment">
    <div class="overall_rating page_width_cus">
      <div class="title_cus">综合评分：</div>
      <div class="rating">
        <span class="fraction">4.0</span>
        <div class="star">
          <svg
            t="1562135764580"
            class="icon"
            viewBox="0 0 1032 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="9665"
            v-for="index in 5"
            :key="index"
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
        </div>
      </div>
    </div>
    <div class="publish page_width_cus">
      <img src="/static/user_avatar/avatar.jpg" alt srcset class="user_avatar" />
      <div class="comment_enter_warpper" @click.stop="displayEnterCommentWin">
        <div class="comment_enter" >我要评论</div>
      </div>
      <div class="comment_enter_win" v-show="comment.enterWinShow" @click.stop="comment.enterWinShow=true">
        <div class="page_width_cus">
          <div class="star_warpper">
            <div class="star">
              <svg
                t="1562135764580"
                class="icon"
                viewBox="0 0 1032 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="9665"
                v-for="index in 5"
                :key="index"
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
            </div>
            <div class="star_tips">点击星星评分</div>
          </div>
          <div class="enter_area">
            <textarea placeholder="友善发言的人，更容易被喜欢哦"></textarea>
            <div class="publish_button">
              <svg
                t="1562753199991"
                class="icon"
                viewBox="0 0 1088 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="9754"
              >
                <path
                  d="M42.624 0h1024v1024h-1024z"
                  fill="#c4c4c4"
                  fill-opacity="0.01"
                  p-id="9755"
                />
                <path
                  d="M244.48 544.192a32 32 0 0 1-30.336-21.888L102.912 187.968a32 32 0 0 1 42.368-39.744L971.712 482.56c32.64 13.184 23.168 61.632-12.032 61.632H244.48z m23.04-64h527.744L185.6 233.6 267.52 480.192z"
                  fill="#c4c4c4"
                  p-id="9756"
                />
                <path
                  d="M244.48 480.128a32 32 0 0 0-30.336 21.888l-111.232 334.336a32 32 0 0 0 42.368 39.808l826.432-334.336c32.64-13.184 23.168-61.696-12.032-61.696H244.48z m23.04 64h527.744L185.6 790.848 267.52 544.128z"
                  fill="#c4c4c4"
                  p-id="9757"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="comment_list_wrapper">
      <div class="comment_type page_width_cus">
        <div class="type_item active">全部</div>
        <div class="type_item">好评(4.2万)</div>
        <div class="type_item">差评(6.9万)</div>
      </div>
      <div class="hot_comment_list page_width_cus">
        <div class="title_common title_common_cus">
          <div class="main">
            <div class="text">热门评论</div>
          </div>
        </div>
        <Comment />
      </div>
      <div class="separate_block"></div>
      <div class="latest_comment_list page_width_cus">
        <div class="title_common title_common_cus">
          <div class="main">
            <div class="text">最新评论</div>
          </div>
        </div>
        <Comment />
      </div>
    </div>
  </div>
</template>

<script>
import Comment from "../../components/Comment";
export default {
  components: {
    Comment
  },
  data() {
    return {
      comment: {
        enterWinShow: false
      }
    };
  },
  methods:{
    displayEnterCommentWin(){
      this.comment.enterWinShow=!this.comment.enterWinShow;
      document.onclick=(e)=>{
        this.comment.enterWinShow=false;
      }
    }
  }
};
</script>


