// function person(name,age){
// 		this.name=name
// 		this.age=age
// 	}


// person.prototype.say = function(argument){
// 	console.log('ok')
// };

// person.info='123'
// var p2=new person('zs',22)

//  console.log(p2)



//继承

 class per{

	constructor(name,age){
		this.name=name
		this.age=age
	}
	//实例方法
	say(){
		console.log('ok')
	}

	static info=123


	//静态方法
	static sayHello(){
		console.log('jingtai')
	}
}
var p1=new per('zs',22)
console.log(p1)
// console.log(per.info)







class chinese extends per{

	constructor(name,age,color,language){
		//父类构造器
		super(name,age)

		this.color=color
		this.language=language
	}
}

var c1=new chinese('zs',22,'yelow','cn')
console.log(c1)
c1.say()
console.log(chinese.info)
chinese.sayHello()



