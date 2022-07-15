import prompt from "prompt-sync";

const respostaCerta = () => {
    const css = [];
    const pergunta = prompt();
    while (true) {
        const opcao = pergunta("Digite uma propriedade CSS:")
        if (opcao == "sair") {
            console.log(css.sort());
            break;
        } else {
            css.push(opcao)
        }
    }
}
respostaCerta();