const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject('Numbers must be non-negative')
            }

            resolve(a + b)
        }, 2000)
    })
}

//we cannot use await outside of async function
const doWork = async () => {       //async always returns promise
    const sum = await add(1, -99)  // await signifies that it will wait for 2 seconds before moving to next statement even if it is asynchronous function
    const sum2 = await add(sum, 50)
    const sum3 = await add(sum2, -3)
    return sum3
}

doWork().then((result) => {
    console.log('result', result)
}).catch((e) => {
    console.log('e', e)
})