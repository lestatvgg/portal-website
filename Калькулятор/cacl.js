const textarea = document.querySelector('#numpad-textarea')






const enterNumber = (number) => {
        textarea.value = textarea.value + number
}

//сложение
const sumNumbers = () => {
        if (!textarea.value || textarea.value[textarea.value.length - 1] === '+') return
        if (textarea.value.includes('+')) {
                const numbersArr = textarea.value.split ('+')
                textarea.value = parseInt(numbersArr[0]) + parseInt(numbersArr[1])
        }
        textarea.value = textarea.value + '+'
}


//вычитание
const subNumbers = () => {
        if (!textarea.value || textarea.value[textarea.value.length - 1] === '-') return
        if (textarea.value.includes('-')) {
                const numbersArr = textarea.value.split ('-')
                textarea.value = parseInt(numbersArr[0]) - parseInt(numbersArr[1])
        }
        textarea.value = textarea.value + '-'
}

//умножение
const multiNumbers = () => {
        if (!textarea.value || textarea.value[textarea.value.length - 1] === '*') return
        if (textarea.value.includes('*')) {
                const numbersArr = textarea.value.split ('*')
                textarea.value = parseInt(numbersArr[0]) - parseInt(numbersArr[1])
        }
        textarea.value = textarea.value + '*'
}

function clean() {
        textarea.value = "";
}

function equal() {
        let exp = textarea.value;
        if (exp) {
                textarea.value = eval(exp);
        }
}

function insert(num){
        textarea.value = textarea.value + num;

}

// const buttons = document.querySelectorAll('.number')
//
// console.log({buttons});
//
// for (let i=0; i< buttons.length; i++) {
//     buttons[i].addEventListener('Click', () => enterNumber(buttons[i].innerText))
// }
