let words = document.getElementById('words'); //инициализация кнопок и полей ввода//
let word = document.getElementById('word');  //инициализация кнопок и полей ввода//
let bth = document.getElementById('bth'); //инициализация кнопок и полей ввода//

let count = 0;

function safeload() {       //функция для загрузки сохранённых в локальной памяти данных
    for(let i = 1; i <= localStorage.length; i++) { 
        let newwords = document.createElement('h3');      //создание тэга H3 
        newwords.textContent = localStorage.getItem(i);   //присвоение контента созданному тэгу
        word.appendChild(newwords);    //добавление тэга на страницу методом аппенд
        count++
    }
}

function get_to_do_list() {
    let new_word = words.value;           //получение значения из поля ввода
    let newwords = document.createElement('h3');   //создание тэга H3 
    newwords.textContent = new_word;           //наполнение тэга значением полученным из поля
    word.appendChild(newwords);        //добавление тэга на страницу методом аппенд
    count++ 
    localStorage.setItem(`${count}`, `${new_word}`)            //заполнение локального хранилища введёнными данными
}

bth.addEventListener('click', get_to_do_list);         //команда для выполнения функции по нажатию кнопки
window.onload = safeload()                             //при загрузке или обновлении страницы вызывает функцию