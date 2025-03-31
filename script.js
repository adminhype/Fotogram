let myImg = [
    "doktor.png",
    "gamer.png",
    "koch.png",
    "lehrer.png",
    "maler.png",
    "pilot.png",
    "police.png",
    "rockstar.png",
    "sanitäter.png",
    "bauer.png"
];

const imgArea = document.getElementById("imgArea");

// renderImages ersellt für jedes Bild im Array ein Element
function renderImages() {
    // ein neues img-element erstellen
    myImg.forEach((imgName) => {
        const img = document.createElement("img");

        //pfad zum bild setzen
        img.src = "./img/" + imgName;

        // barrierefreiheit
        img.alt = imgName;

        // css klasse für größe & hover hinzufügen
        img.classList.add("thumb");

        //klick auf image > lightbox
        img.onclick = function () {
            showLightBox(img.src);
        }

        //fügt das img dem bereich imgArea hinzu
        imgArea.appendChild(img);
    });
}

// lightbox anzeigen + großes bild hinzufügen
function showLightBox(imgSrc) {

    //greift auf die elemente im html zu 
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg")

    // gleicher pfad wie die kleinen bilder 
    lightboxImg.src = imgSrc;

    //entfernt hidden damit lightbox sichtbar ist 
    lightbox.classList.remove("hidden")
}
//bild beim laden der seite rendern
renderImages();