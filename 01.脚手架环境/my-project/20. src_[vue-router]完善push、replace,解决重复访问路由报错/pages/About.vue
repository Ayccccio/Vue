<template>
    <div class="col-xs-6">
        <div class="panel">
            <div class="panel-body">
                <h2>我是About的内容</h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "About",
    // 
    beforeRouteEnter(to, from, next) {
        if (to.meta.isAuth) {
            if (JSON.parse(localStorage.getItem("login"))) {
                next();
            } else {
                console.log("你没有登陆,登陆后才能访问");
            }
        }else{
            next()
        }
    },
    beforeRouteLeave(to,from,next){
        console.log('about路由离开')
        next()
    }
};
</script>

<style>
</style>