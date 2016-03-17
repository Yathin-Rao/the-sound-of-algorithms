function createOscillator4(freq,gainvar) {

    var wahwah = new tuna.WahWah({
        automode: true,                //true/false
        baseFrequency: 0.5,            //0 to 1
        excursionOctaves: 2,           //1 to 6
        sweep: 0.2,                    //0 to 1
        resonance: 10,                 //1 to 100
        sensitivity: 0.5,              //-1 to 1
        bypass: 0
    });

    osc = audio.createOscillator();
    gain = audio.createGain(),

    osc.frequency.value = freq;
    osc.type = 'sine';

    gain.gain.value = gainvar;

    osc.connect(gain);
    gain.connect(wahwah);

    wahwah.connect(audio.destination);

    return osc;
}
