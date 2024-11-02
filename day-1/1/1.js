        function sortedSquarredArray(array){
            let newArray = new Array(array.length).fill(0)

            for(let i = 0; i < array.length; i++){
                newArray[i] = array[i] * array[i];
                
            }
            return newArray.sort((a, b) => b - a);
            
        }
        