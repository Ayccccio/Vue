<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="checkTodo(todo.id)"/>
            <span>{{todo.name}}</span>
        </label>
        <button class="btn btn-danger" @click="deleteTodo(todo.id)">删除</button>
    </li>
</template>

<script>
export default {
    name: 'Todo',
    props: ['todo','handleTodo'],
    methods: {
        checkTodo(id){
            this.handleTodo[0](id)
        },
        deleteTodo(id){
            this.handleTodo[1](id)
        }
    }
}
</script>

<style lang="less" scoped>
/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}
li:hover{
    background-color: rgba(136, 136, 136, 0.301);
    button{
        display: block;
    }
}
li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    display: none;
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}
</style>