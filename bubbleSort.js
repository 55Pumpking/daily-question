function bubbleSort(arr){
    if(arr.length <= 1) return arr
    let len = arr.length, lastindex = 0, newLen = arr.length - 1 
    for(let i = 0; i < len; i++){
        let boo = false
        for(let j = 0; j< newLen; j++){
            if(arr[j]> arr[j+1]){
                boo = true
                let temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
                lastindex = j
            }
        }
        newLen = lastindex
        if(!boo) break
    }
    return arr
}

let arr = [5,3,2,1,4]
console.log(bubbleSort(arr))