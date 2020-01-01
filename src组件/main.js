
import React from 'react'
import ReactDOM from 'react-dom';
import Counter from './Counter.jsx'
import Test from './ComponentWillReceiveProps.jsx'
//import CmtList from './components/cmtlist.jsx'
import Cmtlist from './comment/CmtList.jsx'
import Context from './Context.jsx'
ReactDOM.render(<div><Counter ct={'sss'} initcount={22}></Counter></div>,
	document.getElementById('a'))

ReactDOM.render(<div><Test></Test></div>,
	document.getElementById('b'))

ReactDOM.render(<div><Cmtlist></Cmtlist></div>,
	document.getElementById('c'))
ReactDOM.render(<div><Context></Context></div>,
	document.getElementById('d'))