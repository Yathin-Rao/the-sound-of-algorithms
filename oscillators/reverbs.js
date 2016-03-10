//var context = new (window.AudioContext || window.webkitAudioContext)();

var context = audio;

var source;
var convolverGain = context.createGain();
var convolver = context.createConvolver();
var masterGain = context.createGain();
var masterCompression = context.createDynamicsCompressor();
    
//var impulseUrl = 'sounds/tenniscourt.wav';
var impulseUrl = 'oscillators/irHall.ogg';
//var sourceUrl = 'sounds/tuffbreak.wav';
    
//var play = document.querySelector('.play');
//var stop = document.querySelector('.stop');
//stop.setAttribute('disabled', 'disabled');
  
//var convolverGainControl = document.querySelector('.convolver-gain-control');
//var convolverGainValue = document.querySelector('.convolver-gain-value');
//convolverGainControl.setAttribute('disabled', 'disabled');

function getSource() {
  //window.osc = audio.createOscillator();
  freq = getFrequency();
  type = 'sine';
  createOscillator3(freq,type);
  /*
  request = new XMLHttpRequest();
  request.open('GET', sourceUrl, true);
  request.responseType = 'arraybuffer';

  request.onload = function() {
    var audioData = request.response;

    context.decodeAudioData(audioData, function(buffer) {
        myBuffer = buffer;
        source.buffer = myBuffer;
        source.loop = true;
        source.connect(convolverGain);
        source.connect(masterGain);
        masterGain.connect(masterCompression);
        masterCompression.connect(context.destination);

      },

      function(e){"Error with decoding audio data" + e.err});

  }

  request.send();
  */
  getImpulse();
  /*
  document.querySelector('.convolver-gain-control').value = '0';
  document.querySelector('.convolver-gain-control').addEventListener('change', function() {
    convolverGainControl.value = this.value;
  });
  */
  //convolverGainControl.value = 50;
}

function getImpulse() {
  convolver = context.createConvolver(); 
  ajaxRequest = new XMLHttpRequest();
  ajaxRequest.open('GET', impulseUrl, true);
  ajaxRequest.responseType = 'arraybuffer';

  ajaxRequest.onload = function() {
    var impulseData = ajaxRequest.response;

    context.decodeAudioData(impulseData, function(buffer) {
        myImpulseBuffer = buffer;
        convolver.buffer = myImpulseBuffer;
        convolver.loop = false;
        convolver.normalize = true;
        convolverGain.gain.value = 50;
        convolverGain.connect(convolver);
        convolver.connect(masterGain);
      },

      function(e){"Error with decoding audio data" + e.err});

  }

  ajaxRequest.send();
}

playOsc3 = function() {
  convolver.disconnect();
  getSource();
  source.start(0);
  //play.setAttribute('disabled', 'disabled');
  //convolverGainControl.removeAttribute('disabled');
  //stop.removeAttribute('disabled');
  //convolverGainValue.innerHTML = 0;
}

stopOsc3 = function() {
  source.stop(0);
  //play.removeAttribute('disabled');
  //convolverGainControl.setAttribute('disabled', 'disabled');
  //stop.setAttribute('disabled', 'disabled');
}

/*
convolverGainControl.oninput = function() {
  convolverGain.gain.value = convolverGainControl.value;
  convolverGainValue.innerHTML = convolverGainControl.value;
}
*/

function createOscillator3(freq,typ) {

    source = context.createOscillator();
    source.frequency.value = freq;

    source.type = typ;

    //gain.gain.value = 1.0
    source.connect(convolverGain);
    source.connect(masterGain);
    masterGain.connect(masterCompression);
    masterCompression.connect(context.destination);
}
