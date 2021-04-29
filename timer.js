class Timer {
  constructor(inputDuration, startBtn, pauseBtn, callbacks) {
    (this.inputDuration = inputDuration),
      (this.startBtn = startBtn),
      (this.pauseBtn = pauseBtn);
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onComplete = callbacks.onComplete;
      this.onTimeChange = callbacks.onTimeChange;
    }

    // event Listener
    this.startBtn.addEventListener("click", this.start);
    this.pauseBtn.addEventListener("click", this.pause);
  }
  start = () => {
    this.timeChange();
    this.interval = setInterval(this.timeChange, 20);
    if (this.onStart) {
      this.onStart(this.RemainingTime);
    }
  };
  pause = () => {
    clearInterval(this.interval);
  };
  timeChange = () => {
    if (this.RemainingTime <= 0) {
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      const timeRemaining = this.RemainingTime - 0.02;
      this.updateRemainingTime = timeRemaining;
      if (this.onTimeChange) {
        this.onTimeChange(this.RemainingTime);
      }
    }
  };
  get RemainingTime() {
    return this.inputDuration.value;
  }
  set updateRemainingTime(time) {
    this.inputDuration.value = time.toFixed(2);
  }
}
