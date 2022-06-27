<template>
	<div>
		<h1>{{msg}}</h1>
		<h2>学生姓名：{{name}}</h2>
		<h2>学生性别：{{sex}}</h2>
		<h2>学生年龄：{{myAge+1}}</h2>
		<button @click="myAge++">尝试修改收到的年龄</button>
	</div>
</template>

<script>
	export default {
		name:'Student',
		data() {
			console.log(this)
			return {
				msg:'我是一个尚硅谷的学生',
				// name: '张三',
				// sex: '男',
				myAge:this.age
			}
		},
		//简单声明接收
		// props:['name','age','sex'] 

		//接收的同时对数据类型进行限制
		// props: {
		// 	name: String,
		// 	age: Number,
		// 	sex: String
		// }

		//接收的同时: 对数据类型进行限制 + 定义默认值 + 是否必需传参
		props: {
			name:{
				type:String,		//限制类型
				required: true 		//是否必传
			},
			age:{
				type:Number,	
				default: 30
			},
			sex:{
				type:String,	
				required: true
			}
		}
	}
</script>