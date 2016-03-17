var VCO = (function(audio) {
  function VCO(){
    this.oscillator = audio.createOscillator();
    this.oscillator.type = 'sine';

    this.input = this.oscillator;
    this.output = this.oscillator;

    var that = this;
    $(document).bind('frequency', function (_, frequency) {
      that.setFrequency(frequency);
    });
  };

  VCO.prototype.setFrequency = function(frequency) {
    this.oscillator.frequency.setValueAtTime(frequency, audio.currentTime);
  };

  VCO.prototype.start = function(time) {
        console.log("start was called with time "+time);
        jQuery.event.trigger('gateOn');
        this.oscillator.start(time);
  }
  VCO.prototype.stop = function(time) {
        console.log("stop was called with time "+time);
        this.oscillator.stop(time);
  }

  VCO.prototype.connect = function(node) {
    if (node.hasOwnProperty('input')) {
      this.output.connect(node.input);
    } else {
      this.output.connect(node);
    };
  }

  return VCO;
})(audio);

var EnvelopeGenerator = (function(audio) {
  function EnvelopeGenerator() {
    this.attackTime = 0.1;
    this.releaseTime = 0.1;

    var that = this;
    $(document).bind('gateOn', function (_) {
      that.trigger();
    });
    $(document).bind('setAttack', function (_, value) {
      that.attackTime = value;
    });
    $(document).bind('setRelease', function (_, value) {
      that.releaseTime = value;
    });
  };

  EnvelopeGenerator.prototype.trigger = function() {
    now = audio.currentTime;
    console.log("EG triggered");
    this.param.cancelScheduledValues(now);
    this.param.setValueAtTime(0, now);
    this.param.linearRampToValueAtTime(1, now + this.attackTime);
    this.param.linearRampToValueAtTime(0, now + this.attackTime + this.releaseTime);
  };

  EnvelopeGenerator.prototype.connect = function(param) {
    this.param = param;
  };

  return EnvelopeGenerator;
})(audio);

var VCA = (function(audio) {
  function VCA() {
    this.gain = audio.createGain();
    this.gain.gain.value = 0;
    this.input = this.gain;
    this.output = this.gain;
    this.amplitude = this.gain.gain;
  };

  VCA.prototype.connect = function(node) {
    if (node.hasOwnProperty('input')) {
      this.output.connect(node.input);
    } else {
      this.output.connect(node);
    };
  }

  return VCA;
})(audio);

function createOscillator4(freq,gainvar){
    var vco = new VCO;
    var vca = new VCA;
    var envelope = new EnvelopeGenerator;
    
    vco.setFrequency(freq);

    vco.connect(vca);
    envelope.connect(vca.amplitude);
    vca.connect(audio.destination);

    return vco;
}


function createOscillator42(freq,gainvar) {
    var envelope = new EnvelopeGenerator;
    osc = audio.createOscillator();
    gain = audio.createGain(),

    console.log("asfkhsaf");
    osc.frequency.value = freq;
    osc.type = 'sine';

    gain.gain.value = gainvar;

    osc.connect(gain);
    envelope.connect(gain.gain);
    gain.connect(audio.destination);

    return osc;
}
