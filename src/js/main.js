const mainShadow = document.querySelector('.main__shadow')
const teamPlayerShadow = document.querySelectorAll('.team__player-shadow')
const modal = document.querySelector('.modal')
const addBtn = document.querySelector('.btn__add')
const closeBtn = document.querySelector('.modal__close-btn')

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

addBtn.addEventListener('click', showModal)
closeBtn.addEventListener('click', closeModal)
