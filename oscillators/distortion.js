function playOsc1(){
    window.oscillator = audio.createOscillator();
    freq = getFrequency();
    attack = 50;
    decay = 50;  
    type = 'sine';
    return createOscillator1(freq,attack,decay,type);
}

function stopOsc1(){
    oscillator.stop();
}

function makeDistortionCurve(amount) {
  var k = typeof amount === 'number' ? amount : 50,
    n_samples = 44100,
    curve = new Float32Array(n_samples),
    deg = Math.PI / 180,
    i = 0,
    x;
  for ( ; i < n_samples; ++i ) {
    x = i * 2 / n_samples - 1;
    curve[i] = ( 3 + k ) * x * 20 * deg / ( Math.PI + k * Math.abs(x) );
  }
  return curve;
};

function createOscillator1(freq,attk,dk,typ) {
    var gainNode = audio.createGain();
    var distortion = audio.createWaveShaper();

    distortion.curve = makeDistortionCurve(7);
    gainNode.gain.value = 1.0
    oscillator.connect(distortion);
    distortion.connect(gainNode);
    gainNode.connect(audio.destination);
    oscillator.type = 'triangle'; // sine wave — other values are 'square', 'sawtooth', 'triangle' and 'custom'
    oscillator.frequency.value = freq; // value in hertz
    oscillator.start();
}
