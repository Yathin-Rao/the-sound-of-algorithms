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

function createOscillator1(freq,type,durn) {
    oscillator = audio.createOscillator();
    gainNode = audio.createGain();
    distortion = audio.createWaveShaper();

    distortion.curve = makeDistortionCurve(7);
    gainNode.gain.value = 1.0
    oscillator.connect(distortion);
    distortion.connect(gainNode);
    gainNode.connect(audio.destination);
    oscillator.type = type; 
    oscillator.frequency.value = freq; // value in hertz
    return oscillator;
}
