/* const down = document.querySelectorAll('.fa-chevron-down');
const up = document.querySelectorAll('.fa-times');
const container = document.querySelectorAll('.faq');

console.log(down);

down.forEach((element, index) => {
  addEventListener('click', () => {
    container[index].classList.add('active');
  });
}); */

const buttons = document.querySelectorAll('.faq-toggle');

buttons.forEach((element, index) => {
  element.addEventListener('click', () => {
    element.parentNode.classList.toggle('active');
  });
});
