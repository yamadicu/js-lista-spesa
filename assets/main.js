let lista = [
    'insalata',
    'carne',
    'pesce',
    'pane',
    'salse',
]

let i = 0;
const spesa = document.getElementById('spesa')

while ( i < lista.length ) {
    
    const prodotto = lista[i]

    const listaSpesa = document.createElement('li')

    listaSpesa.innerText = prodotto

    spesa.append(listaSpesa)

    i++

}