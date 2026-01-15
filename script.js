// ========== GLOBAL DEĞİŞKENLER VE AYARLAR ==========
let currentProjectImages = [];
let currentImageIndex = 0;

let projects = [
    {
        title: "Smart Task Manager",
        link: "https://github.com/yaren-yesiltepe/Smart-Task-Manager",
        description: "A feature-rich To-Do List app built with HTML, CSS, and JavaScript. Users can add, complete, and delete tasks.",
        imageUrls: ["projects/proje görseli1.png"]
    },
    {
        title: "Mini E-Commerce Product Catalog",
        link: "https://github.com/yaren-yesiltepe/mini-ecommerce-catalog.git",
        description: "An interactive product catalog built with HTML, CSS, and JavaScript featuring filtering, modals, and animated 'Add to Cart' buttons.",
        imageUrls: ["projects/ministoreImg.png"]
    },
    {
        title: "AI Career Advisor",
        link: "https://github.com/yaren-yesiltepe/ai-career-advisor.git",
        description: "AI Career Advisor – A web-based, AI-inspired career recommendation system that analyzes users’ interests and skills.",
        imageUrls: [
            "projects/ai-career-advisor1.png",
            "projects/ai-career-advisor2.png"
        ]
    },
        {
        title: "Smart Finance Tracker",
        link: "https://github.com/yaren-yesiltepe/smart-finance-tracker.git",
        description: "A web app to track income and expenses with charts and monthly prediction.",
        imageUrls: ["projects/smart-finance-tracker1.png"]
    },
];

// ========== DOM YÜKLENDİĞİNDE ÇALIŞACAKLAR ==========
document.addEventListener('DOMContentLoaded', () => {
    // 1. Hero Animasyonu
    const title = document.getElementById('animated-title');
    const subtitle = document.getElementById('animated-subtitle');
    if (title && subtitle) {
        setTimeout(() => {
            title.style.opacity = '1';
            title.style.transform = 'translateY(0)';
            subtitle.style.opacity = '1';
            subtitle.style.transform = 'translateY(0)';
        }, 100);
    }

    // 2. Projeleri Listele
    displayProjects();

    // 3. Sertifika İşlemleri (Hover ve Tıklama)
    setupCertificates();

    // 4. Profil Fotoğrafı Büyütme
    setupProfileAvatar();
});

// ========== MOBİL MENÜ ==========
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
if (toggle) {
    toggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}

// ========== PROJE FONKSİYONLARI ==========
function displayProjects() {
    const container = document.getElementById("project-list");
    if (!container) return;
    container.innerHTML = ""; 

    projects.forEach((p, index) => {
        // Kapak resmi olarak ilk resmi seçiyoruz
        const coverImg = (p.imageUrls && p.imageUrls.length > 0) ? p.imageUrls[0] : (p.imageUrl || "");
        
        const projectHTML = `
            <div class="project-item" onclick="openModal(${index})" style="cursor:pointer;">
                <div class="project-images">
                    <img src="${coverImg}" alt="${p.title}" class="project-img">
                </div>
                <div class="project-content">
                    <h4>${p.title}</h4>
                    <p>Click to see details →</p>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', projectHTML); 
    });
}

// ========== MODAL (PROJE DETAY) FONKSİYONLARI ==========
function openModal(index) {
    const p = projects[index];
    const modal = document.getElementById("project-modal");
    const modalImg = document.getElementById("modal-img");
    const controls = document.getElementById("modal-controls");

    document.getElementById("modal-title").innerText = p.title;
    document.getElementById("modal-desc").innerText = p.description || 'No description provided.';
    document.getElementById("modal-link").href = p.link;

    currentProjectImages = p.imageUrls || [p.imageUrl];
    currentImageIndex = 0;
    modalImg.src = currentProjectImages[currentImageIndex];

    controls.style.display = (currentProjectImages.length > 1) ? "flex" : "none";
    modal.style.display = "block";
}

function changeSlide(direction) {
    currentImageIndex = (currentImageIndex + direction + currentProjectImages.length) % currentProjectImages.length;
    document.getElementById("modal-img").src = currentProjectImages[currentImageIndex];
}

function closeModal() {
    document.getElementById("project-modal").style.display = "none";
}

// ========== SERTİFİKA VE PROFİL AYARLARI ==========
function setupCertificates() {
    const certificateItems = document.querySelectorAll(".certificate-item");
    const imageModal = document.getElementById("image-modal");
    const modalImg = document.getElementById("img01");

    // Tek bir önizleme resmi oluşturup body'ye ekliyoruz (Sola sabit olan)
    let globalPreview = document.querySelector('.hover-preview-img');
    if (!globalPreview) {
        globalPreview = document.createElement('img');
        globalPreview.className = 'hover-preview-img';
        document.body.appendChild(globalPreview);
    }

    certificateItems.forEach(item => {
        const imageUrl = item.getAttribute('data-image');
        
        // Üzerine gelince
        item.addEventListener('mouseenter', () => {
            if (imageUrl) {
                globalPreview.src = imageUrl;
                globalPreview.style.display = 'block';
            }
        });

        // Ayrılınca
        item.addEventListener('mouseleave', () => {
            globalPreview.style.display = 'none';
        });

        // Tıklayınca (Büyütmek için)
        item.addEventListener('click', () => {
            if (imageModal && modalImg) {
                imageModal.style.display = "block";
                modalImg.src = imageUrl;
            }
        });
    });
}

function setupProfileAvatar() {
    const profileImg = document.getElementById("profile-avatar");
    const imageModal = document.getElementById("image-modal");
    const modalImg = document.getElementById("img01");

    if (profileImg) {
        profileImg.onclick = function() {
            imageModal.style.display = "block";
            modalImg.src = this.src;
        }
    }
}

// ========== GENEL KAPATMA MANTIĞI ==========
window.onclick = function(event) {
    const projectModal = document.getElementById("project-modal");
    const imageModal = document.getElementById("image-modal");
    const closeBtn = document.querySelector(".close-btn");

    if (event.target == projectModal) {
        closeModal();
    }
    if (event.target == imageModal) {
        imageModal.style.display = "none";
    }
}

// Kapatma çarpı butonları için (Profil/Sertifika Modalı)
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('close-btn')) {
        const imageModal = document.getElementById("image-modal");
        if(imageModal) imageModal.style.display = "none";
    }
});


setTimeout(() => {
    const title = document.getElementById('animated-title');
    const subtitle = document.getElementById('animated-subtitle');
    
    if(title) {
        title.style.opacity = '1';
        title.style.transform = 'scale(1) translateY(0)';
    }
    if(subtitle) {
        subtitle.style.opacity = '1';
        subtitle.style.letterSpacing = '2px'; // Harfler birbirine yaklaşarak yerine oturur
    }
}, 400);
