const canvas = document.getElementById("etch-a-sketch");
const ctx = canvas.getContext("2d");
const shakeButton = document.querySelector(".shake");
const { width, height } = canvas;
const moveAmount = 10;
let x = Math.trunc(Math.random() * width);
let y = Math.trunc(Math.random() * height);
let hue = 0;

window.addEventListener("keydown", handleKey);
shakeButton.addEventListener("click", clearCanvas);

ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10;
ctx.strokeStyle = `hsl(100, 100%, 50%)`;

ctx.beginPath(); // Start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

function handleKey(e) {
  if (e.key.includes("Arrow")) {
    draw({ key: e.key });
  }
}

function draw({ key }) {
  switch (key) {
    case "ArrowUp":
      hue += 1;
      ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
      y -= moveAmount;
      break;
    case "ArrowRight":
      hue += 1;
      ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
      x += moveAmount;
      break;
    case "ArrowDown":
      hue += 1;
      ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
      y += moveAmount;
      break;
    case "ArrowLeft":
      hue += 1;
      ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
      x -= moveAmount;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

function clearCanvas() {
  canvas.classList.add("shake");
  canvas.addEventListener(
    "animationend",
    function () {
      canvas.classList.remove("shake");
    },
    { once: true }
  );
  ctx.clearRect(0, 0, width, height);
}
