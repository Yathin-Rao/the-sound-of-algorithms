function playOsc3(){
    window.oscillator = audio.createOscillator();
    irHall = new reverbObject('oscillators/irHall.ogg')
    freq = getFrequency();
    attack = 50;
    decay = 50;  
    type = 'sine';
    return createOscillator3(freq,attack,decay,type,irHall);
}

function reverbObject (url) {
    this.source = url;
    loadAudio(this, url);
}

function loadAudio(object, url) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';

    request.onload = function() {
        audio.decodeAudioData(request.response, function(buffer) {
            object.buffer = buffer;
        });
    }
    request.send();
}

function stopOsc3(){
    oscillator.stop();
}

function createOscillator3(freq,attk,dk,typ,irHall) {
    object = window.oscillator
    //s.buffer = object.buffer;
    object.convolver = audio.createConvolver();
    object.convolver.buffer = irHall.buffer;
    object.volume = audio.createGain();
    object.connect(object.volume);
    object.volume.connect(audio.destination);
    object.start(0);
}
