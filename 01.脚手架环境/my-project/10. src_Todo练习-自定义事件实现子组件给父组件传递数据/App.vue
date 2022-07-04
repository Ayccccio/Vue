<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <TodoHeader @addTodo="addTodo"></TodoHeader>
                <Todos :todoList="todoList" :handleTodo="handleTodo"></Todos>
                <TodoFooter
                    :todoList="todoList"
                    @checkAllTodo="checkAllTodo"
                    @clearTodo="clearTodo"
                ></TodoFooter>
            </div>
        </div>
    </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import Todos from "./components/Todos.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
    name: "App",
    components: {
        TodoHeader,
        Todos,
        TodoFooter,
    },
    data() {
        return {
            todoList: JSON.parse(localStorage.getItem('todoList')) || [],
            handleTodo: [this.toggleTodo, this.deleteTodo, this.addTodo],
        };
    },
    methods: {
        // todo单选框点击切换状态
        toggleTodo(id) {
            this.todoList.forEach((item) => {
                if (item.id == id) {
                    item.done = !item.done;
                }
            });
        },
        // 删除todo
        deleteTodo(id) {
            this.todoList = this.todoList.filter((item) => {
                return item.id != id;
            });
        },
        // 在todo列表前面插入一个新的todo
        addTodo(todo) {
            this.todoList.unshift(todo);
        },
        // 取消选中所有todo
        checkAllTodo(val) {
            this.todoList.forEach((item) => {
                item.done = val;
            });
        },
        // 清楚所有已完成todo
        clearTodo() {
            this.todoList = this.todoList.filter((item) => {
                return item.done !== true;
            });
        },
    },
    watch:{
        todoList:{
            deep:true,
            handler(value){
                localStorage.setItem('todoList',JSON.stringify(value))
            }
        }
    }
};
</script>

<style>
/*base*/
body {
    background: #fff;
}

.btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
        0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
}

.btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
}

.btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
}

.btn:focus {
    outline: none;
}

.todo-container {
    width: 600px;
    margin: 0 auto;
}
.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
        0 0 8px rgba(82, 168, 236, 0.6);
}
</style>