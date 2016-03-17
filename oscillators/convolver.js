
    var convolver = new tuna.Convolver({
        highCut: 22050,                         //20 to 22050
        lowCut: 20,                             //20 to 22050
        dryLevel: 1,                            //0 to 1+
        wetLevel: 1,                            //0 to 1+
        level: 1,                               //0 to 1+, adjusts total output of both wet and dry
        impulse: "impulse-responses/bright-hall.wav",    //the path to your impulse response
        bypass: 0
    });

function createOscillator4(freq,gainvar) {

    osc = audio.createOscillator();
    gain = audio.createGain(),

    osc.frequency.value = freq;
    osc.type = 'sine';

    gain.gain.value = gainvar;

    osc.connect(gain);
    gain.connect(convolver);

    convolver.connect(audio.destination);

    return osc;
}
