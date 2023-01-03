// Подключение из node_modules
import * as noUiSlider from 'nouislider';

// Подключение стилей из scss/base/forms/range.scss 
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
// import 'nouislider/dist/nouislider.css';


export function rangeInit() {
	const priceSlider = document.querySelectorAll('.range');
	priceSlider.forEach(element => {
		if (element) {
			let textFrom = element.getAttribute('data-from');
			let textTo = element.getAttribute('data-to');
			noUiSlider.create(element, {
				start: 1,
				step: 1,
				tooltips: true/*wNumb({decimals:1})*/,
				connect: [true, false],
				range: {
					'min': [1],
					'max': [10]
				}
			});
			/*
			const priceStart = document.getElementById('price-start');
			const priceEnd = document.getElementById('price-end');
			priceStart.addEventListener('change', setPriceValues);
			priceEnd.addEventListener('change', setPriceValues);
			*/
			function setPriceValues() {
				let priceStartValue;
				let priceEndValue;
				if (priceStart.value != '') {
					priceStartValue = priceStart.value;
				}
				if (priceEnd.value != '') {
					priceEndValue = priceEnd.value;
				}
				priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
			}
			const noUi = document.querySelectorAll('.noUi-tooltip');

			element.noUiSlider.on('update', function(){
				const test = element.closest('.products__item');
				let dec = test.querySelector('.product__decimal');
				
				//console.log(dec);
				const productCostPerKG = test.querySelector('.product__button-cost').firstChild.innerHTML;
				dec.innerHTML = productCostPerKG * 1000 * test.querySelector('.noUi-tooltip').innerHTML;
				noUi.forEach(element => {
					element.innerHTML = Math.trunc(element.innerHTML)
				});
				})
		}
	});
}
rangeInit();
