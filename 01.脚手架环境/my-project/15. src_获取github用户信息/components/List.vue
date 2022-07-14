<template>
    <div class="row" v-show="users">
        <User v-for="user in users" :key="user.id" :user="user"></User>
        <p v-show="state==0">欢迎使用</p>
        <p v-show="state==1">加载中</p>
        <p v-show="state==2">加载错误</p>
    </div>
</template>

<script>
import User from "./User.vue";
export default {
    name: "List",
    components: {
        User,
    },
    data() {
        return {
            users: [],
            state: 0, //0: 欢迎使用  1: 加载中 2: 错误
        };
    },
    mounted() {
        this.$bus.$on("getUsers", (data) => {
            this.users = data.items;
        }),
            this.$bus.$on("updateState", (state) => {
                this.state = state;
            }),
            this.$bus.$on("clearUsers", () => {
                this.users = null;
            });
    },
};
</script>

<style scoped>
div p {
    font-size: 30px;
    font-weight: bold;
}
</style>