const dropdowns = document.querySelectorAll('.users-tools-sort__dropdown')
// Цикл по всем элементам



const sortingByName = ()  =>  {
	const items = document.querySelectorAll('.search-item');

	// get all items as an array and call the sort method
	Array.from(items).sort(function(a, b) {
		// get the text content
		a = a.querySelector('.users-data-items-item__name').innerText.toLowerCase()
		b = b.querySelector('.users-data-items-item__name').innerText.toLowerCase()
		return (a > b) - (a < b)
	}).forEach(function(n, i) {
		n.style.order = i
	})

}

const sortingByValue = () => {
	const items = document.querySelectorAll('.search-item')

	Array.from(items).sort(function(a, b) {
		// using ~~ to cast the value to a number instead of a string
		a = parseInt(a.querySelector('.users-data-items-item__value').innerText)
		b = parseInt(b.querySelector('.users-data-items-item__value').innerText)
		return a - b
	}).forEach(function(n, i) {
		n.style.order = i
	})
}

dropdowns.forEach(dropdown => {
	const select = dropdown.querySelector('.users-tools-sort__dropdown_select')
	const caret = dropdown.querySelector('.users-tools-sort__dropdown_select-caret')
	const menu = dropdown.querySelector('.users-tools-sort__dropdown__menu')
	const options = dropdown.querySelectorAll('.users-tools-sort__dropdown__menu li')
	const selected = dropdown.querySelector('.users-tools-sort__dropdown_select_selected')

	// click event
	select.addEventListener('click', () => {
		select.classList.toggle('users-tools-sort-dropdown__select-clicked')
		caret.classList.toggle('users-tools-sort__dropdown_select-caret-rotate')
		menu.classList.toggle('users-tools-sort__dropdown__menu_open')
	})

	// loop through all option elements
	options.forEach(option => {
		option.addEventListener('click', () => {
			selected.innerText = option.innerText
			select.classList.remove('users-tools-sort-dropdown__select-clicked')
			caret.classList.remove('users-tools-sort__dropdown_select-caret-rotate')
			menu.classList.remove('users-tools-sort__dropdown__menu_open')
			options.forEach(option => {
				option.classList.remove('active')
			})
			option.classList.add('active')

			if (option.id === 'value') {
				sortingByValue()
			}
			if (option.id === 'name') {
				sortingByName()
			}
		})
	})
})