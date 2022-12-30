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
				tooltips: [wNumb({decimals: 1})],
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
		}
	});
}
rangeInit();
