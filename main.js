// main.js - PASTIKAN FILE INI BERADA DI FOLDER YANG SAMA

// --- 1. PRELOADER & SETUP UTAMA ---
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    
    // Pastikan preloader disembunyikan setelah 1.5 detik
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500); // Waktu transisi opacity
        }, 1500); // Tunda total 1.5 detik
    }
    
    // --- 2. TYPING EFFECT (Dipanggil setelah load) ---
    const typingText = document.querySelector('.typing-text');
    const typingText2 = document.querySelector('.typing-text-2');

    if (typingText) {
        new Typed(typingText, {
            strings: ["Frontend Developer", "Web Designer", "Programmer"],
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 1000,
            loop: true
        });
    }

    if (typingText2) {
        new Typed(typingText2, {
            strings: ["Frontend Developer", "Web Designer"],
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 1000,
            loop: true
        });
    }

    // --- 3. MODE SWITCHER ---
    const modeSwitcher = document.getElementById('mode-switcher');
    const body = document.body;
    
    modeSwitcher.addEventListener('click', () => {
        // Toggle dark-mode dan light-mode
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');

        // Ganti ikon
        if (body.classList.contains('light-mode')) {
            modeSwitcher.classList.replace('bx-moon', 'bx-sun');
        } else {
            modeSwitcher.classList.replace('bx-sun', 'bx-moon');
        }
    });

    // --- 4. MOBILE MENU TOGGLE ---
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        navbar.classList.toggle('active');
        menuIcon.classList.toggle('bx-x');
    };
});

// --- 5. SCROLL EFFECTS & SKILLS ANIMATION ---
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');
const header = document.querySelector('.header');

// Fungsi untuk menganimasikan skill bar
function animateSkillBars() {
    const skillProgresses = document.querySelectorAll('.skill-progress');
    skillProgresses.forEach(progress => {
        const targetWidth = progress.getAttribute('data-progress');
        progress.style.width = targetWidth;
    });
}

// Fungsi untuk mereset skill bar
function resetSkillBars() {
    const skillProgresses = document.querySelectorAll('.skill-progress');
    skillProgresses.forEach(progress => {
        progress.style.width = '0%';
    });
}


window.onscroll = () => {
    // Header Scroll Effect
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Section Active Link & Skills Animation
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; 
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Aktifkan link navbar
            navLinks.forEach(link => { link.classList.remove('active'); });
            document.querySelector('.navbar a[href*=' + id + ']').classList.add('active');
            
            // Khusus untuk SKILLS SECTION: Animasikan skill bar
            if (id === 'skills') {
                animateSkillBars();
            }
        } else {
             // Reset skill bar jika keluar dari section
             if (id === 'skills') {
                resetSkillBars();
            }
        }
    });

    // Sembunyikan menu mobile saat scroll
    const navbar = document.querySelector('.navbar');
    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        document.getElementById('menu-icon').classList.remove('bx-x');
    }
};

    function amon() {
  alert("Kenalan yuk sama aku, namaku Ryatsah Fatih Al Muntazhar atau biasa dipanggil Amon");
  let q = prompt("Nama kamu siapa?");
  if (q) {
    alert("Senang kenal kamu, " + q + "! Kalau mau kenal aku lebih jauh, bisa cek di bagian About Me ya!");
  
  }
}