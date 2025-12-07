// Hero Section Metin Animasyonu
document.addEventListener('DOMContentLoaded', () => {
    // DOM yüklendiğinde
    const title = document.getElementById('animated-title');
    const subtitle = document.getElementById('animated-subtitle');
    
    // Animasyonu tetikleyecek class'ı oluşturuyoruz
    if (title && subtitle) {
        setTimeout(() => {
            title.style.opacity = '1';
            title.style.transform = 'translateY(0)';
            
            subtitle.style.opacity = '1';
            subtitle.style.transform = 'translateY(0)';
        }, 100); // Küçük bir gecikme tarayıcıların CSS'i tanıması için iyidir
    }
});

// Mobile Menu (Class Toggle Kullanımı)
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Proje Verisi (Kendi projelerinizi buraya ekleyin)
let projects = [
    { 
        title: "E-Commerce Platform Backend", 
        link: "https://github.com/yaren-yesiltepe/ecommerce-backend", 
        description: "Developed a scalable RESTful API using Python/Django, focusing on user authentication and order processing.",
        imageUrl: "https://via.placeholder.com/400x200/0078ff/FFFFFF?text=Backend+API" // Yer tutucu resim
    },
    { 
        title: "Data Visualization Dashboard", 
        link: "https://github.com/yaren-yesiltepe/dashboard-project", 
        description: "Interactive dashboard built with JavaScript and D3.js to visualize large datasets for business intelligence.",
        imageUrl: "https://via.placeholder.com/400x200/00c6ff/FFFFFF?text=D3.js+Dashboard" // Yer tutucu resim
    }
];

function displayProjects() {
    const container = document.getElementById("project-list");
    container.innerHTML = ""; 

    projects.forEach(p => {
        const projectHTML = `
            <div class="project-item">
                <img src="${p.imageUrl}" alt="${p.title} Screenshot" onerror="this.onerror=null;this.src='https://via.placeholder.com/400x180/808080/FFFFFF?text=No+Image'">
                
                <div class="project-content">
                    <h4>${p.title}</h4>
                    <p>${p.description || 'No description provided.'}</p>
                    <a href="${p.link}" target="_blank">View Project / GitHub →</a>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', projectHTML); 
    });
}

displayProjects();

function addProject() {
    const title = document.getElementById("project-title").value.trim();
    const link = document.getElementById("project-link").value.trim();
    const imageUrl = document.getElementById("project-image-url").value.trim(); 

    if (title === "" || link === "" || imageUrl === "") {
        alert("Please fill in the Project Name, Image URL, and GitHub Link!");
        return;
    }

    // Açıklama alanı prompt ile soruluyor
    const description = prompt("Enter a short description for this project:");
    
    // Yeni projeyi diziye ekle
    projects.push({ title, link, description, imageUrl }); 
    
    displayProjects();

    // Formu temizle
    document.getElementById("project-title").value = "";
    document.getElementById("project-image-url").value = "";
    document.getElementById("project-link").value = "";
}

// ========== YENİ: Profil Fotoğrafı Modal İşlevselliği ==========

const modal = document.getElementById("image-modal");
const img = document.getElementById("profile-avatar");
const modalImg = document.getElementById("img01");

if (img && modal && modalImg) {
    // Resme tıklandığında modalı aç
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src; // Tıklanan resmin src'sini moda'a aktar
    }

    // Kapatma butonuna tıklandığında modalı kapat
    const span = document.getElementsByClassName("close-btn")[0];
    if (span) {
        span.onclick = function() { 
            modal.style.display = "none";
        }
    }

    // Modal dışına tıklandığında modalı kapat
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}