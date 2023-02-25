function carregar() {

    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`

    if (hora >= 0 && hora < 12) {
        // bom dia!
        img.src = "imagens/foto-manhã.jpg"
        document.body.style.background = "#B4B21D"
    } else if (hora >= 12 && hora <= 18) {
        // boa tarde!
        img.src = "imagens/foto-tarde.jpg"
        document.body.style.background = "#C1734D"
    } else {
        // boa noite!
        img.src = "imagens/foto-noite.jpg"
        document.body.style.background = "#012B3F"
    }


}