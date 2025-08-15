// 对象类型
let A:Object = {}
let A1 = {}
// 函数也是一个对象
let A2 = ()=>{

}

// 对象的声明通常不是第一种写法,而是在{}内部写上键值对，表示内部属性
let B:{
    name:string,
    age:Number,
    b:Object,
    subName?:String  //属性名后＋？，可选属性
    //对象只能有上面3or4个属性，并且最少得有前三个。
    //但是 如果赋值的时候想要新增属性怎么办？
    [propName:string]:any //设置了这个，自己就可以新增any类型属性
}

B = {name:'zy',age:20,b:{},xyz:'111'}


// 声明C是一个函数
let C1:Function
// 参数和返回值同时声明
let C2:(a:number,b:number)=>number

// 赋值符合规范即可
C2 = (n1: number,n2:number)=>{
    return n1+n2
}

C2 = function(x1:number,x2:number){
    return x1+x2
}

//类型数组
let array_str:String[]
let array_num1:number[]
let array_num2:Array<number>
let array_any:any[] //Array<any>

//元组，就是固定长度的数组
let array_const1:[string,string]
let array_const2:[string,number]
let array_const3:[] //声明了一个空集的元组

//声明枚举
enum Gender{
    Male = 0,
    Female = 1
}
//声明对象（使用枚举）
let Person_enum:{ name:string,sex:Gender}
//对象赋值
Person_enum = {
    name:'zy',
    sex:Gender.Male
}
//属性判断(使用枚举)
if(Person_enum.sex === Gender.Male){
    console.log('男')
}

// |和&
let O:{name:string}&{age:number}

// 类型别名
type myType =string

let value: 1|2|3|4|5

type myValue = 1|2|3|4|5
let myvalue:myValue