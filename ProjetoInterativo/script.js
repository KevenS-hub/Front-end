function verificar() {
    var generoM = document.querySelector('#masc').checked;
    var generoF = document.querySelector('#fem').checked;
    var generoN = document.querySelector('#other').checked;
    var coresFrias = document.querySelector('#frias').checked;
    var coresQuentes = document.querySelector('#quentes').checked;
    var corneutra = document.querySelector('#sla').checked;
    var atribint = document.querySelector('#inteligente').checked;
    var atribcora = document.querySelector('#corajoso').checked;
    var atribcalm = document.querySelector('#calmo').checked;
    var res = document.querySelector('#res');
    var img = document.querySelector('#imagem');
    var txt2 = document.querySelector('#texto2');
    
    
    if (!generoM && !generoF && !generoN) {
        window.alert('Por favor, selecione uma opção de gênero.');
        return; 
    }

    if (!coresFrias && !coresQuentes && !corneutra) {
        window.alert('Por favor, selecione uma opção de cor.');
        return;
    }

    if (!atribcalm && !atribcora && !atribint){
        window.alert('Por favor, selecione uma opção de atributo.');
        return;
    }

    if (generoM) {
        if (coresFrias && atribint) {
            res.innerHTML = '<strong>Você é o Lelouch!!</strong>';
            img.src = 'midia/lelouch.png';
            document.body.style.backgroundImage = "url('fundos/wallpaperlelouch.png')";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPosition = "center";
            img.style.border= '5px solid #2146eb' ;
            txt2.textContent = 'Assim como o Lelouch, você é inteligente, focado, e prefere explorar todas as opções possíveis!!';
        } else if (coresFrias && atribcora){
            res.innerHTML = '<strong>Você é o Kevin!!</strong>';
            img.src = 'midia/klevin.png';
            document.body.style.backgroundImage = "url('fundos/klevin.jpg";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPosition = "center";
            img.style.border= '5px solid #000000' ;
            txt2.textContent = 'Assim como o Kevin, você é forte, corajoso e não deixa nada em seu caminho te impedir de conseguir o que quer!!'
      } else if(coresFrias && atribcalm) {
            res.innerHTML = '<strong>Você é o Jackfrost!!</strong>';
            img.src = 'midia/jackfrost.png';
            document.body.style.backgroundImage = "url('fundos/wallpaperwinter.jpg";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPosition = "center";
            img.style.border = '5px solid #A1DAF0';
            txt2.textContent = 'Quem nunca quis se divertir na neve, não é mesmo?? JackFrost é uma pessoa alegre, divertida e que prefere sempre se manter calmo do que perder o controle das emoções.';
    } else if (coresQuentes && atribint){
        res.innerHTML = '<strong>Você é o Tony Stark!!</strong>';
        img.src = 'midia/tony.png';
        img.style.marginTop = '10px';
        document.body.style.backgroundImage = "url('fundos/wallpaperavenger.jpg";
        document.body.style.backgroundPosition = "center";
        img.style.border = '5px solid #F50E00';
        txt2.textContent = 'Gênio, playboy, bilionário e uma pessoa com um coração grande e forte como ferro. Assim como o Tony você usa sua inteligência para alcançar qualquer coisa que quiser!!';
    } else if (coresQuentes && atribcora) {
        res.innerHTML = '<strong>Você é o Ben!!</strong>';
        img.src = 'midia/bent.png';
        document.body.style.backgroundImage = "url('fundos/bentwallpaper.jpg";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        img.style.border = '5px solid #25F001';
        txt2.textContent = 'Assim como o Ben, você não tem medo de nada que possa aparecer para enfrentá-lo. Seu espírito livre e alma de exploração te levam a lugares incríveis.';
    } else if (coresQuentes && atribcalm) {
        res.innerHTML = '<strong>Você é o Dazai!!</strong>';
        img.src = 'midia/dazai.png';
        document.body.style.backgroundImage = "url('fundos/wallpaperdazai.jpg";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        img.style.border = '5px solid #89511a';
        txt2.textContent = 'Assim como o Dazai,você gosta de se sentir confortável e estável com a paz ao seu redor. Apesar de amar aventuras, você se sente extremamente calmo e feliz na serenidade.';
    } else if (corneutra && atribint) {
        res.innerHTML = '<strong>Você é o Rocket!!</strong>';
        img.src = 'midia/rocket.png';
        document.body.style.backgroundImage = "url('fundos/wallpaperrocket.jpg";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        img.style.border = '5px solid #545454';
        txt2.textContent = 'Aventura, inteligência e poder de fogo!!! Assim como o Rocket você é o mais explosivo, genial e preparado do seu time. Mas apesar disso, no fundo você tem um coração nobre e gentil!';
    } else if (corneutra && atribcora) {
        res.innerHTML = '<strong>Você é o Spinel!!</strong>';
        img.src = 'midia/spinel.png';
        document.body.style.backgroundImage = "url('fundos/spinelwallpaper.jpg";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        img.style.border = '5px solid #E050DC';
        txt2.textContent = 'A imprevisibilidade e o caos em pesssoa. Assim como o Spinel você ama desafios, diversão e estar alegre é o seu momento de paz na vida!!';
    } else if (corneutra && atribcalm){
        res.innerHTML = '<strong>Você é o Sasuke!!</strong>';
        img.src = 'midia/sasukezinho.png';
        document.body.style.backgroundImage = 'url("fundos/wallpapersasuke.jpg")';
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        img.style.border = '5px solid #0300E1';
        txt2.textContent = 'Frio, seguro de si, e calmo em personalidade. Sasuke Uchiha é um exemplo perfeito de como as vezes, o silêncio é uma fárica de pensamentos e soluções!';
    }
}
    
    if (generoF || generoN) {
        if (coresFrias && atribint) {
            res.innerHTML = '<strong>Você é a Kuromi!!</strong>';
            img.src = 'midia/kuromi.png';
            document.body.style.backgroundImage = "url('fundos/kuromiwallpaper.jpg";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPosition = "center";
            txt2.textContent = 'Assim como a Kuromi você é fria, trevosa, e ama se vestir com roupas estilosas e do seu gosto alternativo!';
        } else if (coresFrias && atribcora) {
            res.innerHTML = '<strong>Você é a Tempestade!!</strong>';
            img.src = 'midia/storm.png';
            document.body.style.backgroundImage = "url('fundos/wallpaperstorm.png";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPosition = "center";
            img.style.border = '5px solid #3DB1FF';
            txt2.textContent = 'Tempestade é um exemplo de mulher poderosa!! Líder, companheira, guerreira e protetora dos mais fracos. Assim como ela você tem uma conexão especial com o mundo, e gostaria de sempre estar em contato com ele.';
        } else if (coresFrias && atribcalm) {
            res.innerHTML = '<strong>Você é a Lapis Lazuli!!</strong>';
            img.src = 'midia/lapis.png';
            document.body.style.backgroundImage = "url('fundos/wallpaperlapis.png";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPosition = "center";
            img.style.border = '5px solid #2FF7FF';
            txt2.textContent = 'Assim como a Lapis Lazuli, você não tem medo de transparecer sua calma sobre com o que está ao seu redor. Você é uma barreira na superfície, mas por dentro é uma doçura de pessoa.';
        } else if (coresQuentes && atribint) {
            res.innerHTML = '<strong>Você é a Jean Grey!!</strong>';
            img.src = 'midia/useless.png';
            document.body.style.backgroundImage = "url('fundos/wallpaperuseless.jpg";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPosition = "center";
            img.style.border = '5px solid #E14803';
            txt2.textContent = 'Jean Grey é muitas vezes vista como frágil ou expositiva, porém quando realmente transparece suas emoções e vontades, se torna a mais forte entre todos ao seu redor!!';
        } else if (coresQuentes && atribcora) {
            res.innerHTML = '<strong>Você é a Bloom!!</strong>';
            img.src = 'midia/bloom.png';
            document.body.style.backgroundImage = "url('fundos/wallpaperbloom.jpg')";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPosition = "center";
            img.style.border = '5px solid #E14A31';
            txt2.textContent = 'Assim como a Bloom, vocÊ está sempre disposta a se aventurar e experimentar tudo o que o mundo tem a oferecer!! Tudo é novo, bonito e alegre, e está à sua disposição!!';
        } else if (coresQuentes && atribcalm) {
            res.innerHTML = '<strong>Você é a MyMelody!!</strong>';
            img.src = 'midia/mymelody.jpg';
            document.body.style.backgroundImage = "url('fundos/mymelodywallpaper.jpg";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPosition = "center";
            img.style.border = '5px solid #FE61A6';
            txt2.textContent = 'MyMelody é uma pessoa aconchegante, graciosa e amiga de todos. Ao seu redor, até aqueles que desgostam dela a admiram e amam no fundo.';
        } else if (corneutra && atribint) {
            res.innerHTML = '<strong>Você é a Peridot!!</strong>';
            img.src = 'midia/peridott.png';
            document.body.style.backgroundImage = "url('fundos/wallpaperperidott.png";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPosition = "center";
            img.style.border = '5px solid #2CFF00';
            txt2.textContent = 'Assim como a Peridot, você é meio confusa de se entender, e de entender os outros também. Tecnologia e o imaginário parecem muito mais fáceis de se descobrir como funcionam do que o sentimento das pessoas XD!!';
        } else if (corneutra && atribcora) {
            res.innerHTML = '<strong>Você é a Espinela!!</strong>';
            img.src = 'midia/spinel.png';
            document.body.style.backgroundImage = "url('fundos/spinelwallpaper.jpg";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPosition = "center";
            img.style.border = '5px solid #E050DC';
            txt2.textContent = 'A imprevisibilidade e o caos em pesssoa. Assim como a Espinela você ama desafios, diversão e estar alegre é o seu momento de paz na vida!!';
        } else if (corneutra && atribcalm) {
            res.innerHTML = '<strong>Você é a HelloKitty!!</strong>';
            img.src = 'midia/rarikitty.png';
            document.body.style.backgroundImage = "url('fundos/rarikittywallpaper.jpg";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPosition = "center";
            img.style.border = '5px solid #E10105';
            txt2.textContent = 'Não tem o que dizer de críticas a você!! Você é uma inspiração para quem a observa. Como a HelloKitty, todos a usam de referência, e de exemplo de pessoa maravilhosa em todos os sentidos.';
        }
    }

    document.querySelector('#caixa').style.display = 'none';
    document.querySelector('.botao').style.display = 'none';
    document.getElementById('botao2').style.display = 'inline-block';
    document.querySelector('.gif').style.display = 'none';
    res.style.textDecoration = 'none';
    res.style.color = 'black'
    res.style.fontSize = '20px'; 
    res.style.textShadow = 'none';
    res.style.background = 'transparent';
    res.style.fontFamily = 'Arial, sans-serif';
    document.querySelector('#escolhas').style.display = 'none';
    img.style.marginTop = '55px';
    res.style.marginTop = '20px';
    document.querySelector('#botao2').style.marginTop = '20px';
}


function Voltar() {
    window.location.reload(true);
}

const imagensBackground = [
    'url("fundos/wallpaperfundo.png")',
    'url("fundos/wallpaperfundo2.jpg")',
    'url("fundos/wallpaperfundo7.jpg")',
    'url("fundos/wallpaperfundo9.jpg")',
];

const indiceImagem = Math.floor(Math.random() * imagensBackground.length);
document.body.style.backgroundImage = imagensBackground[indiceImagem];

document.body.style.backgroundImage = "wallpaperfundo.png";
document.body.style.backgroundSize = "cover"; 


