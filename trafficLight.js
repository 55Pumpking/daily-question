function light(color,delay) {
    return new Promise((resolve)=>{
        console.log(`${color} is light`)
        setTimeout(() => {
            resolve()
        }, delay);
    })
}

async function fn(){
    await light('red',3000)
    await light('yellow',2000)
    await light('red',3000)
    fn()
}
fn()