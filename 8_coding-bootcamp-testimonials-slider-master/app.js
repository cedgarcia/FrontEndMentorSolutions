// buttons
const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');
const image = document.querySelector('.carousel__img'); //image

const reviewText = document.querySelector('.review');
const authorName = document.querySelector('.author__name');
const authorTitle = document.querySelector('.author__job');

let bit = true;

btnPrev.addEventListener('click', ()=> {
    if (bit) {
        reviewText.textContent = '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”';
        authorName.textContent = 'John Tarkpor';
        authorTitle.textContent = 'Junior Frontend Developer';
        image.src = 'app/images/image-john.jpg';
        }
    else {
        reviewText.textContent = '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”';
        authorName.textContent = 'Tanya Sinclair';
        authorTitle.textContent = 'UX Engineer';
        image.src = 'app/images/image-tanya.jpg';
    }
    bit = !bit;
})
btnNext.addEventListener('click', ()=> {
    if (bit) {
        reviewText.textContent = '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”';
        authorName.textContent = 'John Tarkpor';
        authorTitle.textContent = 'Junior Frontend Developer';
        image.src = 'app/images/image-john.jpg';
        }
    else {
        reviewText.textContent = '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”';
        authorName.textContent = 'Tanya Sinclair';
        authorTitle.textContent = 'UX Engineer';
        image.src = 'app/images/image-tanya.jpg';
    }
    bit = !bit;
})

