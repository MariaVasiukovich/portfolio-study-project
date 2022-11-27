const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeBtn = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
});

const skillsRatings = document.querySelectorAll('.skills__progress-item-heading span'),
      progressLines = document.querySelectorAll('.progress-actual');

skillsRatings.forEach((item, i) => {
    progressLines[i].style.width = item.innerHTML;
});
