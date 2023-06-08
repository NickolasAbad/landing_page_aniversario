import prettyMilliseconds from 'pretty-ms';

AOS.init();

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    var timer = setInterval(contador, 1000) 

    // Seção espaço, programação das abas
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('room__content__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('room__content__tabs__button--is-active');
        })
    }

    function contador() {
        
        const dataAniversario = new Date("Jul 29, 2023 00:00:00");
        var dataAtual = new Date();
        const tempoRestante = dataAniversario - dataAtual;
        const formatador = prettyMilliseconds(tempoRestante, { secondsDecimalDigits: 0 });

        if (tempoRestante > 0) {
            const subtitleClass = document.querySelector(".hero__content__subtitle")
            subtitleClass.innerHTML = `<h2 class="title--small">Começa em <span class="formatador">${formatador}<span/><h2/>`
        } else {
            const tempoFinalizado = dataAtual - dataAniversario;
            const formatadorFinalizado = prettyMilliseconds(tempoFinalizado, { secondsDecimalDigits: 0 });
            const subtitleClass = document.querySelector(".hero__content__subtitle")
            subtitleClass.innerHTML = `<h2 class="title--small">Aconteceu há <span class="formatador"> ${formatadorFinalizado} <span/></h2>`
        }
    }

    function removeBotaoAtivo() {
        const buttons = document.querySelectorAll('[data-tab-button]');
        
        for(let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('room__content__tabs__button--is-active');
        }
    }

    function escondeTodasAbas() {
        const tabsContainer = document.querySelectorAll('[data-tab-id]');

        for(let i = 0; i < tabsContainer.length; i++) {
            tabsContainer[i].classList.remove('room__content__list--is-active')
        }

    }

})