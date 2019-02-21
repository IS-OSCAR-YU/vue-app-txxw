<template>
    <div class="comment-item">
        <!-- <h1>{{data}}</h1> -->
        <img class="user-logo" :src="data.img" alt="">
        <p class="user-name">
            <span>{{data.nickname}}</span>
            <span>{{data.time}}</span>
        </p>
        <p class="user-comment">{{data.content}}</p>
    </div>
</template>

<style lang="scss" scoped>
    .comment-item {
        width: 662px;
        height: 118px;
        padding-left: 68px;
        position: relative;
        .user-logo {
            position: absolute;
            left: 0;
            top: 0;
            width: 50px;
            height: 50px;
            border-radius: 30px;
        }
        .user-name {
            font-size: 14px;
            span:last-child {
                margin-left: 10px;
            }
        }
        .user-comment {
            padding-top: 10px;
        }
    }
</style>

<script>
export default {
    props: ['data']
}
</script>
