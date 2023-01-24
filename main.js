const ratingContainer = document.querySelector('.rating__container');
const thankYouContainer = document.querySelector('.thank-you__container');

const rating = document.getElementById('rate');
const rates = document.querySelectorAll('.btn');

const submitBtn = document.getElementById('ratingBtn');

// Saves the rating and displays it on the 'Thank you' card
rates.forEach((rate) => {
    rate.addEventListener('click', () => {
        rating.textContent = rate.textContent;
    })
});

// Displays the 'Thank you' card and hides the 'Rating' card, if the submit button has been clicked
submitBtn.addEventListener('click', () => {
    if(rate.textContent === ""){
        alert("Please give your rating first!");
    }else{
        ratingContainer.classList.toggle('hide');
        thankYouContainer.classList.toggle('hide');
    }
});