    function bubbleSort(arr){
       var len = arr.length;
       for (var i = len-1; i>=0; i--){
         console.log("Next iteration");
         for(var j = 1; j<=len-1; j++){
           createOscillator(arr[j].freq,arr[j].attack,arr[j].decay,arr[j].type);
           console.log(arr[j].num)
           pause(arr[j].decay);
           if(arr[j-1].num>arr[j].num){
               var temp = arr[j-1];
               arr[j-1] = arr[j];
               arr[j] = temp;
            }
         }
       }
       return arr;
    }
