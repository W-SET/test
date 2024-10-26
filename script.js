// Menambahkan efek parallax scaling saat scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionCenter = windowHeight / 2;
        const distance = Math.abs(sectionCenter - sectionTop);

        // Mengatur skala berdasarkan jarak dari tengah layar
        const scale = 1 - Math.min(distance / sectionCenter, 0.5);
        section.style.transform = `scale(${scale})`;
    });
});
