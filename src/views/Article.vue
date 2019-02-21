<template>
    <div class="article">
        <h1>{{data.title}}</h1>
        <div class="aside"></div>
        <ul class="content">
            <li v-for="(item, index) in data.content" :key="index">
                <p v-if="typeof item === 'string'">{{item}}</p>
                <div class="banner" v-else-if="typeof item === 'object'">
                    <img :src="item.imgs.src" alt="">
                    <p>{{item.imgs.desc}}</p>
                </div>
            </li>

            <div class="endpage">
                <p>THE END</p>
                <p>免责声明：本文来自腾讯新闻客户端自媒体，不代表腾讯网的观点和立场。</p>
            </div>

            <div class="comment-area">
                <div class="title">
                    <span>网友评论</span>
                    <span>文明上网理性发言，请遵守新闻评论服务协议</span>
                    <span>0条评论</span>
                </div>
                <div class="box">
                    <div class="img"></div>
                    <div class="box-area">
                        <textarea @keyup.enter="sendComment" v-model="comment"></textarea>
                    </div>
                    
                    <div class="btn">登录</div>
                </div>

                <Comment></Comment>
            </div>
        </ul>
        
    </div>
</template>

<style lang="scss" scoped>
    $minColor: #379be9;
    $secColor: #e3f3fe;
    .article {
        padding: 120px 0 0;
        width: 1240px;
        margin: 0 auto;
        h1 {
            font-size: 40px;
            padding: 8px 0 25px;
        }
        .aside {
            width: 80px;
            height: 1000px;
            float: left;
            padding-right: 30px;
            margin-right: 30px;
            border-right: 1px solid #eee;
        }
        .content {
            width: 730px;
            float: left;
            li {
                padding: 20px 0;
                font-size: 19px;
                &:first-child {
                    padding: 0 0 20px;
                }
                &:nth-child(6),
                &:nth-child(14),
                &:nth-child(20) {
                    font-weight: bold;
                }
                .banner {
                    text-align: center;
                    p {
                        font-size: 15px;
                        font-weight: normal;
                        color: #666;
                        font-style: italic;
                    }
                }
            }
            .endpage {
                text-align: center;
                p:first-child {
                    font-size: 18px;
                }
                p:last-child {
                    font-size: 12px;
                    margin-top: 26px;
                    color: #ccc;
                }
            }
            .comment-area {
                .title {
                    padding-bottom: 22px;
                    padding-top: 60px;
                    span:first-child {
                        font-size: 24px;
                        font-weight: bold;
                    }
                    span:nth-child(2) {
                        margin-left: 10px;
                        font-size: 14px;
                        color: #ccc;
                    }
                    span:last-child {
                        float: right;
                        color: $minColor;
                    }
                }
                .box {
                    width: 100%;
                    box-sizing: border-box;
                    padding-left: 68px;
                    position: relative;
                    .img {
                        position: absolute;
                        width: 50px;
                        height: 50px;
                        border-radius: 30px;
                        top: 0;
                        left: 0;
                        background: url(/img/article/comment.jpg) 0 0 no-repeat;
                    }
                    .box-area {
                        padding: 12px 0 12px 12px;
                        box-sizing: border-box;
                        border: 3px solid #f0f0f0;
                        textarea {
                            width: 534px;
                            height: 72px;
                            outline: none;
                            border: none;
                            font-size: 16px;
                        }
                    }
                    .btn {
                        width: 111px;
                        height: 108px;
                        position: absolute;
                        top: 0;
                        right: 0;
                        background: $minColor;
                        text-align: center;
                        line-height: 108px;
                        color: #fff;
                    }
                }
                .comment {
                    margin-top: 50px;
                }
            }
        }
    }
</style>

<script>
import Comment from '../components/Comment';

export default {
    components: {
        Comment
    },
    data() {
        return {
            data: '',
            comment: ''
        }
    },
    created() {
        this.$axios.get('/data/article/1.json').then(({ data }) => {
            this.data = data;
        });
    },
    methods: {
        sendComment(e) {
            let data = {
                "img": "/img/article/user2.png",
                "nickname": "可乐",
                "time": "19小时前",
                "content": "化妆品一直都是暴利行业，我第一桶金就是开了个小小的化妆品店，看人给货，后面不干了，亏心"
            };
            data.content = this.comment;
            this.$store.commit('addComment', data);
            this.comment = '';
        }
    }
}
</script>