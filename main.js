// main.js

// --- 1. Fungsionalitas Hamburger Menu ---
let menuIconI = document.querySelector('.menu-icon i'); 
let navbar = document.querySelector('.navbar');

menuIconI.onclick = () => {
    // Toggle class 'bx-x' pada ikon
    menuIconI.classList.toggle('bx-x'); 
    
    // Toggle class 'active' pada navbar untuk menampilkannya
    navbar.classList.toggle('active'); 
};


// --- 2. Dark/Light Mode Switcher ---
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    // Toggle class 'light-mode' pada body
    document.body.classList.toggle('light-mode');
    
    // Mengubah ikon (dari matahari ke bulan atau sebaliknya)
    if (document.body.classList.contains('light-mode')) {
        // Jika mode terang aktif, ubah ikon menjadi bulan
        darkModeIcon.classList.remove('bx-sun');
        darkModeIcon.classList.add('bx-moon');
    } else {
        // Jika mode gelap aktif, ubah ikon menjadi matahari
        darkModeIcon.classList.remove('bx-moon');
        darkModeIcon.classList.add('bx-sun');
    }
};


// --- 3. Active Link, Sticky Header, dan Scroll Animation ---
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar a');
let header = document.querySelector('.header');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150; 
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        // A. Mengubah active link
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            document.querySelector('.navbar a[href*=' + id + ']').classList.add('active');
            
            // B. Menerapkan Scroll Reveal Animation
            sec.classList.add('animate');

        } else {
            // C. Hapus kelas animasi saat section keluar dari viewport (untuk reset)
            sec.classList.remove('animate');
        }
    });

    // D. Sticky Header dan menutup menu
    header.classList.toggle('scrolled', top > 100);
    menuIconI.classList.remove('bx-x');
    navbar.classList.remove('active');
};

window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');

    // Menambahkan jeda waktu singkat sebelum menghilang
    setTimeout(() => {
        preloader.style.opacity = '0'; // Atur opasitas ke 0 untuk fade-out
        
        // Setelah transisi fade-out selesai, baru disembunyikan
        preloader.addEventListener('transitionend', function() {
            preloader.style.display = 'none';
            content.style.display = 'block';
        });

    }, 500); 
});