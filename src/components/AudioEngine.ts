/**
 * Web Audio API Synth Engine for Nixie Tube Atmosphere.
 * Dynamically synthesizes and schedules vintage electrical hums, relays, and toggle clicks.
 */

class AudioEngine {
  private ctx: AudioContext | null = null;
  private humNode: OscillatorNode | null = null;
  private humGain: GainNode | null = null;
  private backgroundNoiseGain: GainNode | null = null;
  private mercurySpikeNode: OscillatorNode | null = null;
  private isHumming: boolean = false;
  private masterGain: GainNode | null = null;
  private clickVolume: number = 0.5;
  private humVolume: number = 0.15;

  init() {
    if (this.ctx) return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      this.ctx = new AudioCtx();
      
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.8, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    } catch (e) {
      console.warn("Web Audio API is not supported in this browser", e);
    }
  }

  setMasterVolume(val: number) {
    this.init();
    if (!this.masterGain || !this.ctx) return;
    this.masterGain.gain.setValueAtTime(val, this.ctx.currentTime);
  }

  setHumVolume(val: number) {
    this.humVolume = val;
    if (this.humGain && this.ctx) {
      this.humGain.gain.setValueAtTime(val * 0.1, this.ctx.currentTime); // keep hum safe
    }
  }

  setClickVolume(val: number) {
    this.clickVolume = val;
  }

  /**
   * Play heavy mechanical Toggle Switch Click
   */
  playSwitchClick() {
    this.init();
    if (!this.ctx || !this.masterGain) return;
    if (this.ctx.state === "suspended") this.ctx.resume();

    const t = this.ctx.currentTime;
    
    // Create dual transient for the switch toggling action (metal + wood body clack)
    // 1st transient: high frequency snap
    const osc1 = this.ctx.createOscillator();
    const gain1 = this.ctx.createGain();
    
    osc1.type = "sine";
    osc1.frequency.setValueAtTime(1400, t);
    osc1.frequency.exponentialRampToValueAtTime(120, t + 0.08);
    
    gain1.gain.setValueAtTime(this.clickVolume * 0.8, t);
    gain1.gain.linearRampToValueAtTime(0.001, t + 0.08);
    
    osc1.connect(gain1);
    gain1.connect(this.masterGain);
    osc1.start(t);
    osc1.stop(t + 0.09);

    // 2nd transient: wooden/metallic hollow thump
    const osc2 = this.ctx.createOscillator();
    const gain2 = this.ctx.createGain();
    osc2.type = "triangle";
    osc2.frequency.setValueAtTime(150, t);
    osc2.frequency.setValueAtTime(60, t + 0.02);
    
    gain2.gain.setValueAtTime(this.clickVolume * 1.0, t);
    gain2.gain.linearRampToValueAtTime(0.001, t + 0.15);
    
    osc2.connect(gain2);
    gain2.connect(this.masterGain);
    osc2.start(t);
    osc2.stop(t + 0.16);

    // White noise click burst representing mechanical scraping
    const bufferSize = this.ctx.sampleRate * 0.02; // 20ms
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    
    const noiseFilter = this.ctx.createBiquadFilter();
    noiseFilter.type = "bandpass";
    noiseFilter.frequency.setValueAtTime(2500, t);
    noiseFilter.Q.setValueAtTime(4.0, t);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(this.clickVolume * 0.4, t);
    noiseGain.gain.linearRampToValueAtTime(0.001, t + 0.02);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.masterGain);
    noise.start(t);
  }

  /**
   * Play metallic relay ticking sound (when seconds flip)
   */
  playRelayTick() {
    this.init();
    if (!this.ctx || !this.masterGain || this.clickVolume < 0.01) return;
    if (this.ctx.state === "suspended") this.ctx.resume();

    const t = this.ctx.currentTime;

    // A fast metal reed click
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = "triangle";
    osc.frequency.setValueAtTime(3200, t);
    osc.frequency.exponentialRampToValueAtTime(600, t + 0.015);
    
    gain.gain.setValueAtTime(this.clickVolume * 0.22, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.015);
    
    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(t);
    osc.stop(t + 0.016);

    // High frequency metal ring transient
    const ring = this.ctx.createOscillator();
    const ringGain = this.ctx.createGain();
    ring.type = "sine";
    ring.frequency.setValueAtTime(6500, t);
    ringGain.gain.setValueAtTime(this.clickVolume * 0.12, t);
    ringGain.gain.exponentialRampToValueAtTime(0.001, t + 0.008);
    
    ring.connect(ringGain);
    ringGain.connect(this.masterGain);
    ring.start(t);
    ring.stop(t + 0.01);
  }

  /**
   * Start persistent low frequency vintage AC transformer hum (50Hz / 60Hz + harmonics)
   */
  startTransformerHum() {
    this.init();
    if (!this.ctx || !this.masterGain || this.isHumming) return;
    if (this.ctx.state === "suspended") this.ctx.resume();

    const t = this.ctx.currentTime;
    this.isHumming = true;

    // Multi-oscillator hum representing induction coils with sub harmonics
    this.humGain = this.ctx.createGain();
    this.humGain.gain.setValueAtTime(0, t);
    this.humGain.gain.linearRampToValueAtTime(this.humVolume * 0.12, t + 1.2); // fade in hum safely

    // 1st Oscillator: 60Hz pure transformer fundamental sine wave
    const osc60 = this.ctx.createOscillator();
    osc60.type = "sine";
    osc60.frequency.setValueAtTime(60, t);

    // 2nd Oscillator: 120Hz rectifier buzz triangle wave
    const osc120 = this.ctx.createOscillator();
    osc120.type = "triangle";
    osc120.frequency.setValueAtTime(120, t);
    const gain120 = this.ctx.createGain();
    gain120.gain.setValueAtTime(0.35, t);

    // 3rd Oscillator: 180Hz harmonic rattle
    const osc180 = this.ctx.createOscillator();
    osc180.type = "sawtooth";
    osc180.frequency.setValueAtTime(180, t);
    const gain180 = this.ctx.createGain();
    gain180.gain.setValueAtTime(0.08, t);

    // 4th Oscillator: Subtle LFO volume drift to simulate unstable mains voltage
    const lfo = this.ctx.createOscillator();
    lfo.type = "sine";
    lfo.frequency.setValueAtTime(0.7, t); // 0.7Hz drift
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.setValueAtTime(0.08, t);

    // Low pass filter to make the hum warm and deep, blocking sharp digital saw alias
    const humFilter = this.ctx.createBiquadFilter();
    humFilter.type = "lowpass";
    humFilter.frequency.setValueAtTime(280, t);

    // Connections
    lfo.connect(lfoGain);
    lfoGain.connect(gain120.gain); // Modulate harmonic ratio over time

    osc60.connect(humFilter);
    
    osc120.connect(gain120);
    gain120.connect(humFilter);
    
    osc180.connect(gain180);
    gain180.connect(humFilter);

    humFilter.connect(this.humGain);
    this.humGain.connect(this.masterGain);

    // Start oscillations
    lfo.start(t);
    osc60.start(t);
    osc120.start(t);
    osc180.start(t);

    this.humNode = osc60; // Keep track of main to stop
  }

  /**
   * Stop high-voltage transformer hum with high decay
   */
  stopTransformerHum() {
    if (!this.ctx || !this.isHumming) return;
    const t = this.ctx.currentTime;
    
    if (this.humGain) {
      this.humGain.gain.cancelScheduledValues(t);
      this.humGain.gain.setValueAtTime(this.humGain.gain.value, t);
      this.humGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.4); // Quick fade out
    }
    
    setTimeout(() => {
      try {
        if (this.humNode) {
          this.humNode.disconnect();
          this.humNode = null;
        }
        if (this.humGain) {
          this.humGain.disconnect();
          this.humGain = null;
        }
      } catch (e) {
        // Safe check
      }
      this.isHumming = false;
    }, 500);
  }

  /**
   * Plays a sputter electrical sound when Nixie clock fires up or when doing CPP
   */
  playPowerSputter() {
    this.init();
    if (!this.ctx || !this.masterGain || this.clickVolume < 0.01) return;
    if (this.ctx.state === "suspended") this.ctx.resume();

    const t = this.ctx.currentTime;
    const dur = 0.6; // crackle duration

    for (let i = 0; i < 8; i++) {
      const delay = Math.random() * dur;
      const crackleTime = t + delay;
      
      const filter = this.ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(800 + Math.random() * 2000, crackleTime);
      filter.Q.setValueAtTime(3 + Math.random() * 5, crackleTime);

      const osc = this.ctx.createOscillator();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(150 + Math.random() * 300, crackleTime);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(this.clickVolume * 0.15, crackleTime);
      gain.gain.linearRampToValueAtTime(0.001, crackleTime + 0.01 + Math.random() * 0.03);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start(crackleTime);
      osc.stop(crackleTime + 0.05);
    }
  }
}

export const audio = new AudioEngine();
