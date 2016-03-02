
    function pause(milliseconds) {
        var dt = new Date();
        while ((new Date()) - dt <= milliseconds) { /* Do nothing */ }
    }

    var audio = new window.AudioContext(),
        position = 0;

    function createOscillator(freq,attk,dk,typ) {
        var attack = attk,//10
            decay = freq//dk,//250
            gain = audio.createGain(),
            osc = audio.createOscillator();


        filter = audio.createBiquadFilter()
        filter.type = "highpass"
        filter.frequency = 350;
        //filter.Q = 
        filter.gain.value = 25;
        filter.connect(audio.destination);

        gain.connect(filter);
        gain.gain.setValueAtTime(0, audio.currentTime);
        gain.gain.linearRampToValueAtTime(1, audio.currentTime + attack / 1000);
        gain.gain.linearRampToValueAtTime(0, audio.currentTime + decay / 1000);

        osc.frequency.value = freq;
        osc.type = typ;
        osc.connect(gain);
        osc.start(0);

        setTimeout(function() {
            osc.stop(0);
            osc.disconnect(gain);
            gain.disconnect(audio.destination);
        }, decay)

        return osc;
    }
