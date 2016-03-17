function createOscillator4(freq,gainvar) {

    var tremolo = new tuna.Tremolo({
        intensity: 0.3,    //0 to 1
        rate: 4,         //0.001 to 8
        stereoPhase: 0,    //0 to 180
        bypass: 0
    });

    osc = audio.createOscillator();
    gain = audio.createGain(),

    osc.frequency.value = freq;
    osc.type = 'sine';

    gain.gain.value = gainvar;

    osc.connect(gain);
    gain.connect(tremolo);

    tremolo.connect(audio.destination);

    return osc;
}
