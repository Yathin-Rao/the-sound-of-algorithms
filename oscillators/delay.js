function createOscillator4(freq,gainvar) {
    //osc = audio.createOscillator();
    var delay = new tuna.Delay({
        feedback: 0.45,    //0 to 1+
        delayTime: 150,    //how many milliseconds should the wet signal be delayed?
        wetLevel: 0.9,    //0 to 1+
        dryLevel: 1,       //0 to 1+
        cutoff: 2000,      //cutoff frequency of the built in lowpass-filter. 20 to 22050
        bypass: 0
    });

    console.log("I'm here");

    osc = audio.createOscillator();
    gain = audio.createGain(),

    osc.frequency.value = freq;
    osc.type = 'sine';

    gain.gain.value = gainvar;

    osc.connect(gain);
    gain.connect(delay);

    delay.connect(audio.destination);

    return osc;
}
