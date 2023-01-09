const main = document.querySelector('main');
const ratingState = document.querySelector('.rating-state');
const btnSubmit = document.querySelector('.btn-submit');
const rates = document.querySelectorAll('.btn-item');
const rating = document.querySelector('.rating');

btnSubmit.addEventListener('click', () => {
  main.style.display = 'none';
  ratingState.style.display = 'block';
});

rates.forEach((rate) => {
  rate.addEventListener('click', () => {
    rating.innerHTML = rate.innerHTML;
  });
});
