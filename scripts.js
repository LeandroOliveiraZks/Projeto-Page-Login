const wrapper = document.querySelector ('.wrapper');
const logarLink = document.querySelector ('.logar-link');
const registroLink= document.querySelector ('.resgistro-link');
const btnMenu= document.querySelector ('.botaoLogin');
const iconeClose= document.querySelector ('.icon-close');

registroLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

logarLink.addEventListener ('click', ()=> {
    wrapper.classList.remove('active');
});

btnMenu.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});


iconeClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});




