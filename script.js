
// globale variable
const myImg = [
    "./img/doktor.png",
    "./img/gamer.png",
    "./img/koch.png",
    "./img/lehrer.png",
    "./img/maler.png",
    "./img/pilot.png",
    "./img/police.png",
    "./img/rockstar.png",
    "./img/sanitäter.png",
    "./img/bauer.png",
];


const myNames = [
    "Doktor",
    "Gamer",
    "Koch",
    "Lehrer",
    "Maler",
    "Pilot",
    "Polizist",
    "Rockstar",
    "Sanitäter",
    "Bauer"
];
let currentIndex = 0;

// die function render greift nur auf ein element im body
function render() {
    //wir sagen der function nimm nur das element mit der id imgArea
    let contentRef = document.getElementById('imgArea');
    // löscht den vohanden inhalt (falls da was drin ist)
    contentRef.innerHTML = "";

    // die schleife läuft vom ersten bis zum letzen bild
    for (let i = 0; i < myImg.length; i++) { //my.Img.length ist die anzahl der bilder im array
        // mit += fügen wir ein img elemnt pro bild
        contentRef.innerHTML +=
            // die klasse erstellen wir für das styling und onclick für die nächste function mit der wir die bilder öffnen
            `<img class="thumb" src="${myImg[i]}" onclick="openLightbox(${i})">`;
    }
}

function openLightbox(index) {
    //position merken des angeklickten index elements um später vor- und zurück zu blättern
    currentIndex = index;
    // greifen in das html ein um das passende bild anzuzeigen
    document.getElementById('lightboxImg').src = myImg[index];
    // das selbe mit dem namen
    document.getElementById('imgNames').innerText = myNames[index];
    // wir brauchen die 0 um auf das erste element zugreifen
    document.getElementsByClassName('lightbox')[0].classList.remove('hidden');
}

function closeLightbox() {
    document.getElementsByClassName('lightbox')[0].classList.add('hidden');
}

function nextImg() {
    //zeige das nächste bild im array
    currentIndex++;
    // wir springen zum ersten bild wenn wir am ende der liste sind 
    if (currentIndex >= myImg.length) {
        currentIndex = 0;
    }
    // dann setzten wir die openlightbox function um das bild neu zu setzen
    openLightbox(currentIndex);
}

function prevImg() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = myImg.length - 1;
    }
    openLightbox(currentIndex);
}
