<template>
    <div class="category">
        <h3>{{type}}分类</h3>
        <slot name='content'>当插槽没有设置内容时,我将会显示</slot>
        <slot name="footer">当插槽没有设置内容时,我将会显示</slot>
    </div>
</template>

<script>
export default {
    name: 'Category',
    props:['type']
}
</script>