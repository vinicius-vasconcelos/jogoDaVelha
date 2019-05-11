mat = [
    ['00', '01', '02'],
    ['10', '11', '12'],
    ['20', '21', '22']
];

function limpaTela() {
    mat = [
        ['00', '01', '02'],
        ['10', '11', '12'],
        ['20', '21', '22']
    ];

    $('.col').each(function(){
        this.innerHTML = '';
    });
}

//função pata esperar o documento html carregar
$(document).ready(() => {
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


    $('.col').click(function() {
        let valor = prompt('1 ou 0');

        if(valor != '1' && valor != '0') {
            alert('Digite apenas 1 ou 0');
            return;
        } else {
            let str = this.id.split('#');
            let lin = parseInt(str[0]);
            let col = parseInt(str[1]);

           // console.log(`lin = ${lin}; col = ${col} == mat${mat[lin][col]}`)
            if(mat[lin][col] != '0' && mat[lin][col] != '1') {
                mat[lin][col] = valor;
                document.getElementById(this.id).innerHTML = valor;
                
                verificaVencedor();
            }
        }
    });
})