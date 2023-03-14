const mainShadow = document.querySelector('.main__shadow')
const teamPlayerShadow = document.querySelectorAll('.team__player-shadow')
const modal = document.querySelector('.modal')
const addBtn = document.querySelector('.btn__add')
const closeBtn = document.querySelector('.modal__close-btn')
const inputPicture = document.querySelector('.input__picture')
const fileP = document.querySelector('.file__name')
const approveBtn = document.querySelector('.btn__approve')
const clearBtn = document.querySelector('.btn__clear')
const teamBox = document.querySelector('.box__team')
const modalInputName = document.querySelector('.modal__input-name')

const creatingNewPlayer = () => {
	let newPlayerDiv = document.createElement('div')
	newPlayerDiv.classList.add('team__player')
	teamBox.appendChild(newPlayerDiv)
	clearModal()
}

const clearModal = () => {
	approveBtn.classList.remove('btn__approve-active')
	clearBtn.classList.remove('btn__clear-active')
	fileP.textContent = ''
	modalInputName.value = ''
	inputPicture.value = ''
}

const showModal = () => {
	mainShadow.classList.add('main__shadow-active')
	modal.classList.add('modal__active')
	teamPlayerShadow.forEach(player => {
		player.classList.add('team__player-shadow-active')
	})
}

const closeModal = () => {
	mainShadow.classList.remove('main__shadow-active')
	modal.classList.remove('modal__active')
	teamPlayerShadow.forEach(player => {
		player.classList.remove('team__player-shadow-active')
	})
}

inputPicture.addEventListener('change', e => {
	const [file] = e.target.files
	const { name: fileName, size } = file
	const fileSize = (size / 1000).toFixed(2)
	const fileNameAndSize = `${fileName} - ${fileSize}KB`
	fileP.textContent = fileNameAndSize
	approveBtn.classList.add('btn__approve-active')
	clearBtn.classList.add('btn__clear-active')
})

addBtn.addEventListener('click', showModal)
closeBtn.addEventListener('click', closeModal)
approveBtn.addEventListener('click', creatingNewPlayer)
clearBtn.addEventListener('click', clearModal)
