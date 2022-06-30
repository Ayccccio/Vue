<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="addTodo"/>
    </div>
</template>

<script>
    import {nanoid} from 'nanoid'
export default {
    name: 'TodoHeader',
    props: ['handleTodo'],
    methods:{
        addTodo(e){
            this.handleTodo[2]({id:nanoid(), name:e.target.value, done:false})
            e.target.value = ''
        }
    }
};
</script>

<style scoped>
/*header*/
.todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
}
</style>