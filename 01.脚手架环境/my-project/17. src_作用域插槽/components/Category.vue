<template>
    <div class="category">
        <h3>{{type}}分类</h3>
        <slot name='content' :games="games">当插槽没有设置内容时,我将会显示</slot>
        <slot name="footer" >当插槽没有设置内容时,我将会显示</slot>
    </div>
</template>

<script>
export default {
    name: 'Category',
    props:['type'],
    data() {
        return {
            foods: ["火锅", "烧烤", "小龙虾", "牛排"],
            games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
            films: [
                "《教父》",
                "《拆弹专家》",
                "《你好，李焕英》",
                "《尚硅谷》",
            ],
        };
    },
}
</script>