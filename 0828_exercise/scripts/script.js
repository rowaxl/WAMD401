const circleRaduis = document.querySelector('#circle-raduis');
const btnCalcCircle = document.querySelector('#btn-calculate-circle');

const squareSide = document.querySelector('#square-side');
const btnCalcSquare = document.querySelector('#btn-calculate-square');

const rectangleLength = document.querySelector('#rectangle-length');
const rectangleWidth = document.querySelector('#rectangle-width');
const btnCalcRectangle = document.querySelector('#btn-calculate-rectangle');

const triangleBase = document.querySelector('#triangle-base');
const triangleHeight = document.querySelector('#triangle-height');
const btnCalcTriangle = document.querySelector('#btn-calculate-triangle');

const circleArea = (radius) => Math.pow(radius, 2) * Math.PI;
const rectangleArea = (width, length) => width * length;
const triangleArea = (base, height) => base * height * 0.5;

btnCalcCircle.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#circle-area').value = circleArea(circleRaduis.value);
});

btnCalcSquare.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#square-area').value = rectangleArea(squareSide.value, squareSide.value);
});

btnCalcRectangle.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#rectangle-area').value = rectangleArea(rectangleLength.value, rectangleWidth.value);
});

btnCalcTriangle.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#triangle-area').value = triangleArea(triangleBase.value, triangleHeight.value);
});