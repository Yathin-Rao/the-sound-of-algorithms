function playOsc3(){
    window.oscillator = audio.createOscillator();
    irHall = new reverbObject('irHall.ogg')
    freq = getFrequency();
    attack = 50;
    decay = 50;  
    type = 'sine';
    return createOscillator1(freq,attack,decay,type);
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
        context.decodeAudioData(request.response, function(buffer) {
            object.buffer = buffer;
        });
    }
    request.send();
}

function stopOsc1(){
    oscillator.stop();
}

function createOscillator3(freq,attk,dk,typ) {
    var s = context.createBufferSource();
    s.buffer = object.buffer;
    var gainNode = audio.createGain();
    var distortion = audio.createWaveShaper();

    distortion.curve = makeDistortionCurve(7);
    gainNode.gain.value = 1.0
    oscillator.connect(distortion);
    distortion.connect(gainNode);
    gainNode.connect(audio.destination);
    oscillator.type = 'sine'; // sine wave — other values are 'square', 'sawtooth', 'triangle' and 'custom'
    oscillator.frequency.value = freq; // value in hertz
    oscillator.start();
}
