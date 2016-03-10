function merge(left, right, arr) {
  var a = 0;
 
  while (left.length && right.length) {
    arr[a++] = (right[0] < left[0]) ? right.shift() : left.shift();
  }
  while (left.length) {
    arr[a++] = left.shift();
  }
  while (right.length) {
    arr[a++] = right.shift();
  }
}
 
function mSort(arr, tmp, len) {
  if (len === 1) { return; }
 
  var m = Math.floor(len / 2),
      tmp_l = tmp.slice(0, m),
      tmp_r = tmp.slice(m);
 
  mSort(tmp_l, arr.slice(0, m), m);
  mSort(tmp_r, arr.slice(m), len - m);
  merge(tmp_l, tmp_r, arr);
  console.log("new iteration")
  addnotes(arr, createOscillator4);
}
 
function mergeSort(arr) {
  mSort(arr, arr.slice(), arr.length);
  time = audio.currentTime;
 
   for (i = 0; i < notesbs.length; i++) {
        //console.log(notesbs[i].freq);
        //notesbs[i].start(cumtime[i]);
        //notesbs[i].stop(time+cumtime[i+1]);
        notesbs[i].start(i);
        notesbs[i].stop(time+i+1);
   }
}
 
//var arr = [1, 5, 2, 7, 3, 9, 4, 6, 8];
//merge_sort(arr); // arr will now: 1, 2, 3, 4, 5, 6, 7, 8, 9
