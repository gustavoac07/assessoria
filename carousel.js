window.addEventListener('load', function () {

    const imagens = document.querySelectorAll('.carousel img');

    if (imagens.length === 0) {
        console.log("ERRO: não encontrou imagens");
        return;
    }

    let index = 0;

    setInterval(() => {
        imagens[index].classList.remove('active');

        index = (index + 1) % imagens.length;

        imagens[index].classList.add('active');

    }, 4000);

});