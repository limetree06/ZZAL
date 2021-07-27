let textarea = document.getElementById('test-target'),
consoleLog = document.getElementById('console-log'),
btnReset = document.getElementById('btn-reset');

function logMessage(message) {
  consoleLog.innerHTML += message + "<br>";
}
window.onkeydown = (e) => console.log(e);

window.addEventListener("keydown", (e) => {
    const key = document.getElementById(e.key);
    if (key) key.classList.add("pressed");
  });

btnReset.addEventListener('click', (e) => {
  let child = consoleLog.firstChild;
  while (child) {
   consoleLog.removeChild(child);
   child = consoleLog.firstChild;
  }
  textarea.value = ''
});