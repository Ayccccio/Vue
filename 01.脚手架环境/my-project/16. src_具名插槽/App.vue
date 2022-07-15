<template>
    <div id="app">
        <Category type="美食">
            <img slot="content" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt />
            <div slot="footer">
                <a href="#">美食传送门</a>
                <a href="#">更多美食</a>
            </div>
        </Category>
        <Category type="游戏">
            <ul slot="content">
                <li v-for="(food,index) in foods">{{food}}</li>
            </ul>
            <div slot="footer">
                <a href="#">游戏传送门</a>
                <a href="#">更多游戏</a>
            </div>
        </Category>
        <Category type="电影">
            <video slot="content" controls src ="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
            <div slot="footer">
                <a href="#">游戏传送门</a>
                <a href="#">更多游戏</a>
            </div>
        </Category>
    </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
    name: "App",
    components: { Category },
    data() {
        return {
            foods: ["火锅", "烧烤", "小龙虾", "牛排"],
            games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
            films: [
                "《教父》",
                "《拆弹专家》",
                "《你好，李焕英》",
                "《尚硅谷》",
            ],
        };
    },
};
</script>

<style lang='less'>
#app {
    display: flex;
    justify-content: space-evenly;
    .category {
        width: 200px;
        height: 300px;
        background-color: #85a4ed;
        h3 {
            background-color: orange;
            text-align: center;
            font-weight: bold;
        }
        img,
        video {
            width: 100%;
        }
        div {
            display: flex;
            justify-content: space-evenly;
        }
    }
}
</style>