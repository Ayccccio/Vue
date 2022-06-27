<template>
    <div>
        <h1 ref="app">这里是APP</h1>
        <Student ref="vc"></Student>    
        <button ref="btn" @click="showRefs">点击打印refs</button>
    </div>
</template>

<script>
    import Student from './components/Student.vue'
export default {
    name: 'App',
    components: {
        Student
    },
    methods: {
        showRefs(){
            console.log(this.$refs)
        }
    }
}
</script>

<style>

</style>