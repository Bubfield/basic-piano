const whiteKeys_Arr = ["z", "x", "c", "v", "b", "n", "m"];
const blackKeys_Arr = ["s", "d", "g", "h", "j"];

const keys = document.querySelectorAll(".key");
const whiteKeys_DOM = document.querySelectorAll(".key.white");
const blackKeys_DOM = document.querySelectorAll(".key.black");

keys.forEach((key) => key.addEventListener("click", () => playNote(key)));

document.addEventListener("keydown", (e) => {
  if (e.repeat) return;

  const key = e.key;
  const whiteKeysIndex = whiteKeys_Arr.indexOf(key);
  const blackKeysIndex = blackKeys_Arr.indexOf(key);

  if (whiteKeysIndex > -1) playNote(whiteKeys_DOM[whiteKeysIndex]);
  if (blackKeysIndex > -1) playNote(blackKeys_DOM[blackKeysIndex]);
});

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
  key.classList.add("active");
  setTimeout(() => {
    key.classList.remove("active");
  }, 100);
}
