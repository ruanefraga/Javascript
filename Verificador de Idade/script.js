function verificar(){
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoNasc = document.getElementById("txtano")
    var res = document.querySelector("div#res")
    var img = document.createElement("img")
    img.setAttribute('id', 'foto')
    

    if(anoNasc.value.length == 0 || anoNasc.value > anoAtual){
        alert("[ERRO] Verifique os dados e tente novamente.")
    } else {
        var sexoSelecionado = document.getElementsByName("radsex")
        var idade = anoAtual - Number(anoNasc.value)
        var genero = ""
        if(sexoSelecionado[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'bebê-m.fw.png')
            } else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'jovem-m.fw.png')
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'adulto-m.fw.png')
            } else{
                //Idoso
                img.setAttribute('src', 'idoso-m.fw.png')
            }
        } else {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'bebê-f.fw.png')
            } else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'jovem-f.fw.png')
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'adulto-f.fw.png')
            } else{
                //Idoso
                img.setAttribute('src', 'idoso-f.fw.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
        res.appendChild(img)
    }


 //<img id="imagem" src="bebê-f.fw.png" alt="Foto pessoa"></img>
}
   

