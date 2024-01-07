const decrementBtn = document.getElementById('decrementBtn');
const incrementBtn = document.getElementById('incrementBtn');
const countElement = document.getElementById('count');

let count = 0;

decrementBtn.addEventListener('click', () => {
  if (count > 0) {
    count--;
    countElement.textContent = count;
  }
});

incrementBtn.addEventListener('click', () => {
  count++;
  countElement.textContent = count;
});