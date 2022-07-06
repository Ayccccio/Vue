<template>
    <div>
        <h2>学生姓名是:{{studentName}}</h2>
        <h2>学生年龄是:{{studentAge}}</h2>
        <hr />
        <Student ref="stu" @getStudentName="getStudentName" @click.native="showThis"></Student>
    </div>
</template>

<script>
import Student from "./components/Student.vue";
export default {
    name: "App",
    components: {
        Student,
    },
    data() {
        return {
            studentName: "",
            studentAge: null,
        };
    },
    methods: {
        // 绑定自定义事件
        getStudentName(value) {
            this.studentName = value;
        },
        // 测试给组件添加原生自定义事件
        showThis() {
            console.log(this);
        },
    },
    mounted() {
        // 通过ref的方式绑定自定义事件
        this.$refs.stu.$on("getStudentAge", (value) => {
            this.studentAge = value;
        });
    },
};
</script>