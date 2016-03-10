function createOscillator2(freq,type) {
    osc3 = audio.createOscillator();
    osc2 = audio.createOscillator();
    osc = audio.createOscillator();
    gain = audio.createGain(),
    gain2 = audio.createGain();

    osc.frequency.value = freq;
    osc2.frequency.value = freq - 1;
    osc3.frequency.value = freq + 2;

    osc.type = type;
    osc2.type = 'triangle';
    osc3.type = 'square';

    gain.gain.value = 1;
    gain2.gain.value = 0.1;

    osc.connect(gain);
    osc2.connect(gain2);
    osc3.connect(gain2);
    gain.connect(audio.destination);
    gain2.connect(audio.destination);

    //console.log("An oscillator was created");

    var osces = new function(){
        this.osc = osc;
        this.osc3 = osc3;
        this.osc2 = osc2;

        this.freq = freq;

        this.stop = function(durn){
            this.osc.stop(durn);
            this.osc2.stop(durn);
            this.osc3.stop(durn);
        };

        this.start = function(time){
            //console.log("start was called with freq "+this.freq+" and time "+time);
            this.osc.start(time);
            //console.log("here");
            this.osc2.start(time);
            //console.log("here");
            this.osc3.start(time);
        };
    }

    return osces;

}
