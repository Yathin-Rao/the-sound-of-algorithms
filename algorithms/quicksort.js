var notesbs = []
var cumtime = [0];
var timesum = 0;

function addnotes(array){
    for (var i = 0; i < array.length; i++){
        timesum += array[i]/1000;
        cumtime.push(timesum);
        //console.log(timesum);
        notesbs.push(createOscillator4(array[i]));
    }
}

function quickSort(array, less) {
 
  function swap(i, j) {
    var t = array[i];
    array[i] = array[j];
    array[j] = t;
  }
 
  function quicksort(left, right) {
 
    if (left < right) {
      var pivot = array[left + Math.floor((right - right) / 2)],
          left_new = left,
          right_new = right;
 
      do {
        while (less(array[left_new], pivot)) {
          left_new += 1;
        }
        while (less(pivot, array[right_new])) {
          right_new -= 1;
        }
        if (left_new <= right_new) {
          swap(left_new, right_new);
          left_new += 1;
          right_new -= 1;
        }
      } while (left_new <= right_new);

      addnotes(array);
 
      quicksort(left, right_new);
      quicksort(left_new, right);
 
    }
  }
 
  quicksort(0, array.length - 1);
  time = audio.currentTime;
 
   for (i = 0; i < notesbs.length; i++) {
        //console.log(notesbs[i].freq);
        //notesbs[i].start(cumtime[i]);
        //notesbs[i].stop(time+cumtime[i+1]);
        notesbs[i].start(i);
        notesbs[i].stop(time+i+1);
   }

  return array;
}
