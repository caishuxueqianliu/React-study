import React from 'react'

import ReactTypes from 'prop-types'

export default class Counter extends React.Component{
constructor(props){
	super(props)

//私有数据
	this.state={
        init:1,
        count:props.initcount
	}
	this.cg2=this.cg2.bind(this,'hah')

}
 //如没有传，设置默认值
	static defaultProps={
		initcount:0
	}
//规定传值的类型
//npm i prop-types
static propTypes={
	initcount:ReactTypes.number
}


componentWillMount(){
//等同Vue 中的 created
//组件未挂载到页面
//DOM未创建
console.log(this.props.initcount)

console.log(this.state.init)
console.log(this.state.count)
this.myself()
}


//等同Vue 中的 mounted
componentDidMount(){

console.log(document.getElementById('a'))
document.getElementById('btn').onclick=()=>{
//this指向
this.setState({

 // count:this.state.count+1
count:this.state.count+1
})

}

}

shouldComponentUpdate(nextProps,nextState){
//判断是否刷新页面
	// console.log(this.state.count+'-------'+nextState.count)
	// return nextState.count%2===0?true:false
	return true
}

componentWillUpdate(nextProps,nextState){
//获取的是旧的DOM 
	//console.log(document.getElementById('h3').innerHTML)
	console.log(this.refs.h3.innerHTML)
}


componentDidUpdate(preProps,preState){
//获取的是旧的DOM 
	//console.log(document.getElementById('h3').innerHTML)
	console.log(this.refs.h3.innerHTML)
}






render(){

	return <div>
	<h1>Counter123</h1>


 <button type='button' value='+1' id="btn">+1</button>
 <button type='button' value='+1' id="btn1" onClick={this.add}>react+1</button>
  <button type='button' value='+1' onClick={this.cg1.bind(this,'hah')}>+1</button>
   <button type='button' value='+1' onClick={this.cg2}>+1</button>
    <button type='button' value='+1' onClick={()=>{this.cg3('hah')}}>+1</button>
    <button type='button' value='+1' onClick={()=>{this.cg4('hah')}}>+1</button>
 <hr/>
 <input type="text" value={this.state.init} onChange={this.cg}/>
 <h3 id='h3' ref="h3">{this.state.count}</h3>
 <h3>{this.state.init}</h3>
  <h3>{this.props.ct}</h3>
	</div>
}
cg=(e)=>{
this.setState({

	init:e.target.value
})
}
//bind apply call 改变this指向  前者不执行函数 后者立即指向
cg1(arg1){
	this.setState({
		init:'1'+arg1
	})
}

cg2(arg1){
	this.setState({
		init:'2'+arg1
	})
}
cg3(arg1){
	this.setState({
		init:'3'+arg1
	})
}
cg4=(arg1)=>{
	this.setState({
		init:'4'+arg1
	})
}
add=()=>{
this.setState({

 // count:this.state.count+1
count:this.state.count+1
})
}
myself(){
	console.log('myself')
}
}