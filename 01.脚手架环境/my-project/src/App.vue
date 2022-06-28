<template>
    <div>
        <Student></Student>
    </div>
</template>

<script>
import {color} from './mixin'
import Student from './components/Student.vue'

export default {
    name: 'App',
    components: {
        Student
    },
    mixins: [color],
    mounted () {
        console.log(this)
    }
}
</script>