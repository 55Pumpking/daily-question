function bubbleSort(arr){
    if(arr.length <= 1) return arr
    let len = arr.length
    for(let i = 0; i < len; i++){
        for(let j = 0; j< len - 1- i; j++){
            if(arr[j]> arr[j+1]){
                let temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

let arr = [5,3,2,4,1]
console.log(bubbleSort(arr))