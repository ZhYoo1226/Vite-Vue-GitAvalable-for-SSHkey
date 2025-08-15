// 字面量
let a:10
a = 10
// a = 11 //报错

// 字面量 + | => 联合类型
let sex: 'male'|"female"
sex = 'male'
// sex = 'man' //报错

// any （声明变量不指定类型，默认为any，相当于TS=>JS了）
let abc:any;
abc = 10
abc = 'abc'
abc = true

// def也被定义为any了
let def = abc

// unknow类型也被称为安全类型
let shift:unknown
shift = 1
shift = true
shift = 'string'

let test = 'hello'
// test = shift // unknow类型不能赋值给string
test = abc // any类型可以赋值给别人，可以被别人赋值

// unknown类型 要想赋值给别人
// 一 断言
let string1:string = shift as string
string1 = <string>shift
// 二 判断（仅仅不会报错，但是仍然无法进行）
if(typeof shift === 'string'){
    string1 = shift
}


// 函数常用返回类型
// void类型空值
function fn1(): void{
    
    // 直接不写return,默认设定为undefined
    // return 
    // return undefined
}

// never类型( 没有返回类型，常常用来抛出 )
function fn2(err): never{
    throw new Error(err)
}