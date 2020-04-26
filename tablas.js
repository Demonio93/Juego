function res() {
    var resul = document.getElementById('resultado').value;

    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    
    var res = n1 * n2;

    console.log(res);
    console.log(resul)

    if (res == resul) {
        alert('Respuesta correcta')
    } else {
        alert('Respuesta incorrecta :(')
    }
}