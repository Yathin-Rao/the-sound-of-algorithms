var notesbs = []
var cumtime = [0];

function bubbleSort(arr){
    var len = arr.length;
    timesum = 0;
    prev = 0;
    gain = 0.2;
    sorted = true;
    for (var i = len-1; i>=0; i--){

      for(var j = 1; j<=len-1; j++){
        if(arr[j-1]>arr[j]){
            sorted = false;
            var temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;
        }
      }
    
      var gain = 1.0/(i+1);
      console.log("gain = "+gain);

      for (j = 1; j <= len-1; j++){
        timesum += arr[j]/1000;
        cumtime.push(timesum);
        notesbs.push(createOscillator1(arr[j],'triangle',arr[j],gain));
        //console.log("Freq = "+f2n[arr[j]]+", start = "+prev+", stop = "+timesum);
        //instrument.play(f2n[arr[j]],prev,timesum,{gain:gain+0.05})
        prev = timesum;
      }

      if (sorted == true){
        break;
      }
   }

   prev = 0;
   time = audio.currentTime;

   for (i = 0; i < notesbs.length; i++) {
        console.log("New iteration");
        //notesbs[i].start(cumtime[i]);
        //notesbs[i].stop(time+cumtime[i+1]);
        notesbs[i].start(i/2);
        notesbs[i].stop(time+i/2);
   }
   
}
