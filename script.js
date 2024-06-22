function(arr, target){
    let left = 0;
    let right = arr.length - 1;
    while(left <= right){
        if(left + right === target){
            return left, right;
        } else {
            left++;
            right--

        }
        return -1;
    }
}