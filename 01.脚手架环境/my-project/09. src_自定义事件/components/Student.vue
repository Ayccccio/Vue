<template>
    <div>
        <h2>姓名:{{name}}</h2>
        <h2>年龄:{{age}}</h2>
        <br>
        <button @click='name="张三"'>设置名字为张三</button>
        <button @click='age++'>age++</button>
        <br>
        <button @click='sendName'>将名字传给App</button>
        <button @click='sendAge'>将年龄传给App</button>
        <br>
        <button @click='unbindingName'>解绑(将名字传给App)事件</button>
        <button @click='unbindingAge'>解绑(将年龄传给App)事件</button>
        <button @click='unbindingNameAndAge'>解绑(名字,年龄)事件</button>
        <button @click='unbindinggAll'>解绑全部自定义事件</button>

    </div>
</template>

<script>
export default {
    name: 'Student',
    data(){
        return{
            name: 'zaaasd',
            age: 19,
        }
    },
    methods:{
        sendName(){
            this.$emit('getStudentName',this.name)
        },
        sendAge(){
            this.$emit('getStudentAge',this.age)
        },
        unbindingName(){
            this.$off('getStudentName')
        },
        unbindingAge(){
            this.$off('getStudentAge')
        },
        unbindingNameAndAge(){
            this.$off(['getStudentAge','getStudentName'])
        },
        unbindinggAll(){
            this.$off()
        }
    }
};
</script>