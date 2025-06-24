'use strict'

const keys = document.querySelectorAll('.key')

// Создаем объект для хранения аудио элементов
const audioElements = {
	A: new Audio('/assets/sounds/clap.wav'),
	S: new Audio('/assets/sounds/hihat.wav'),
	D: new Audio('/assets/sounds/kick.wav'),
	Z: new Audio('/assets/sounds/openhat.wav'),
	X: new Audio('/assets/sounds/boom.wav'),
	C: new Audio('/assets/sounds/ride.wav'),
	V: new Audio('/assets/sounds/snare.wav'),
	G: new Audio('/assets/sounds/tom.wav'),
	H: new Audio('/assets/sounds/tink.wav'),
}

// Функция воспроизведения звука
const playSound = letter => {
	const audio = audioElements[letter]
	if (!audio) return

	// Сбрасываем время воспроизведения на начало
	audio.currentTime = 0
	audio.play()

	// Добавляем визуальный эффект
	const key = Array.from(keys).find(key => key.querySelector('kbd').textContent === letter)
	if (!key) return
	key.classList.add('playing')
	setTimeout(() => key.classList.remove('playing'), 100)
}

// Обработчик нажатия клавиш
document.addEventListener('keydown', e => {
	const letter = e.key.toUpperCase()
	playSound(letter)
})

// Обработчик клика по кнопкам
keys.forEach(key => {
	key.addEventListener('click', () => {
		const letter = key.querySelector('kbd').textContent
		playSound(letter)
	})
})
