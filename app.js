let slovo = document.getElementById("slovo")
let bth = document.getElementById("bth")
let otvet = document.getElementById("otvet")
let cls = document.getElementById("cls")
let idik = localStorage.length + 1

for (let i=1; i <= localStorage.length ; i++) {
    let new_wordss = document.createElement("li")
    new_wordss.textContent = localStorage.getItem(i);
    otvet.appendChild(new_wordss);
}



function get_td_l() {
    let new_word = slovo.value;
    let new_words = document.createElement("li")
    new_words.textContent = new_word;
    localStorage.setItem(`${idik}`, `${slovo.value}`)
    otvet.appendChild(new_words);
    idik ++
}

function clean() {
    localStorage.clear()
    location.reload()
}


bth.addEventListener('click', get_td_l)
cls.addEventListener('click', clean)


