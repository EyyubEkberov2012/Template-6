document.addEventListener('DOMContentLoaded', () => {
    // Ses dosyasının yolu
    const sound = new Audio('sound/hhh.mp3');
    
    // Butona erişim
    const button = document.getElementById('playSound');
    
    // Butona tıklama olayını ekleyin
    button.addEventListener('click', (button) => {
        sound.play();  // Ses dosyasını çal
    });
});