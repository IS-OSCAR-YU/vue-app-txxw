<template>
    <div class="side-card">
        <div class="hd">
            <img :src="data.img" alt="">
        </div>
        <ul class="list">
            <li class="head">
                <img :src="data.src" alt="">
                <span>{{data.bigTitle}}</span>
            </li>
            <li class="detail" v-for="(item, index) in data.detail" :key="index">{{item}}</li>
        </ul>
    </div>
</template>

<style lang="scss">
    $minColor: #5184eb;
    $secColor: #e3f3fe;
    $bg: #f7f8f9;
    .side-card {
        width: 100%;
        height: 361px;
        background: $bg;
        box-sizing: border-box;
        padding: 10px;
        margin-bottom: 35px;
        .hd {
            width: 100%;
            height: 53px;
            line-height: 53px;
            box-sizing: border-box;
            position: relative;
            padding-left: 15px;
            &::before {
                content: "";
                position: absolute;
                left: 0;
                bottom: 10px;
                display: block;
                width: 5px;
                height: 22px;
                background: $minColor;
            }
            img {
                vertical-align: middle;
            }
        }
        .list {
            padding-top: 10px;
            .head {
                height: 80px;
                img {
                    height: 100%;
                }
                span {
                    line-height: 18px;
                    margin-left: 10px;
                }
            }
            .detail {
                font-size: 14px;
                padding: 8px 0 8px 12px;
                background: url(/img/home/dot.png) left 13px no-repeat;
            }
        }
    }
</style>

<script>
export default {
    props: ['data']
}
</script>