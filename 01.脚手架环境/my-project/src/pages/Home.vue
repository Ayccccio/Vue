<template>
    <div class="col-xs-6">
        <div class="panel">
            <div class="panel-body">
                <h2>我是Home的内容</h2>
                <div>
                    <ul class="nav nav-tabs">
                        <li>
                            <router-link active-class="active" to="/home/news" class="list-group-item" href="./home-news.html">News</router-link>
                        </li>
                        <li>
                            <router-link active-class="active" to="/home/message" class="list-group-item" href="./home-message.html">Message</router-link>
                        </li>
                    </ul>

                    <!-- 让News组件失活时不被销毁 -->
                    <keep-alive include="News,Message">     
                        <router-view></router-view>
                    </keep-alive>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>