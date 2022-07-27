<template>
    <div>
        <div class="row">
            <div class="col-xs-offset-2 col-xs-8">
                <div class="page-header">
                    <h2>Vue Router Demo</h2>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-2 col-xs-offset-2">
                <div class="list-group">
                    <router-link active-class="active" to="/about" class="list-group-item" href="./about.html">About</router-link>
                    <router-link active-class="active" to="/home" class="list-group-item" href="./home.html">Home</router-link>
                </div>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name:'App'
};
</script>

<style>
</style>