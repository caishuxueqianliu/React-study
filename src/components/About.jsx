import React from 'react'
import ReactTypes from 'prop-types'

export default class About extends React.Component{

  constructor(props){
  	super(props)

  	this.state={}
  }
  static defaultProsp={}
    static propTypes={}


componentWillMount(){}
componentDidMount(){}
shouldComponentUpdate(nextProps,nextState){
	return true
}
componentWillUpdate(nextProps,nextState){}
componentDidUpdate(preProps,preState){}
componentWillReceiveProps(nextProps){}

render(){
	return <div>
	About</div>
}
}