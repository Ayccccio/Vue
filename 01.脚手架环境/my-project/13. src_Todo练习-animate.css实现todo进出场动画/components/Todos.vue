<template>
    <ul class="todo-main">
        <transition-group
        appear
        enter-active-class='animate__animated animate__bounceInRight '
        leave-active-class="animate__animated animate__bounceOutRight" >
            <Todo v-for="todo in todoList" :key="todo.id" :todo="todo"></Todo>
        </transition-group>
    </ul>
</template>

<script>
    import Todo from './Todo'
export default {
    components: {
        Todo
    },
    props: ['todoList']
}
</script>

<style scoped>
/*main*/
.todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
}

.todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
}
</style>