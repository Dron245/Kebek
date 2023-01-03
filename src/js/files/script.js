// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const line =document.querySelectorAll('.content-order__line');
const text =document.querySelectorAll('.content-order__text:not(:last-child)');




document.addEventListener('click', documentactions)

function documentactions (e) {
	const target = e.target
	//e.preventdefault();
	if(target.closest('.header__city')){
		document.querySelector('.header__city-questions').classList.add('_active')
	}
	if (!target.closest('.header__city')) {
		document.querySelector('.header__city-questions').classList.remove('_active')
	}
}