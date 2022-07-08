<template>
    <li>
        <label>
            <input type="checkbox" 
                :checked="todo.done" 
                @change="toggleTodo(todo.id)" 
            />
            <span 
                v-show="!todo.isEdit"
                >{{todo.name}}
            </span>
            <input 
                type="text" 
                ref="inp"
                v-show="todo.isEdit"
                @blur="uneditTodo($event,todo)" 
            />
        </label>
        <button class="btn btn-danger" 
            @click="deleteTodo(todo.id)"
            >删除
        </button>
        <button class="btn btn-edit" 
            @click="editTodo(todo)" 
            v-show="!todo.isEdit"
            >编辑
        </button>
    </li>
</template>

<script>
export default {
    name: "Todo",
    props: ["todo"],
    methods: {
        toggleTodo(id) {
            PubSub.publish("toggleTodo", id);
        },
        deleteTodo(id) {
            PubSub.publish("deleteTodo", id);
        },

        // 编辑按钮点击
        editTodo(todo) {
            if(todo.hasOwnProperty('isEdit')){
                todo.isEdit = true
            }else{
                this.$set(todo,'isEdit',true)
            }
            this.$refs.inp.value = todo.name
            this.$nextTick(function(){
                this.$refs.inp.focus()
            })
        },

        // 编辑框失去焦点
        uneditTodo(e,todo) {
            if(e.target.value.trim() !== ''){
                todo.name = e.target.value
            }
            todo.isEdit = false
        },
    },
};
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
li:hover {
    background-color: rgba(136, 136, 136, 0.301);
    button {
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