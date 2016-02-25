
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
            gain2 = audio.createGain(),
            gain3 = audio.createGain(),
            osc3 = audio.createOscillator(),
            osc2 = audio.createOscillator(),
            osc = audio.createOscillator();

        osc.frequency.value = freq;
        osc.type = typ;
        osc.connect(gain);
        osc.start(0);

        gain.connect(audio.destination);
        gain.gain.setValueAtTime(0, audio.currentTime);
        gain.gain.linearRampToValueAtTime(1, audio.currentTime + attack / 1000);
        gain.gain.linearRampToValueAtTime(0, audio.currentTime + decay / 1000);

        osc2.frequency.value = freq - 4;
        osc2.type = typ;
        osc2.connect(gain2);
        osc2.start(0);

        gain2.connect(audio.destination);
        gain2.gain.setValueAtTime(0, audio.currentTime);
        gain2.gain.linearRampToValueAtTime(1, audio.currentTime + attack / 1000);
        gain2.gain.linearRampToValueAtTime(0, audio.currentTime + decay / 1000);

        osc3.frequency.value = freq + 4;
        osc3.type = typ;
        osc3.connect(gain2);
        osc3.start(0);

        gain3.connect(audio.destination);
        gain3.gain.setValueAtTime(0, audio.currentTime);
        gain3.gain.linearRampToValueAtTime(1, audio.currentTime + attack / 1000);
        gain3.gain.linearRampToValueAtTime(0, audio.currentTime + decay / 1000);

        setTimeout(function() {
            osc3.stop(0);
            osc2.stop(0);
            osc.stop(0);
            osc3.disconnect(gain2);
            osc2.disconnect(gain);
            osc.disconnect(audio.destination);
        }, decay)

        return osc;
    }
