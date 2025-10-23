
        // Crear corazones flotantes
        function createHeart() {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = '❤️';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 6000);
        }

        setInterval(createHeart, 800);

        // Countdown desde cuando empezaron a hablar (ajusta la fecha)
        function updateCountdown() {
            const startDate = new Date('2023-04-23'); // CAMBIA ESTA FECHA
            const now = new Date();
            const diff = now - startDate;
            
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            
            document.getElementById('days').textContent = days;
            document.getElementById('hours').textContent = hours;
            document.getElementById('minutes').textContent = minutes;
            document.getElementById('seconds').textContent = seconds;
        }

        updateCountdown();
        setInterval(updateCountdown, 60000);

        function showReasons() {
            const section = document.getElementById('reasonsSection');
            section.classList.remove('hidden');
            event.target.style.display = 'none';
        }

        function saveWish() {
            const wish = document.getElementById('wishInput').value;
            if (wish.trim()) {
                document.getElementById('wishSaved').classList.remove('hidden');
                document.getElementById('wishInput').disabled = true;
            }
        }

        function blowCandle() {
            document.getElementById('candleMessage').classList.remove('hidden');
            event.target.style.display = 'none';
            createFireworks();
        }

        function createFireworks() {
            for (let i = 0; i < 50; i++) {
                setTimeout(() => {
                    const firework = document.createElement('div');
                    firework.className = 'firework';
                    firework.style.left = Math.random() * 100 + '%';
                    firework.style.top = Math.random() * 100 + '%';
                    firework.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
                    document.body.appendChild(firework);
                    
                    const angle = Math.random() * Math.PI * 2;
                    const velocity = Math.random() * 200 + 100;
                    const vx = Math.cos(angle) * velocity;
                    const vy = Math.sin(angle) * velocity;
                    
                    let x = 0, y = 0;
                    const animation = setInterval(() => {
                        x += vx * 0.01;
                        y += vy * 0.01;
                        firework.style.transform = `translate(${x}px, ${y}px)`;
                        firework.style.opacity = parseFloat(firework.style.opacity || 1) - 0.02;
                        
                        if (parseFloat(firework.style.opacity) <= 0) {
                            clearInterval(animation);
                            firework.remove();
                        }
                    }, 20);
                }, i * 50);
            }
        }

        // Galería de fotos
        const photos = [
            '/assets/img1.jpeg', // Agrega aquí las URLs de tus fotos
            '/assets/img2.jpeg',
            '/assets/img3.jpeg',
            '/assets/img4.jpeg',
            '/assets/img5.jpeg',
            '/assets/img6.jpeg'
        ];

        function openModal(index) {
            if (photos[index]) {
                document.getElementById('modalImage').src = photos[index];
                document.getElementById('photoModal').classList.add('active');
            }
        }

        function closeModal() {
            document.getElementById('photoModal').classList.remove('active');
        }

        // Cerrar modal al hacer clic fuera de la imagen
        document.getElementById('photoModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
