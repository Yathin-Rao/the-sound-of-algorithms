function createOscillator4(freq,gainvar) {

    var overdrive = new tuna.Overdrive({
        outputGain: 0.5,         //0 to 1+
        drive: 0.7,              //0 to 1
        curveAmount: 1,          //0 to 1
        algorithmIndex: 0,       //0 to 5, selects one of our drive algorithms
        bypass: 0
    });

    osc = audio.createOscillator();
    gain = audio.createGain(),

    osc.frequency.value = freq;
    osc.type = 'sine';

    gain.gain.value = gainvar;

    osc.connect(gain);
    gain.connect(overdrive);

    overdrive.connect(audio.destination);

    return osc;
}
