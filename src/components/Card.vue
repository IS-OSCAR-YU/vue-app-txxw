<template>
    <router-link to="/article/1" tag="div" class="card">
        <img :src="data.img" alt="">
        <div class="card-content">
            <h1><span v-if="data.zt != ''">{{data.zt}}</span>{{data.title}}</h1>
            <p>
                <span>{{data.source}}</span>
                <span>{{data.time}}</span>
                <span>评论：{{data.talk}}</span>
            </p>
        </div>
    </router-link>
</template>

<style lang="scss">
    $minColor: #3563d5;
    $secColor: #e3f3fe;
    .card {
        color: #000;
        width: 100%;
        height: 130px;
        padding: 20px 0;
        img {
            display: block;
            height: 100%;
            float: left;
        }
        .card-content {
            width: 450px;
            height: 100%;
            float: right;
            position: relative;
            h1 {
                font-size: 20px;
                font-weight: normal;
                span {
                    background: $minColor;
                    color: #fff;
                    margin-right: 5px;
                    font-size: 14px;
                    position: relative;
                    top: -3px;
                    padding: 0 5px;
                    border-radius: 3px;
                }
            }
            p {
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                font-size: 13px;
                color: #666;
                span:first-child {
                    float: left;
                }
                span:nth-child(2) {
                    margin-left: 10px;
                }
                span:last-child {
                    float: right;
                }
            }
        }
        
    }
</style>

<script>
export default {
    props: ['data']
}
</script>
