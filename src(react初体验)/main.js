

import React from 'react'
import ReactDOM from 'react-dom';

//jsx语法  js用{} 在JS里写html

//var a1=<h1>hellsso</h1>
// ReactDOM.render(a1,document.getElementById('a'))
//
// function cick(){

//             const nowtime= 
// <div> 
//             	<h1>{new Date().toLocaleString()}</h1>
//                <h2>{Date.now().toLocaleString()}</h2>

// </div>

// ReactDOM.render(nowtime,document.getElementById('a'))

// }
// setInterval(cick, 1000)
// var mytitle="123"


// var arr=[]
// for (var i = 0; i < 10; i++) {
// 	var p= <p className="mystyle" key={i}>dan shi</p>
// 	arr.push(p)
// }
// var mydiv=<div>
	 
//  这是jsx创建的html元素
//  <h1 title={mytitle+'aaa'}>jsx haowan</h1>
//  <p className="mystyle">dan shi</p>
//  <label htmlFor=""></label>
// {arr}

// </div>

// ReactDOM.render(mydiv,document.getElementById('a'))

//创建组件 方法一
//构造函数是一个基本的组件  首字母小写 html标签解析  大写 组件解析  父子传值 props 属性扩散...
// function Hello(props){

// return <div>zheshizujian----{props.name}--{props.age}</div>
// }
// import Hello from './compontents/Hello.jsx'
// // var name='zs'
// var person={
// 	name:'zs',
// 	age:22,
// 	gender:'nan'

// }
// // ReactDOM.render(<div><Hello name={name}></Hello></div>,document.getElementById('a'))
// ReactDOM.render(<div><Hello {...person}></Hello></div>,document.getElementById('a'))

//import Hello from './class_study.js'

//使用class创建的类 通过extends关键字 继承React.Component

// class Hello2 extends React.Component{

// 	constructor(props){
// 		//父类构造器
// 		super(props)
// console.log(props)
	
// 	}
// render(){

// 	return <div>
// 		<h1>class {this.props.name}</h1>
// 	</div>
// }

// }

// ReactDOM.render(<div><Hello2 name="sss"></Hello2></div>,document.getElementById('a'))



//渲染评论 两种方式



function Cmt(props){

	return  <div>
			 	<h1>{props.user}</h1>
                  <h1>{props.comment}</h1>
              
		</div>
}

class Comment extends React.Component{

   constructor(props){
 super(props)


this.state={
	cms:[
{user:'zs',comment:'123'},
{user:'zjs',comment:'143'},
{user:'zxs',comment:'133'}
]
   }

}
render(){
// var arr=[]
// this.state.cms.forEach(item=>{
// 	arr.push(<div>
// 		<h1>{item.user}</h1>
// <h1>{item.comment}</h1>
// 		</div>)
// })




return <div>
	{this.state.cms.map((item,i)=>{
		return <Cmt {...item} key={i}></Cmt>
	})}




</div>


}

}



ReactDOM.render(<div><Comment></Comment></div>,document.getElementById('a'))