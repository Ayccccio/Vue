const address = {
    data(){
        return {
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

export {address, color}