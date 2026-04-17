/* ========================================
   ARTFUL BLEND - MAIN JAVASCRIPT
   الوظائف الرئيسية للموقع
======================================== */

// ========== SHOW/HIDE MENU ==========
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// فتح القائمة
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// إغلاق القائمة
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// ========== إغلاق القائمة عند الضغط على أي رابط ==========
const navLinks = document.querySelectorAll('.nav__link');

function linkAction() {
    navMenu.classList.remove('show-menu');
}

navLinks.forEach(link => link.addEventListener('click', linkAction));

// ========== تغيير خلفية الهيدر عند التمرير ==========
function scrollHeader() {
    const header = document.getElementById('header');
    
    if (this.scrollY >= 80) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

// إضافة CSS للهيدر عند التمرير
const style = document.createElement('style');
style.textContent = `
    .scroll-header {
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    }
`;
document.head.appendChild(style);

// ========== ACTIVE LINK ON SCROLL ==========
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const link = document.querySelector(`.nav__link[href*="${sectionId}"]`);

        if (link) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                link.classList.add('active-link');
            } else {
                link.classList.remove('active-link');
            }
        }
    });
}

window.addEventListener('scroll', scrollActive);

// ========== MENU TABS SWITCHING ==========
const menuTabs = document.querySelectorAll('.menu__tab');
const menuContents = document.querySelectorAll('.menu__content');

menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-tab');
        
        // إزالة الكلاس النشط من جميع التبويبات
        menuTabs.forEach(t => t.classList.remove('active'));
        menuContents.forEach(c => c.classList.remove('active'));
        
        // إضافة الكلاس النشط للتبويب المحدد
        tab.classList.add('active');
        document.getElementById(target).classList.add('active');
    });
});

// ========== SCROLL TO TOP BUTTON ==========
const scrollTopBtn = document.getElementById('scrollTop');

function scrollTop() {
    if (this.scrollY >= 560) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
}

window.addEventListener('scroll', scrollTop);

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========== SMOOTH SCROLL FOR ALL LINKS ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerHeight = document.getElementById('header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========== GALLERY LIGHTBOX ==========
const galleryItems = document.querySelectorAll('.gallery__item');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.querySelector('img').src;
        
        // إنشاء lightbox
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        lightbox.innerHTML = `
            <div class="lightbox__content">
                <span class="lightbox__close">&times;</span>
                <img src="${imgSrc}" alt="Gallery Image">
                <a href="https://www.instagram.com/artfulblendlondon" target="_blank" class="lightbox__instagram">
                    <i class="fab fa-instagram"></i> View on Instagram
                </a>
            </div>
        `;
        
        document.body.appendChild(lightbox);
        
        // إضافة CSS للـ lightbox
        if (!document.getElementById('lightbox-style')) {
            const lightboxStyle = document.createElement('style');
            lightboxStyle.id = 'lightbox-style';
            lightboxStyle.textContent = `
                .lightbox {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.95);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 10000;
                    animation: fadeIn 0.3s ease;
                }
                
                .lightbox__content {
                    position: relative;
                    max-width: 90%;
                    max-height: 90%;
                    animation: zoomIn 0.3s ease;
                }
                
                .lightbox__content img {
                    max-width: 100%;
                    max-height: 80vh;
                    border-radius: 12px;
                    box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
                }
                
                .lightbox__close {
                    position: absolute;
                    top: -40px;
                    right: 0;
                    font-size: 40px;
                    color: white;
                    cursor: pointer;
                    transition: transform 0.3s ease;
                }
                
                .lightbox__close:hover {
                    transform: rotate(90deg);
                }
                
                .lightbox__instagram {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    margin-top: 1rem;
                    padding: 0.75rem 1.5rem;
                    background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
                    color: white;
                    border-radius: 50px;
                    font-weight: 600;
                    text-decoration: none;
                    transition: transform 0.3s ease;
                }
                
                .lightbox__instagram:hover {
                    transform: scale(1.05);
                }
                
                @keyframes zoomIn {
                    from {
                        transform: scale(0.5);
                        opacity: 0;
                    }
                    to {
                        transform: scale(1);
                        opacity: 1;
                    }
                }
            `;
            document.head.appendChild(lightboxStyle);
        }
        
        // إغلاق الـ lightbox
        const closeBtn = lightbox.querySelector('.lightbox__close');
        closeBtn.addEventListener('click', () => {
            lightbox.remove();
        });
        
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.remove();
            }
        });
        
        // إغلاق بالضغط على Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && document.querySelector('.lightbox')) {
                document.querySelector('.lightbox').remove();
            }
        });
    });
});

