document.addEventListener('DOMContentLoaded', function() {
    const aloitaButton = document.getElementById('aloitaButton');
    
    aloitaButton.addEventListener('click', function() {
        const nimet = [];
        
        for (let i = 1; i <= 10; i++) {
            let nimi;
            do {
                nimi = prompt(`Anna ${i}. nimi:`);
                if (nimi === null) {
                    alert('Keskeytettiin nimien syöttö.');
                    return;
                }
                if (nimi.trim() === '') {
                    alert('Syötäthän nimen');
                }
            } while (nimi.trim() === '');
            
            nimet.push(nimi.trim());
        }
        
        naytaNimet(nimet);
    });
});

function naytaNimet(nimet) {
    const vanhaLista = document.getElementById('nimeLista');
    if (vanhaLista) {
        vanhaLista.remove();
    }
    
    const lista = document.createElement('ul');
    lista.id = 'nimeLista';
    
    nimet.forEach(function(nimi, indeksi) {
        const listItem = document.createElement('li');
        listItem.textContent = `${indeksi + 1}. ${nimi}`;
        lista.appendChild(listItem);
    });
    
    const container = document.querySelector('.container');
    container.appendChild(lista);
}