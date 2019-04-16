// 2s 之后返回双倍的值
// async顾名思义是“异步”的意思，async用于声明一个函数是异步的。而await从字面意思上是“等待”的意思，就是用于等待异步完成。
// 并且await只能在async函数中使用

// 通常async、await都是跟随Promise一起使用的。为什么这么说呢？
// 因为async返回的都是一个Promise对象同时async适用于任何类型的函数上。
// 这样await得到的就是一个Promise对象(如果不是Promise对象的话那async返回的是什么 就是什么)；

// await得到Promise对象之后就等待Promise接下来的resolve或者reject。

//async、await串行并行处理
//串行：等待前面一个await执行后接着执行下一个await，以此类推
//并行：将多个promise直接发起请求（先执行async所在函数），然后再进行await操作

function doubleAfter2seconds(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2 * num)
        }, 2000);
    } )
}

async function testResult() {
    let first = await doubleAfter2seconds(30);
    let second = await doubleAfter2seconds(50);
    let third = await doubleAfter2seconds(30);
    console.log(first + second + third);
}

testResult();