const inputDuration = document.querySelector("input");
const startBtn = document.querySelector(".play");
const pauseBtn = document.querySelector(".pause");
const circle = document.querySelector("circle");

const perimeter = 2 * Math.PI * circle.getAttribute("r");
circle.setAttribute("stroke-dasharray", perimeter);

let duration;
const timerObj = new Timer(inputDuration, startBtn, pauseBtn, {
  onStart(timeDuration) {
    duration = timeDuration;
  },
  onComplete() {
    console.log("onComplete");
  },
  onTimeChange(timeRemaining) {
    circle.setAttribute(
      "stroke-dashoffset",
      (perimeter * timeRemaining) / duration - perimeter
    );
  },
});
