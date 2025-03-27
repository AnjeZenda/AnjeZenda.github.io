let colorHex

const effect = VANTA.NET({
	el: '#bg',
	mouseControls: true,
	touchControls: true,
	gyroControls: false,
	minHeight: 200.0,
	minWidth: 200.0,
	scale: 1.0,
	scaleMobile: 1.0,
	color: 0x242424,
	backgroundColor: 0xf7f7f7,
	maxDistance: 19.0,
})

const headerBtns = document.querySelectorAll('.header__btn'),
	body = document.querySelector('body')

headerBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		if (!btn.classList.contains('active')) {
			toggleBtns()
			if (!btn.classList.contains('header__btn_white')) {
				effect.setOptions({
					color: 0xf7f7f7,
					backgroundColor: 0x242424,
				})
			} else {
				effect.setOptions({
					color: 0x242424,
					backgroundColor: 0xf7f7f7,
				})
			}
		}
	})
})

function toggleBtns() {
	headerBtns.forEach(btn => {
		btn.classList.toggle('active')
	})
	body.classList.toggle('black-theme')
}

// колоризация

const langs = document.querySelectorAll('.footer__item')
const colors = [
	'F93C3C',
	'3AC365',
	'F9943C',
	'78F93C',
	'3CF6F9',
	'3CAAF9',
	'3C6BF9',
	'723CF9',
	'D63CF9',
	'F93C84',
	'9CE468',
	'3AC365',
	'CA00CA',
]

langs.forEach(elem => {
	elem.addEventListener('mouseenter', () => {
		let randomElem = Math.floor(Math.random() * colors.length)
		let colorText = '#' + colors[randomElem]
		let colorBg = '0x0' + colors[randomElem] - '0x0'
		elem.style.color = colorText
		effect.setOptions({
			color: colorBg,
			// color: 0xf7f7f7,
		})
	})
	elem.addEventListener('mouseleave', () => {
		elem.style.color = 'inherit'
		if (!body.classList.contains('black-theme')) {
			effect.setOptions({
				color: 0x242424,
			})
		} else {
			effect.setOptions({
				color: 0xf7f7f7,
			})
		}
	})
})

// colors

// const langs = document.querySelectorAll('.footer__item')

// langs.forEach(el => {
// 	el.addEventListener('mouseenter', () => {
// 		// let colorHexNum = `${randomNumber().toString(16)}${randomNumber().toString(
// 		// 	16
// 		// )}${randomNumber().toString(16)}`
// 		let colorHexNumTwo = randomHexColorCode()
// 		// el.style.color = '#' + colorHexNum
// 		el.style.color = '#' + colorHexNumTwo

// 		// colorHex = parseInt(colorHexNum)
// 		// colorHex = randomHexColorCode()
// 		colorHex = 0x0 + colorHexNumTwo - 0x0
// 		effect.setOptions({
// 			color: 10000,
// 			// color: 0xf7f7f7,
// 		})
// 	})
// 	el.addEventListener('mouseleave', () => {
// 		el.style.color = 'inherit'
// 		if (body.classList.contains('black-theme')) {
// 			effect.setOptions({
// 				color: 0xf7f7f7,
// 			})
// 		} else {
// 			effect.setOptions({
// 				color: 0x242424,
// 			})
// 		}
// 	})
// })

// function randomHexColorCode() {
// 	let n = (Math.random() * 0xfffff * 1000000).toString(16)
// 	return n.slice(0, 6)
// }

// console.log(0x0 + randomHexColorCode() - 0x0)

// console.log(
// 	`${randomNumber().toString(16)}${randomNumber().toString(
// 		16
// 	)}${randomNumber().toString(16)}`,
// 	0xf7f7f7
// )

// function randomNumber() {
// 	const randomNum = Math.floor(Math.random() * (255 - 0 + 1)) + 0
// 	return randomNum
// }
