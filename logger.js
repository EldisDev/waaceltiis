async function logVisit() {
    const phpURL = "https://processing.infinityfreeapp.com/logger.php";

    try {
        // Utilisation du proxy AllOrigins pour contourner CORS
        const proxyURL = "https://api.allorigins.win/raw?url=" + encodeURIComponent(phpURL);
        const response = await fetch(proxyURL);
        const text = await response.text();
        console.log("Visite enregistrée :", text);
    } catch (err) {
        console.error("Erreur lors de l'enregistrement :", err);
    }
}

// Déclenche au chargement de la page
logVisit();