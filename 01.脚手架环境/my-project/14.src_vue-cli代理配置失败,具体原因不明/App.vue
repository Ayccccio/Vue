<template>
    <div id="root">
        <button @click="getPerson">获取人员信息</button>
        <button @click="getCar">获取车辆信息</button>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "App",
    methods: {
        getPerson() {
            axios.get("http://localhost/students").then(
                response => {
                    console.log('请求成功了',response.data)
                },
                err => {
                    console.log('请求失败了',err.message)
                }
            );
        },
        getCar() {
            axios.get("http://localhost:5001/car").then(
                response => {
                    console.log('请求成功了',response.data)
                },
                err => {
                    console.log('请求失败了',err.message)
                }
            );
        },
    },
    mounted(){
    }
};
</script>