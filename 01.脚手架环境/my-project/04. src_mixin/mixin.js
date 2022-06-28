const address = {
    data(){
        return {
            name: '李四',
            address:'湖南'
        }
    }
}

const color = {
    data(){
        return {
            color: 'red',
            background: 'blue'
        }
    },
    methods: {
        showThis(){
            console.log(this);
        }
    }
}

const global = {
    data(){
        return {
            global: '全局mixin'
        }
    },
    mounted () {
        console.log(this)
    }
}
export {address, color, global}