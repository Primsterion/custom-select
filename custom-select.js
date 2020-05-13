class CustomSelect {

	/*
	  Конструктор класса CustomSelect
	  @params (Object) : параметры настроек
	  params = {
	    containerClass: 'custom-select',
	    optionsContainerClass: 'custom-dropdown',
	    optionsClass: 'custom-option',
	    selectTitleDefault: 'Choose...'
	  }
	*/
	constructor(params) {
		this.selects = document.querySelectorAll('select');
		this.params = params;

		this.createCustomOptions = this.createCustomOptions.bind(this);
		this.createCustomBlock = this.createCustomBlock.bind(this);
		this.changeSelectValue = this.changeSelectValue.bind(this);
		this.createCustomSelect = this.createCustomSelect.bind(this);
		this.hideAll = this.hideAll.bind(this);
		this.createCustomBlock();
	}

	update() {
		this.createCustomBlock();
	}

	/*
	  Добавление блочного select(custom-select) под каждый <select>
	  @select (HTMLElement) : select элемент, который необходимо сделать с помощью блоков
	  @placeholderText (string) : начальный текст блочного select
	*/

	createCustomBlock() {
		const selects = Array.from(this.selects);

		selects.map((select) => {
			const placeholder = select.querySelector('option[selected]:not([value=""])') ? 
									select.querySelector('option[selected]:not([value=""])').textContent : 
									select.querySelector('option[value=""]').textContent;
									
			this.createCustomSelect(select, placeholder)
		});
	}

	/*
	  Создание блока custom-select
	  @select (HTMLElement) : select элемент, который необходимо сделать с помощью блоков
	  @placeholderText (string) : начальный текст блочного select
	*/
	createCustomSelect(select, placeholderText = this.params.selectTitleDefault) {
		const container = document.createElement('div'); //Главный контейнер (custom-select)
		const placeholder = document.createElement('p'); //Плейсхолдер (custom-select > p)
		const optionContainer = document.createElement('div'); //Контейнер с опциями (custom-dropdown)
		const selectOptions = this.createCustomOptions(select); //Массив опций из первоначального селекта (custom-option)
		const defaultOption = select.querySelector('option[value=""][selected]');

		placeholder.textContent = placeholderText;
		
		placeholder.className = defaultOption ? 'unselected' : '';
		container.className = this.params.containerClass;
		container.appendChild(placeholder);
		//Обертка для option

		optionContainer.className = this.params.optionsContainerClass;
		container.appendChild(optionContainer);
		for (const option of selectOptions) {
			optionContainer.appendChild(option);
		}

		document.body.addEventListener('click', (e) => {
			e.stopImmediatePropagation();
			if (e.target.classList.contains(this.params.containerClass)) {
				this.hideAll();
				e.target.classList.toggle('show');
			} else {
				this.hideAll();
			}
		});

		select.after(container);
	}

	/*
	  Создание списка опций
	  @select (select) : select элемент, у которого берутся значения option

	  Возвращает HTMLElement (Array)
	*/

	createCustomOptions(select) {
		const options = [];

		for (const option of select.children) {
			const optionElem = document.createElement('div');

			optionElem.className = this.params.optionsClass;
			optionElem.innerHTML = option.innerHTML;
			optionElem.dataset.value = option.value;

			optionElem.addEventListener('click', () => {
				this.changeSelectValue(optionElem, select);
				 // (custom-select > p)
			});

			options.push(optionElem);
		}
		return options;
	}

	/*
	  Изменение значение select
	  @elem (HTMLElement) : select элемент, который необходимо изменить
	  @select (select) : select элемент, который необходимо изменить
	*/
	changeSelectValue(elem, select) {
		let flag = true;
		for (const option of select.children) {
			if (option.value === elem.dataset.value) {
				option.selected = true;
				elem.parentElement.parentElement.firstChild.innerHTML = option.innerHTML;
				if (option.value === "" && flag) {
					elem.parentElement.parentElement.firstChild.classList.add('unselected');
					flag = false;
				} else {
					elem.parentElement.parentElement.firstChild.classList.remove('unselected');
				}
			}
		}
	}

	/**
	 * Скрывает все выпадающие списки
	 */

	hideAll() {
		const customSelects = document.querySelectorAll(`.${this.params.containerClass}`);

		for (const select of customSelects) {
			select.classList.remove('show');
		}
	}
}

//Список настраеваемых параметров. Если менять класcы на свои НЕ ЗАБЫТЬ ИЗМЕНИТЬ и в CSS!!!
const params = {
	containerClass: 'custom-select',
	optionsContainerClass: 'custom-dropdown',
	optionsClass: 'custom-option',
	selectTitleDefault: 'Все'
}

window.onload = () => {
	const custom = new CustomSelect(params);
}