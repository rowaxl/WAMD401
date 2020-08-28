const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p");
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

let timer = null;
let count = 0;

const texts = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mattis lorem est, vitae fermentum urna tristique ut. Integer fringilla neque dui, at pretium sapien euismod nec. Morbi bibendum ex urna, sed hendrerit metus malesuada vitae. Ut iaculis fermentum leo. Nunc facilisis, nisi ac tincidunt laoreet, tortor dolor auctor odio, nec ornare augue diam eu nisi. Vestibulum non nunc sit amet tellus porttitor ultrices blandit in orci. Sed laoreet suscipit nisi non molestie. Suspendisse vestibulum turpis eget ex luctus, nec elementum est dictum. Aliquam nulla metus, pharetra nec ultricies sit amet, pretium quis enim. In ultrices lacinia enim, ut vehicula magna imperdiet non. In ut mauris convallis, vehicula neque eu, eleifend leo.".split(".").map(e => e += ".");
let selected;

const updateTestText = () => {
  selected = texts[Math.floor(Math.random() * (texts.length - 1))].trim();
  originText.textContent = selected;
}

// Add leading zero to numbers 9 or below (purely for aesthetics):
const paddingZero = num => `${num}`.padStart(2, 0)

// Run a standard minute/second/hundredths timer:
const updateTimer = count => {
  const min = Math.floor(count / (60 * 1000));
  const sec = Math.floor((count - (min * 60 * 1000)) / 1000);
  const mil = Math.floor((count - (min * 60 * 1000) - (sec * 1000)) / 10);

  theTimer.textContent = `${paddingZero(min)}:${paddingZero(sec)}:${paddingZero(mil)}`;
}

// Match the text entered with the provided text on the page:
const validateInput = input => input.split("").every((c, i) => c === selected[i]);

const renderWrapper = valid => {
  if (!testWrapper.classList.contains('valid') && !testWrapper.classList.contains('error')) {
    testWrapper.classList.add(valid ? 'valid' : 'error')
  } else {
    if (valid) {
      testWrapper.classList.replace('error', 'valid');
    } else {
      testWrapper.classList.replace('valid', 'error');
    }
  }
}

// Start the timer:
const startTimer = () => {
  timer = setInterval(() => {
    count += 10;
    updateTimer(count);
  }, 10);
}

// Reset everything:
const reset = () => {
  clearInterval(timer);
  timer = null;
  count = 0;
  updateTimer(count);
  testArea.value = '';
  testWrapper.classList.remove('valid', 'error');

  updateTestText();
}

// Event listeners for keyboard input and the reset button:
testArea.addEventListener('input', ({ target: { value } }) => {
  if (!timer && count === 0) {
    startTimer();
  }

  const valid = validateInput(value);
  renderWrapper(valid);

  if (value[value.length - 1] === '.' && valid) {
    clearInterval(timer);
  }
});

resetButton.addEventListener('click', (e) => {
  e.preventDefault();
  reset();
});

// initialize
reset();