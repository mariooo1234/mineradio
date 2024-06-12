const userGuide = document.querySelector('.users-data-items')

const popup = document.querySelector('.popup')
const card = document.querySelector('.modal')


document.querySelectorAll('.users-data-items-item').forEach((item) => {
    item.addEventListener('click', async () => {
        popup.classList.add('open')

        card.innerHTML = renderCardHTML()
    })
})

/** @callback - Обработчик закрытия popup-окна */
popup.addEventListener('click', ({ target }) => {
    if (!target.closest('.modal') && !target.closest('.modal__btns') || target.closest('.modal__btns_canсel')) {
        popup.classList.remove('open')
    }
})