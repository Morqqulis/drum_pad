'use strict'

const keys = document.querySelectorAll('.key')
const pads = [
	{ letter: 'A', src: '/sounds/clap.wav' },
	{ letter: 'S', src: '/sounds/hihat.wav' },
	{ letter: 'D', src: '/sounds/kick.wav' },
	{ letter: 'Z', src: '/sounds/openhat.wav' },
	{ letter: 'X', src: '/sounds/boom.wav' },
	{ letter: 'C', src: '/sounds/ride.wav' },
	{ letter: 'V', src: '/sounds/snare.wav' },
	{ letter: 'G', src: '/sounds/tom.wav' },
	{ letter: 'H', src: '/sounds/tink.wav' },
]

// Создаем объект для хранения аудио элементов
const audioElements = {}

// Предзагружаем все звуки
pads.forEach(pad => {
	const audio = new Audio(pad.src)
	audioElements[pad.letter] = audio
})

// Функция воспроизведения звука
const playSound = letter => {
	const audio = audioElements[letter]
	if (!audio) return

	// Сбрасываем время воспроизведения на начало
	audio.currentTime = 0
	audio.play()

	// Добавляем визуальный эффект
	const key = Array.from(keys).find(key => key.querySelector('kbd').textContent === letter)
	key?.classList.add('playing')
	setTimeout(() => key?.classList.remove('playing'), 100)
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
