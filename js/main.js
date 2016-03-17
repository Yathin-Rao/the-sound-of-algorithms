var audio = new window.AudioContext();
var tuna = new Tuna(audio);
var soundfont = new Soundfont(audio);

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


var notesbs = []
var cumtime = [0];
var timesum = 0;

function addnotes(array,createOscillator_func,gain){
    for (var i = 0; i < array.length; i++){
        timesum += array[i]/1000;
        cumtime.push(timesum);
        //console.log(timesum);
        notesbs.push(createOscillator_func(array[i],gain));
    }
}
