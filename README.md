# custom-select
Для замены стандартного выпадающего списка (select) на кастомный, основанный на блоках. 

При разработке использовался чистый JS

# Установка

Подключить CSS в head (Font Awesome необходим для отображения иконки)
```html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="./custom-select.css">
```

Для настройки изменения стилей, рекомендуется использовать custom-select.scss. В файле содержатся переменные для удобного редактирования.

Подключить JS
```html
<script src="./custom-select.js"></script>
```

В файле custom-select.js, можно настроить необходимые параметры, в блоке params.
```js
const params = {
	containerClass: 'custom-select', // Свой класс обертки для основного блока
	optionsContainerClass: 'custom-dropdown', // Свой класс обертки для блока с выпадающим меню
	optionsClass: 'custom-option', // Свой класс обертки для элемента option
	selectTitleDefault: 'Все' // Плейсхолдер по умолчанию
}
```
