const productGuide = document.querySelector('.users-data-items')

const products = [
    {
        id: '126a1930322ca87e4bf35b9c',
        name: 'ILLB1',
        value: '2',
        unit: 'шт',
        description: '',
    },
    {
        id: '656a1930322ca87e4bf35df4',
        name: 'Клещ',
        value: '30',
        unit: 'шт',
        description: '',
    },
    {
        id: '126a1930322ca87e4bf35b9c',
        name: 'PSVS',
        value: '5',
        unit: 'шт',
        description: '',
    },
    {
        id: '126a1930322ca87e4bf35b9c',
        name: 'Кабель',
        value: '100',
        unit: 'м',
        description: '',
    },
    {
        id: '126a1930322ca87e4bf35b9c',
        name: 'Конвертер',
        value: '20',
        unit: 'шт',
        description: '',
    },
    {
        id: '126a1930322ca87e4bf35b9c',
        name: 'MSAV',
        value: '2',
        unit: 'шт',
        description: '',
    },
    {
        id: '126a1930322ca87e4bf35b9c',
        name: 'MTU',
        value: '2',
        unit: 'шт',
        description: '',
    },
    {
        id: '126a1930322ca87e4bf35b9c',
        name: 'MSB',
        value: '13',
        unit: 'шт',
        description: '',
    },
    {
        id: '126a1930322ca87e4bf35b9c',
        name: 'MLAV',
        value: '1',
        unit: 'шт',
        description: '',
    },
]

/** @const
 * @name userInfo - Информация для полей товара */
const productInfo = [
    {
        id: 'name',
        label: 'Наимнование',
        key: 'name',
        disabled: true,
        edit: false,
    },
    {
        id: 'value',
        label: 'Количество',
        key: 'value',
        disabled: true,
    },
    {
        id: 'unit',
        label: 'Единица измерения',
        key: 'unit',
        disabled: true,
    },
    {
        id: 'description',
        label: 'Описание товара',
        key: 'description',
        disabled: true,
    },
]

/** @function
 * @name paintElement - Раскрасить элемент
 * @param {string} firstCharacter - Первый символ */
const paintElement = (firstCharacter) => {
    const colors = {
        '#A3C1AD': 'абвabc',
        '#50C878': 'гдеdef',
        '#0076CE': 'ёжзghi',
        '#99FFFF': 'ийкjkl',
        '#6B8E23': 'лмнmno',
        '#D0F0C0': 'опрpqr',
        '#F0E68C': 'стуstu',
        '#F88379': 'фхцvwx',
        '#DB7093': 'чшщy',
        '#E6E6FA': 'ыэяz',
    }

    const [foundColor] = Object.entries(colors).find(([_, value]) => {
        return value.includes(firstCharacter.toLowerCase())
    })

    return foundColor ?? 'transparent'
}

/** @function
 * @name setBlockedField - Установка блокировки поля
 * @param {boolean} isBlocked - Заблокировано ли поле */
const setBlockedField = (isBlocked) => {
    return isBlocked ? 'disabled' : ''
}

/** @function
 * @name renderFields - Рендеринг полей
 * @param {string} mode - Мод
 * @param {object} product - Информация пользователя */
const renderUserFields = (product, mode = '') => {
    const filteredFields = userInfo.filter((field) => {
        return !Object.hasOwn(field, mode) || field[mode]
    })

    return filteredFields.reduce((acc, field) => {
        acc += `<label for="${field.id}">${field.label}:</label>
            <input ${setBlockedField(field.disabled)} id="${field.id}" class="modal-details-item" value="${product[field.key] ?? ''}" >
		`

        return acc
    }, '')
}

const renderUser = (product) => {
    return `<div class="users-data-items-item search-item" id="${product.id}"><p class="users-data-items-item__name">${product.name}</p><p class="users-data-items-item__value">${product.value + ' ' + product.unit}</p></div>`
}

const renderCardHTML = () => {
    return `<div class="modal__wrapper">
		<div class="modal-dragndrop"></div>
		<div class="modal__info">
			<div class="modal__photo"></div>
        	<p class="modal__name">PSVS</p>
		</div>
        <div class="modal-details">
            <label for="name">Наименование:</label>
            <input class="modal-details-item" id="name" value="PSVS"></div>
            <label for="unit">Единица измерения:</label>
            <input class="modal-details-item" id="unit" value="шт"></div>
            <label for="value">количество:</label>
            <input class="modal-details-item" id="value" value="2"></div>
        <div class="modal__btns">
            <button class="modal__btns_delete">Удалить</button>
        </div>
		</div>`
}

products.forEach((product) => productGuide.innerHTML += renderUser(product));