<template>
    <div id="app">
        <Category type="游戏">
            <!-- 完整写法 v-slot:content={games} -->
            <template #content={games}>
                <ul>
                    <li v-for="(game,index) in games" :key="index">{{game}}</li>
                </ul>
            </template>
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