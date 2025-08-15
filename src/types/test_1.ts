//完全兼容js，并且经过tsc编译之后也会生成一个js文件

//声明变量 声明类型
let personName:String = 'zy'
let person:Object = {}

//TS可以进行自动类型检测：声明的时候直接赋值
let personAge = 20

//JS的函数不检测参数的个数和类型，所以TS进行类型声明
function increment(a:number,b:number): number{
    let result = a + b
    console.log('result:',result)
    return result
}

// increment(123,'123') //报错
// increment(0,22,33) //报错