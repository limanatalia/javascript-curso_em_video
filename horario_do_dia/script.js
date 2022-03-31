function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 9
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'fotodedia.jpg'
        document.body.style.background = '#e2cd9f'
        //mudar cor de fundo em js
    } else if (hora >= 12 && hora <18) {
        //boa tarde
        img.src = 'fototarde.jpg'
        document.body.style.background = '#b9846f'
    } else{
        //boa noite
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#515154'
    }
}
