function playOsc2(){
    window.osc3 = audio.createOscillator();
    window.osc2 = audio.createOscillator();
    window.osc = audio.createOscillator();
    freq = getFrequency();
    attack = 50;
    decay = 50;  
    type = 'sine';
    return createOscillator2(freq,attack,decay,type);
}

function stopOsc2(){
   osc.stop();
   osc2.stop();
   osc3.stop();
}

function createOscillator2(freq,attk,dk,typ) {
    var attack = attk,//10
        decay = freq//dk,//250
        gain = audio.createGain(),
        gain2 = audio.createGain();

    osc.frequency.value = freq;
    osc2.frequency.value = freq - 1;
    osc3.frequency.value = freq + 2;

    osc.type = typ;
    osc2.type = 'triangle';
    osc3.type = 'triangle';

    gain.gain.value = 1;
    gain2.gain.value = 0.1;

    osc.connect(gain);
    osc2.connect(gain2);
    osc3.connect(gain2);
    gain.connect(audio.destination);
    gain2.connect(audio.destination);

    osc.start(0);
    osc2.start(0);
    osc3.start(0);
}
