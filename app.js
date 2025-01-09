// const butao = document.querySelector('#mudarTema')
const butao = document.querySelector('.butao')
const corpo = document.querySelector('.corpo')
// const butao = document.querySelector('.texto')
let temaIsDark = true;

// texto.innerHTML = 'miau'
butao.addEventListener('click', () => {
    temaIsDark? corpo.classList.add('dark') || corpo.classList.remove('light') : corpo.classList.add('light') || corpo.classList.remove('dark')
    temaIsDark = !temaIsDark
    temaIsDark? butao.innerHTML = 'Tema Claro' : butao.innerHTML = 'Tema Escuro'
    temaIsDark? butao.classList.add('light') || butao.classList.remove('dark') : butao.classList.add('dark') || butao.classList.remove('light')
}
)
