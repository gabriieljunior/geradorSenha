import geraSenha from "./geradores";

const inputQtd = document.querySelector('.input-qtd')
const senhaGerada = document.querySelector('.senha-gerada');
const chkMaiusculas = document.querySelector('.chk-maiuscula');
const chkMinusculas = document.querySelector('.chk-minuscula');
const chkNumeros = document.querySelector('.chk-numero');
const chkSimbolos = document.querySelector('.chk-simbolo');
const btnGeraSenha = document.querySelector('.btnGeraSenha');

export default () => {
    btnGeraSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = senha()
    })
    
};

function senha(){
    const senha = geraSenha(
        inputQtd.value,
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chkNumeros.checked,
        chkSimbolos.checked
    );
    return senha || 'Nada selecionado';
}