var notesbs = []
var cumtime = [0];

function bubbleSort(arr){
   var len = arr.length;
   timesum = 0;
   for (var i = len-1; i>=0; i--){
     for(var j = 1; j<=len-1; j++){
       if(arr[j-1]>arr[j]){
           var temp = arr[j-1];
           arr[j-1] = arr[j];
           arr[j] = temp;
        }
     }
    
     for (j = 1; j <= len-1; j++){
        timesum += arr[j]/1000;
        cumtime.push(timesum);
        //console.log(timesum);
        notesbs.push(createOscillator1(arr[j],'triangle',arr[j]));        
    }
   }

   prev = 0;
   time = audio.currentTime;

   //console.log(cumtime.length)
   //console.log(notesbs.length);

   for (i = 0; i < notesbs.length; i++) {
        //console.log(notesbs[i].frequency.value);
        //notesbs[i].start(cumtime[i]);
        //notesbs[i].stop(time+cumtime[i+1]);
        notesbs[i].start(i);
        notesbs[i].stop(time+i+1);
   }
}
