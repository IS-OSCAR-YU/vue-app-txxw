<template>
    <div class="home">
        <div class="head">
            <h2>今日新闻</h2>
            <p>
                <span>2019年02月20日 星期三</span>
            </p>
        </div>
        <div class="content">
            <div class="left">
                <div class="main-news-list">
                    <h3 v-for="(item, index) in mainNews" :key="index">{{item}}</h3>
                </div>
                <div class="hot-news-list">
                    <h2>热点精选</h2>
                    <Card v-for="(item, index) in hotNews" :key="index" :data="item"></Card>
                </div>
            </div>
            <div class="right">
                <SideCard v-for="(item, index) in asideNews" :key="index" :data="item"></SideCard>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    $minColor: #3563d5;
    $secColor: #e3f3fe;
    .home {
        color: #555;
        width: 1000px;
        padding: 120px 16px 16px;
        margin: 0 auto;
        background-clip: content-box;
        .head {
            width: 100%;
            height: 42px;
            line-height: 42px;
            font-size: 13px;
            display: flex;
            justify-content: space-between;
            h2 {
                color: $minColor;
                height: 100%;
                box-sizing: border-box;
                border-bottom: 3px solid $minColor;
            }
        }
        .content {
            &::after {
                content: "";
                display: block;
                clear: both;
            }
            .left {
                width: 670px;
                float: left;
                .main-news-list {
                    font-size: 18px;
                    font-weight: lighter;
                    line-height: 55px;
                    padding-top: 20px;
                    padding-bottom: 15px;
                    border-bottom: 1px solid #ccc;
                    h3 {
                        font-weight: normal;
                    }
                }
                .hot-news-list {
                    h2 {
                        padding: 15px 0 5px;
                        font-size: 22px;
                        color: $minColor;
                    }
                }
            }
            .right {
                width: 300px;
                float: right;   
            }
        }
    }
</style>

<script>
import Card from '../components/Card';
import SideCard from '../components/SideCard';

export default {
    components: {
        Card, SideCard
    },
    data() {
        return {
            mainNews: [
                '牢记习近平谆谆教诲 做好党的新闻舆论工作',
                '习近平两会上点赞过的追梦人：赵会杰',
                '坚持农业农村优先发展做好“三农”工作',
                '把握我国发展重要战略机遇新内涵：深化改革开放',
                '中央宣传部授予北京榜样优秀群体“时代楷模”称号'
            ],
            hotNews: [],
            asideNews: []
        }
    },
    created() {
        this.$axios.get('/data/home/hot.json').then(({ data }) => {
            this.hotNews = data.list;
        });

        this.$axios.get('/data/home/side.json').then(({ data }) => {
            this.asideNews = data.list;
        });
    }
}
</script>