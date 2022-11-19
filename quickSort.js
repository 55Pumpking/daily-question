function quickSort(arr){
    if(arr.length <= 1) return arr
    let mid = arr.splice(Math.floor(arr.length/2) ,1)
    let len = arr.length
    let left = [], right =[]
    for(let i = 0; i< len; i++){
        if(arr[i] > mid){
            right.push(arr[i])
        } else {
            left.push(arr[i])
        }
    }
    return quickSort(left).concat(mid, quickSort(right))
}
let arr = [3,5,4,2,1]
console.log(quickSort(arr))