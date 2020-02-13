/* slowMath.add(6, 2).then(res => {
        console.log(res)
        return slowMath.multiply(res, 2)
    })
    .then(res => {
        console.log(res)
        return slowMath.divide(res, 4)
    })
    .then(res => {
        console.log(res)
        return slowMath.subtract(res, 3)
    })
    .then(res => {
        console.log(res)
        return slowMath.add(res, 98)
    })
    .then(res => {
        console.log(res)
        return slowMath.remainder(res, 2)
    })
    .then(res => {
        console.log(res)
        return slowMath.multiply(res, 50)
    })
    .then(res => {
        console.log(res)
        return slowMath.remainder(res, 40)
    })
    .then(res => {
        console.log(res)
        return slowMath.add(res, 32)
    })
    .then(res => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    }); */
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function doMath(){
    try{
        let calc = await slowMath.add(6,2);
        console.log(calc);
        calc = await slowMath.multiply(calc,2);
        console.log(calc);
        calc = await slowMath.divide(calc,4);
        console.log(calc);
        calc = await slowMath.subtract(calc,3);
        console.log(calc);
        calc = await slowMath.add(calc,98);
        console.log(calc);
        calc = await slowMath.remainder(calc,2);
        console.log(calc);
        calc = await slowMath.multiply(calc,50);
        console.log(calc);
        calc = await slowMath.remainder(calc,40);
        console.log(calc);
        calc = await slowMath.add(calc,32);
        console.log(`this is my value ${calc}`);
    } catch (err){
        console.log(`error`)
    }
}
doMath();
