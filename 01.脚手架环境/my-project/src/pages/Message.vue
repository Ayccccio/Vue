<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <!-- query传参的字符串写法 -->
                <!-- <router-link :to='`/home/message/detail?id=${m.id}&title=${m.title}`' href="/message1">{{m.title}}</router-link> -->

                <!-- query传参的对象写法 -->
                <!-- <router-link 
                :to="{
                    path:'/home/message/detail',
                    query:{
                        id: m.id,
                        title: m.title
                    }
                }"
                >{{m.title}}
                </router-link> -->

                <!-- params传参字符串写法 -->
                <!-- <router-link :to='`/home/message/detail/${m.id}/${m.title}`' href="/message1">{{m.title}}</router-link> -->

                <!-- params传参对象写法 -->
                <router-link
                    :to="{
                    name:'detail',      //params传参对象写法不能用path必需用name
                    params:{
                        id: m.id,
                        title: m.title
                    }
                }"
                >{{m.title}}</router-link>

            </li>
            <hr />
            <router-view></router-view>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Message",
    data() {
        return {
            messageList: [
                { id: "001", title: "消息001" },
                { id: "002", title: "消息002" },
                { id: "003", title: "消息003" },
            ],
        };
    },
    // 组件激活生命周期钩子
    // activated(){
    //     console.log('message激活了')
    // },

    // 组件失活生命周期钩子
    // deactivated(){
    //     console.log('message失活了')
    // }
};
</script>

<style>
</style>