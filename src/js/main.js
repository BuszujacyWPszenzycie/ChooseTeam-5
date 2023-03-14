const mainShadow = document.querySelector('.main__shadow')
const teamPlayerShadow = document.querySelectorAll('.team__player-shadow')
const modal = document.querySelector('.modal')
const addBtn = document.querySelector('.btn__add')
const closeBtn = document.querySelector('.modal__close-btn')
const inputPicture = document.querySelector('.input__picture')
const fileP = document.querySelector('.file__name')
const activeBtn = document.querySelector('.btn__approve')

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
	activeBtn.classList.add('btn__approve-active')
})

addBtn.addEventListener('click', showModal)
closeBtn.addEventListener('click', closeModal)
