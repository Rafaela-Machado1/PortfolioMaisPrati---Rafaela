const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe"); // Acessa as estilizações

//SetTimeout, Quando o jump é executado, depois de 500ms a função vai ser executada
const jump = () => {
    mario.classList.add("jump");

    setTimeout (() => {
        mario.classList.remove("jump");
    }, 500);
};

// setInterval, a ação é executada repetidamente a partir de um tempo.
const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft; //Vai pegar a posição do cano a partir da esquerda
    const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

//para dar game over, se em relação da esquerda para direita o cano está entre 0 e 120 e o Mario menos do que 112.
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 112) {
        pipe.style.animation = "none"; //para a animação do cano
        pipe.style.left = `${pipePosition}px`; //adiciona a posição do cano na que ele parou

        mario.style.animation = "none"; //para a animação do mario
        mario.style.bottom = `${marioPosition}px`; //adiciona a posição do mario na que ele parou

        mario.src = "images/game-over.png"; //Tira a imagem atual do mario e troca para outra
        mario.style.width = "75px"; //muda a largura do mário
        mario.style.marginLeft = "50px";

        clearInterval(loop); // para o loop
    }
}, 10);

document.addEventListener("keydown", jump);
// verifica se tem um tecla baixada 