// ========== CONTACT FORM HANDLING ==========
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('contact_name');
        const email = formData.get('contact_email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // إنشاء رسالة WhatsApp
        const whatsappMessage = `
*New Contact Message from Website*

*Name:* ${name}
*Email:* ${email}
*Subject:* ${subject}

*Message:*
${message}
        `.trim();
        
        const phoneNumber = '442031498727'; // رقم WhatsApp
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        
        // فتح WhatsApp
        window.open(whatsappURL, '_blank');
        
        // إعادة تعيين النموذج
        contactForm.reset();
        
        // عرض رسالة نجاح
        showNotification('Message sent! We\'ll get back to you soon.', 'success');
    });
}

// ========== NEWSLETTER FORM ==========
const newsletterForm = document.querySelector('.footer__newsletter');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = newsletterForm.querySelector('input[type="email"]').value;
        
        // هنا يمكن إضافة integration مع خدمة email marketing
        console.log('Newsletter subscription:', email);
        
        showNotification('Thanks for subscribing!', 'success');
        newsletterForm.reset();
    });
}

// ========== NOTIFICATION SYSTEM ==========
function showNotification(message, type = 'info') {
    // إنشاء عنصر الإشعار
    const notification = document.createElement('div');
    notification.classList.add('notification', `notification--${type}`);
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
        <button class="notification__close">&times;</button>
    `;
    
    // إضافة CSS للإشعارات
    if (!document.getElementById('notification-style')) {
        const notificationStyle = document.createElement('style');
        notificationStyle.id = 'notification-style';
        notificationStyle.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                background-color: white;
                padding: 1rem 1.5rem;
                border-radius: 12px;
                box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
                display: flex;
                align-items: center;
                gap: 1rem;
                z-index: 10000;
                animation: slideIn 0.3s ease;
                max-width: 400px;
            }
            
            .notification--success {
                border-left: 4px solid #28A745;
            }
            
            .notification--error {
                border-left: 4px solid #DC3545;
            }
            
            .notification--info {
                border-left: 4px solid #8B6F47;
            }
            
            .notification i {
                font-size: 1.5rem;
            }
            
            .notification--success i {
                color: #28A745;
            }
            
            .notification--error i {
                color: #DC3545;
            }
            
            .notification--info i {
                color: #8B6F47;
            }
            
            .notification__close {
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: #6C757D;
                margin-left: auto;
            }
            
            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
            
            @media screen and (max-width: 768px) {
                .notification {
                    right: 10px;
                    left: 10px;
                    max-width: none;
                }
            }
        `;
        document.head.appendChild(notificationStyle);
    }
    
    document.body.appendChild(notification);
    
    // زر الإغلاق
    const closeBtn = notification.querySelector('.notification__close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });
    
    // إزالة تلقائية بعد 5 ثواني
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// ========== تعيين الحد الأدنى للتاريخ في نموذج الحجز ==========
const dateInput = document.getElementById('date');
if (dateInput) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const minDate = tomorrow.toISOString().split('T')[0];
    dateInput.setAttribute('min', minDate);
}

// ========== SCROLL ANIMATIONS ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// مراقبة العناصر للأنيميشن
document.querySelectorAll('.menu__item, .location__card, .gallery__item, .special__card').forEach(el => {
    observer.observe(el);
});

// إضافة CSS للأنيميشن
const animationStyle = document.createElement('style');
animationStyle.textContent = `
    .menu__item,
    .location__card,
    .gallery__item,
    .special__card {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .fade-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(animationStyle);

// ========== PRELOADER ==========
window.addEventListener('load', () => {
    const spinner = document.getElementById('loadingSpinner');
    if (spinner) {
        spinner.classList.remove('active');
    }
});

// ========== منع النقر بزر الماوس الأيمن على الصور (حماية بسيطة) ==========
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        showNotification('Image protection is enabled', 'info');
    });
});

// ========== PERFORMANCE: Lazy Loading للصور ==========
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========== إضافة تأثيرات hover على البطاقات ==========
document.querySelectorAll('.menu__item, .location__card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ========== Console Welcome Message ==========
console.log('%c🎨 Artful Blend London', 'font-size: 20px; font-weight: bold; color: #8B6F47;');
console.log('%cWebsite designed with ❤️', 'font-size: 12px; color: #6C757D;');
console.log('%cSpecialty Coffee Experience', 'font-size: 14px; color: #8B6F47;');

// ========== إحصائيات الأداء (للتطوير) ==========
if (window.performance) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`⚡ Page loaded in ${pageLoadTime}ms`);
        }, 0);
    });
}