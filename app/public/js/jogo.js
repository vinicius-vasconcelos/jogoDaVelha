/* Matriz globar das posições 
    (inicializei assim para não dar bosta no meu if la em baixo)
*/
mat = [
    ['00', '01', '02'],
    ['10', '11', '12'],
    ['20', '21', '22']
];

//função de limpar o texto das divs e voltar a matriz ao normal 
function limpaTela() {
    mat = [
        ['00', '01', '02'],
        ['10', '11', '12'],
        ['20', '21', '22']
    ];

    $('.col').each(function() { //percorrendo todas minhas divs
        this.innerHTML = '';
    });
}

//função pata esperar o documento html carregar
$(document).ready(() => {

    //função para verificar todas as possibilidades de resultados
    function verificaVencedor() {
        if( (mat[0][0] == mat[0][1] && mat[0][1] == mat[0][2]) ||
            (mat[0][0] == mat[1][0] && mat[1][0] == mat[2][0]) ||
            (mat[2][0] == mat[2][1] && mat[2][1] == mat[2][2]) ||
            (mat[0][2] == mat[1][2] && mat[1][2] == mat[2][2]) ||
            (mat[0][0] == mat[1][1] && mat[1][1] == mat[2][2]) ||
            (mat[1][0] == mat[1][1] && mat[1][1] == mat[1][2])) {
                alert('Ganhou');
                limpaTela();
            }
    }

    //função de click na div que deseja ser inserido um valor
    $('.col').click(function() {
        let valor = prompt('1 ou 0');

        //se o usuário digitou algum valor inválido
        if(valor != '1' && valor != '0') {
            alert('Digite apenas 1 ou 0');
            return;
        } else { //se não ele atualiza a mat(global) e coloca um texto na div
            let str = this.id.split('#');
            let lin = parseInt(str[0]);
            let col = parseInt(str[1]);

            if(mat[lin][col] != '0' && mat[lin][col] != '1') {
                mat[lin][col] = valor;
                document.getElementById(this.id).innerHTML = valor;
                
                verificaVencedor(); // a cada novo click verificar se tem um vencedor 
            }
        }
    });
})