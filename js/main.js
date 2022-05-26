const elModal =document.querySelector('.modal');
const elModalClose = elModal.querySelector('.js-modal-close');

if (elModalClose) {
  elModalClose.addEventListener('click',function () {
    elModal.classList.remove('modal__open');
  });
}

setTimeout (function () {
  elModal.classList.add('modal__open');
}, 30000);

let elQuizesTop = document.querySelectorAll('.preferential-quizes__top');
let elQuizesList = document.querySelectorAll('.preferential-quizes__list');


elQuizesTop.forEach(function(item , index) {
    item.addEventListener('click', function() {
      elQuizesList[index].classList.toggle('preferential-quizes-js')
    })
})