const bacColorBtn = {
    'Оснащен': 'green',
    'Поломка': 'red',
    'В пути': 'grey'
}

const cardBtns = document.querySelectorAll('.users-cards-card__status');

cardBtns.forEach(btn => {
    btn.style.backgroundColor = bacColorBtn[btn.innerText];
})