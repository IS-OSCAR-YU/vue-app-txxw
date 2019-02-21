<template>
    <div class="comment">
        <p>
            <span class="l">
                <span>全部评论</span>/<span>我的评论</span>
            </span>
            <span class="r">
                <span>最新</span>/<span>最热</span>
            </span>
        </p>
        
        <div class="comment-item-list">
            <CommentItem v-for="(item, index) in commentList" :key="index" :data="item"></CommentItem>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    $minColor: #379be9;
    $secColor: #e3f3fe;
    .comment {
        p {
            padding-bottom: 14px;
            border-bottom: 1px solid #f0f0f0;
            &::after {
                content: "";
                display: block;
                clear: both;
            }
            .l {
                float: left;
                span:first-child {
                    font-size: 22px;
                    margin-right: 6px;
                }
                span:last-child {
                    font-size: 14px;
                    margin-left: 6px;
                    color: $minColor;
                }
            }
            .r {
                float: right;
                span:first-child {
                    font-size: 14px;
                    margin-right: 6px;
                }
                span:last-child {
                    font-size: 22px;
                    margin-left: 6px;
                }
            }
        }
        .comment-item-list {
            margin-top: 30px;
        }
    }
</style>

<script>
import CommentItem from './CommentItem';

export default {
    components: {
        CommentItem
    },
    data() {
        return {
            commentList: ""
        }
    },
    watch: {
        '$store.state.commentList'() {
            let list = this.$store.state.commentList;
            this.commentList.unshift(list[list.length - 1]);
        }
    },
    created() {
        this.$axios.get('/data/article/comment.json').then(({ data }) => {
            this.commentList = data.list;
        })
    }
}
</script>