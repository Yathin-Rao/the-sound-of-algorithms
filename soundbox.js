<script>

var audioCtx = new AudioContext();
oscillator = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();
oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);
oscillator.type = 'sine'; // sine wave — other values are 'square', 'sawtooth', 'triangle' and 'custom'
oscillator.frequency.value = 100; // value in hertz
oscillator.start();
function stopOsc(){
    oscillator.stop();
}
</script>

<input type="button" onclick="stopOsc()" />
