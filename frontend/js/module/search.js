
const inputSearch = document.querySelector('.users-tools__input-search');

inputSearch.addEventListener('input', () => {
    document.querySelectorAll('.search-item').forEach((item) => {
        console.log(item)
        if (item.textContent.toLowerCase().includes(inputSearch.value.toLowerCase())) {
            item.style.display = 'flex'
        } else {
            item.style.display = 'none'
        }
    })
})
