function lisaaNimi() {
    const nimiKentta = document.getElementById('nimiKentta');
    const nimi = nimiKentta.value.trim();
    
    if (nimi === '') {
        alert('Anna nimi ensin');
        return;
    }
    
    const lista = document.getElementById('nimiLista');
    const listaElementti = document.createElement('li');
    listaElementti.textContent = nimi;
    lista.appendChild(listaElementti);
    
    nimiKentta.value = '';
}

function poistaNimi() {
    const nimiKentta = document.getElementById('nimiKentta');
    const nimi = nimiKentta.value.trim();
    
    if (nimi === '') {
        alert('Anna poistettava nimi');
        return;
    }
    
    const lista = document.getElementById('nimiLista');
    const listaElementit = lista.getElementsByTagName('li');
    
    
    for (let i = 0; i < listaElementit.length; i++) {
        if (listaElementit[i].textContent === nimi) {
            listaElementit[i].remove();
            nimiKentta.value = '';
            return;
        }
    }
    
    alert('Nimeä "' + nimi + '" ei löydy listasta');
}

function jarjestaNimet() {
    const lista = document.getElementById('nimiLista');
    const listaElementit = lista.getElementsByTagName('li');
    
    if (listaElementit.length === 0) {
        alert('Lista on tyhjä!');
        return;
    }
    
    // Kerätään nimet taulukkoon
    const nimet = [];
    for (let i = 0; i < listaElementit.length; i++) {
        nimet.push(listaElementit[i].textContent);
    }
    
    // Järjestetään nimet aakkosjärjestykseen
    nimet.sort();
    
    // Tyhjennetään lista
    lista.innerHTML = '';
    
    // Lisätään järjestetyt nimet takaisin listaan
    nimet.forEach(function(nimi) {
        const listaElementti = document.createElement('li');
        listaElementti.textContent = nimi;
        lista.appendChild(listaElementti);
    });
}