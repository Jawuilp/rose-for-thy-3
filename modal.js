
(function() {

    // Crear el modal dinámicamente
    function createModal() {
        const modal = document.createElement('div');
        modal.id = 'dynamicModal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(8, 15, 26, 1);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        `;

        const modalContent = document.createElement('div');
        modalContent.style.cssText = `
            background-color: #122139;
            padding: 2rem;
            border-radius: 1rem;
            text-align: center;
            max-width: 90%;
            width: 400px;
        `;

        const title = document.createElement('h2');
        title.textContent = 'Bienvenida Thiany 🙂'
        title.style.cssText = `
            color: #d52d58;
            font-size: 1.5rem;
            margin-bottom: 1rem;
        `;

        const message = document.createElement('p');
        message.textContent = 'Por favor da click en el botón de continuar y si no eres Thiany puedes igual darle click y ver lo que prepare para ella, espero que te guste,lo he hecho con mucho❤ para ti ✨';
        message.style.cssText = `
            color: white;
            margin-bottom: 1.5rem;
        `;

        const button = document.createElement('button');
        button.textContent = 'Continuar';
        button.style.cssText = `
            background-color: #d52d58;
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            font-size: 1rem;
            border-radius: 0.5rem;
            cursor: pointer;
            transition: background-color 0.3s;
        `;
        button.onmouseover = () => button.style.backgroundColor = '#b81b43';
        button.onmouseout = () => button.style.backgroundColor = '#d52d58';
        button.onclick = closeModal;

        modalContent.appendChild(title);
        modalContent.appendChild(message);
        modalContent.appendChild(button);
        modal.appendChild(modalContent);

        document.body.appendChild(modal);

      
    }

    // Función para cerrar el modal
    function closeModal() {
        const modal = document.getElementById('dynamicModal');
        if (modal) {
            modal.style.opacity = '0';
            modal.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                document.body.removeChild(modal);
            }, 500);
        }
            audioElement.play();
            document.body.classList.remove('hidden');
    }

    const audioElement = document.getElementById('background-music');
    const tracks = ['musica1.mp3', 'musica2.mp3', 'musica3.mp3']; // Lista de pistas
    let currentTrack = 0;

    function changeTrack() {
        currentTrack = (currentTrack + 1) % tracks.length; // Cambia a la siguiente pista
        audioElement.src = tracks[currentTrack];
        audioElement.play();
    }

    audioElement.addEventListener('ended', changeTrack)

    // Crear y mostrar el modal cuando se carga la página
    window.addEventListener('load', createModal);
})();
