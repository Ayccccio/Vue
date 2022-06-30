<template>
    <div class="todo-footer" v-show="todoTotal">
        <label>
            <input type="checkbox" v-model="isAll"/>
        </label>
        <span>
            <span>已完成{{todoSeleted}}</span> / 全部{{todoTotal}}
        </span>
        <button class="btn btn-danger" @click="clearTodo">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name: 'TodoFooter',
    props:['todoList','checkAllTodo',"clearTodo"],
    computed:{
        // 获取todo总个数
        todoTotal() {
            return this.todoList.length;
        },
        // 获取todo选中个数
        todoSeleted() {
            return this.todoList.reduce((pre, current) =>
                pre + (current.done ? 1 : 0), 0
            );
        },
        isAll: {
            get(){
                return this.todoSeleted ==this.todoTotal && this.todoSeleted > 0
            },
            set(val){
                this.checkAllTodo(val)
            }
        }
    }
};
</script>

<style scoped>
/*footer*/
.todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}

.todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}

.todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}

.todo-footer button {
    float: right;
    margin-top: 5px;
}
</style>