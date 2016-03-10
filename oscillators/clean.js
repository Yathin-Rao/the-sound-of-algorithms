function createOscillator4(freq) {
    osc = audio.createOscillator();
    gain = audio.createGain(),

    console.log(freq);
    osc.frequency.value = freq;
    osc.type = 'sine';

    gain.gain.value = 1;

    osc.connect(gain);
    gain.connect(audio.destination);

    return osc;
}
