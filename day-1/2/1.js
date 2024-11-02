const checkMonotonic = function (array){
    //write code here to return either true or false 
    // to check if the array is monotonically increasing or decreasing
    let increasing = true;
    let decreasing = true;
    
    for(let i = 1; i < array.length; i++){
        if(array[i] < array[i-1]){
            increasing = false;
        }
        if(array[i] > array[i-1]){
            decreasing = false;
        }
    }
    
    return increasing || decreasing;
    
    
}

