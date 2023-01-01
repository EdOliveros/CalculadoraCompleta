// encontrar el numero mas grande en un array

var numeros = [
    1, 2, 3, 4, 5, 9
]

let numeroMasGrande = 0

function numeroMayor(numeros, numeroMasGrande) {
    
    

    for (let i = 0; i < numeros.length; i++) {
        if(numeroMasGrande < numeros[i]){
            numeroMasGrande = numeros[i]
        }
    } console.log(numeroMasGrande)

}


numeroMayor(numeros, numeroMasGrande)