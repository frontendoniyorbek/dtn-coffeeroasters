// MODAL
const elModal = document.querySelector('.modal');
const elModalClose = elModal.querySelector('.js-modal-close');
const modaClose = document.querySelector('.modal__close-icon')
let elQuizesTop = document.querySelectorAll('.preferential-quizes__top');
let elQuizesList = document.querySelectorAll('.preferential-quizes__list');
const elCloseBtn = document.querySelector('.close-btn')

elCloseBtn.addEventListener('click', () => {
  elModal.classList.add('hidden')
})

elModal.addEventListener('click', () => {
  elModal.classList.add('hidden')
})

document.addEventListener('keydown', (e) => {
  if (e.key == 'Escape') {
    elModal.classList.add('hidden')
  }
})

if (elModalClose) {
  elModalClose.addEventListener('click', function () {
    elModal.classList.remove('modal__open');
  });
}

setTimeout(function () {
  elModal.classList.add('modal__open');
}, 300);
// /Modal


elQuizesTop.forEach(function (item, index) {
  item.addEventListener('click', function () {
    elQuizesList[index].classList.toggle('preferential-quizes-js')
  })
})

document.addEventListener('keydown', (e) => {
  if (e, key == 'Escape') { }
})