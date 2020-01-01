
import React from 'react'


export default class parent extends React.Component{

  constructor(props){
super(props)
this.state={
       msg:"fuzujiandezhi"
	}
  }

render(){
	return <div>
	<h1>父组件---{this.state.msg}</h1>
	<button onClick={this.change}>change</button>
	<hr/>
	<Son pmsg={this.state.msg}></Son>
	</div>
}

change=()=>{
	this.setState({
		msg:'wahha'
	})
}
}


class Son extends React.Component{

  constructor(props){
super(props)
this.state={
  }
}

render(){
	return <div><h3>zizujian***{this.props.pmsg}</h3></div>
}

componentWillReceiveProps(nextProps){
	//props发生改变触发
	console.log(this.props.pmsg+'----'+nextProps.pmsg)
}
}