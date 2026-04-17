/* ========================================
   BOOKING SYSTEM - WHATSAPP INTEGRATION
   نظام الحجز المتكامل مع واتساب
======================================== */

const bookingForm = document.getElementById('bookingForm');
const WHATSAPP_NUMBER = '442031498727'; // رقم واتساب المقهى

// ========== معالجة نموذج الحجز ==========
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // جمع البيانات من النموذج
        const formData = {
            name: document.getElementById('name').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            email: document.getElementById('email').value.trim(),
            date: document.getElementById('date').value,
            time: document.getElementById('time').value,
            guests: document.getElementById('guests').value,
            location: document.getElementById('location').value,
            notes: document.getElementById('notes').value.trim()
        };
        
        // التحقق من صحة البيانات
        if (!validateBookingData(formData)) {
            return;
        }
        
        // إنشاء رسالة WhatsApp
        const message = createWhatsAppMessage(formData);
        
        // إرسال عبر WhatsApp
        sendToWhatsApp(message);
        
        // إعادة تعيين النموذج
        bookingForm.reset();
        
        // عرض رسالة نجاح
        showBookingConfirmation(formData);
    });
}

// ========== التحقق من صحة البيانات ==========
function validateBookingData(data) {
    // التحقق من الاسم
    if (data.name.length < 2) {
        showNotification('Please enter a valid name', 'error');
        document.getElementById('name').focus();
        return false;
    }
    
    // التحقق من رقم الهاتف
    const phoneRegex = /^[\d\s\+\-\(\)]+$/;
    if (!phoneRegex.test(data.phone) || data.phone.length < 10) {
        showNotification('Please enter a valid phone number', 'error');
        document.getElementById('phone').focus();
        return false;
    }
    
    // التحقق من البريد الإلكتروني
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showNotification('Please enter a valid email address', 'error');
        document.getElementById('email').focus();
        return false;
    }
    
    // التحقق من التاريخ (لا يمكن الحجز في الماضي)
    const selectedDate = new Date(data.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
        showNotification('Please select a future date', 'error');
        document.getElementById('date').focus();
        return false;
    }
    
    // التحقق من الوقت
    if (!data.time) {
        showNotification('Please select a time', 'error');
        document.getElementById('time').focus();
        return false;
    }
    
    return true;
}

// ========== إنشاء رسالة WhatsApp منسقة ==========
function createWhatsAppMessage(data) {
    // تنسيق التاريخ
    const dateObj = new Date(data.date);
    const formattedDate = dateObj.toLocaleDateString('en-GB', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // تنسيق الوقت
    const formattedTime = formatTime(data.time);
    
    // اسم الموقع
    const locationName = data.location === 'redbridge' ? 'Redbridge' : 'Shoreditch';
    
    // بناء الرسالة
    let message = `🎨 *NEW BOOKING REQUEST*\n`;
    message += `━━━━━━━━━━━━━━━━━━\n\n`;
    message += `👤 *Customer Details:*\n`;
    message += `• Name: ${data.name}\n`;
    message += `• Phone: ${data.phone}\n`;
    message += `• Email: ${data.email}\n\n`;
    message += `📅 *Booking Details:*\n`;
    message += `• Date: ${formattedDate}\n`;
    message += `• Time: ${formattedTime}\n`;
    message += `• Guests: ${data.guests}\n`;
    message += `• Location: ${locationName}\n\n`;
    
    if (data.notes) {
        message += `📝 *Special Requests:*\n`;
        message += `${data.notes}\n\n`;
    }
    
    message += `━━━━━━━━━━━━━━━━━━\n`;
    message += `⏰ Sent: ${new Date().toLocaleString('en-GB')}\n`;
    message += `🌐 Source: Website Booking Form`;
    
    return message;
}

// ========== تنسيق الوقت ==========
function formatTime(time) {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : (hour === 0 ? 12 : hour);
    return `${displayHour}:${minutes} ${ampm}`;
}

// ========== إرسال إلى WhatsApp ==========
function sendToWhatsApp(message) {
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // فتح WhatsApp في نافذة جديدة
    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
}

// ========== عرض رسالة التأكيد ==========
function showBookingConfirmation(data) {
    const modal = document.createElement('div');
    modal.classList.add('booking-modal');
    modal.innerHTML = `
        <div class="booking-modal__content">
            <div class="booking-modal__header">
                <i class="fas fa-check-circle"></i>
                <h2>Booking Request Sent!</h2>
            </div>
            <div class="booking-modal__body">
                <p>Thank you, <strong>${data.name}</strong>!</p>
                <p>Your booking request has been sent via WhatsApp.</p>
                <div class="booking-summary">
                    <h3>Booking Summary:</h3>
                    <ul>
                        <li><i class="fas fa-calendar"></i> ${new Date(data.date).toLocaleDateString('en-GB')}</li>
                        <li><i class="fas fa-clock"></i> ${formatTime(data.time)}</li>
                        <li><i class="fas fa-users"></i> ${data.guests} ${data.guests === '1' ? 'Person' : 'People'}</li>
                        <li><i class="fas fa-map-marker-alt"></i> ${data.location === 'redbridge' ? 'Redbridge' : 'Shoreditch'}</li>
                    </ul>
                </div>
                <p class="booking-note">
                    <i class="fas fa-info-circle"></i>
                    We'll confirm your booking within 30 minutes during business hours.
                </p>
            </div>
            <div class="booking-modal__footer">
                <button class="button button-primary" onclick="this.closest('.booking-modal').remove()">
                    Got it, thanks!
                </button>
            </div>
        </div>
    `;
    
    // إضافة CSS للـ modal
    if (!document.getElementById('booking-modal-style')) {
        const modalStyle = document.createElement('style');
        modalStyle.id = 'booking-modal-style';
        modalStyle.textContent = `
            .booking-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
                animation: fadeIn 0.3s ease;
                padding: 1rem;
            }
            
            .booking-modal__content {
                background-color: white;
                border-radius: 16px;
                max-width: 500px;
                width: 100%;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                animation: slideUp 0.4s ease;
                overflow: hidden;
            }
            
            .booking-modal__header {
                background: linear-gradient(135deg, #8B6F47 0%, #D4A574 100%);
                color: white;
                padding: 2rem;
                text-align: center;
            }
            
            .booking-modal__header i {
                font-size: 4rem;
                margin-bottom: 1rem;
                animation: scaleIn 0.6s ease;
            }
            
            .booking-modal__header h2 {
                color: white;
                font-size: 1.75rem;
                margin: 0;
            }
            
            .booking-modal__body {
                padding: 2rem;
            }
            
            .booking-modal__body > p {
                text-align: center;
                margin-bottom: 1.5rem;
            }
            
            .booking-summary {
                background-color: #F8F9FA;
                padding: 1.5rem;
                border-radius: 12px;
                margin-bottom: 1.5rem;
            }
            
            .booking-summary h3 {
                font-size: 1.125rem;
                margin-bottom: 1rem;
                color: #8B6F47;
            }
            
            .booking-summary ul {
                list-style: none;
                padding: 0;
            }
            
            .booking-summary li {
                display: flex;
                align-items: center;
                gap: 0.75rem;
                margin-bottom: 0.75rem;
                color: #343A40;
            }
            
            .booking-summary i {
                color: #8B6F47;
                width: 20px;
            }
            
            .booking-note {
                display: flex;
                align-items: flex-start;
                gap: 0.75rem;
                padding: 1rem;
                background-color: #FFF3CD;
                border-left: 4px solid #FFC107;
                border-radius: 8px;
                font-size: 0.875rem;
                color: #856404;
            }
            
            .booking-note i {
                flex-shrink: 0;
                margin-top: 0.125rem;
            }
            
            .booking-modal__footer {
                padding: 1.5rem 2rem;
                background-color: #F8F9FA;
                text-align: center;
            }
            
            @keyframes slideUp {
                from {
                    transform: translateY(100px);
                    opacity: 0;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }
            
            @keyframes scaleIn {
                0% {
                    transform: scale(0);
                }
                50% {
                    transform: scale(1.2);
                }
                100% {
                    transform: scale(1);
                }
            }
            
            @media screen and (max-width: 768px) {
                .booking-modal__content {
                    max-width: 100%;
                    margin: 1rem;
                }
                
                .booking-modal__header {
                    padding: 1.5rem;
                }
                
                .booking-modal__header i {
                    font-size: 3rem;
                }
                
                .booking-modal__header h2 {
                    font-size: 1.5rem;
                }
            }
        `;
        document.head.appendChild(modalStyle);
    }
    
    document.body.appendChild(modal);
    
    // إغلاق عند الضغط على الخلفية
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// ========== تحديث الوقت المتاح بناءً على التاريخ ==========
const dateInput = document.getElementById('date');
const timeSelect = document.getElementById('time');

if (dateInput && timeSelect) {
    dateInput.addEventListener('change', function() {
        const selectedDate = new Date(this.value);
        const today = new Date();
        const isToday = selectedDate.toDateString() === today.toDateString();
        
        if (isToday) {
            // تعطيل الأوقات الماضية لليوم الحالي
            const currentHour = today.getHours();
            const options = timeSelect.querySelectorAll('option');
            
            options.forEach(option => {
                if (option.value) {
                    const optionHour = parseInt(option.value.split(':')[0]);
                    option.disabled = optionHour <= currentHour;
                }
            });
        } else {
            // تفعيل جميع الأوقات للأيام القادمة
            timeSelect.querySelectorAll('option').forEach(option => {
                option.disabled = false;
            });
        }
    });
}

// ========== معاينة الحجز قبل الإرسال ==========
const formInputs = document.querySelectorAll('#bookingForm input, #bookingForm select, #bookingForm textarea');

formInputs.forEach(input => {
    input.addEventListener('blur', function() {
        validateInput(this);
    });
});

function validateInput(input) {
    const value = input.value.trim();
    const parent = input.closest('.form-group');
    
    // إزالة رسائل الخطأ السابقة
    const existingError = parent.querySelector('.input-error');
    if (existingError) {
        existingError.remove();
    }
    
    let error = null;
    
    switch(input.id) {
        case 'name':
            if (value.length < 2) {
                error = 'Name must be at least 2 characters';
            }
            break;
        case 'phone':
            if (!/^[\d\s\+\-\(\)]+$/.test(value) || value.length < 10) {
                error = 'Please enter a valid phone number';
            }
            break;
        case 'email':
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                error = 'Please enter a valid email';
            }
            break;
    }
    
    if (error) {
        const errorMsg = document.createElement('span');
        errorMsg.classList.add('input-error');
        errorMsg.textContent = error;
        errorMsg.style.cssText = `
            display: block;
            color: #DC3545;
            font-size: 0.875rem;
            margin-top: 0.25rem;
        `;
        parent.appendChild(errorMsg);
        input.style.borderColor = '#DC3545';
    } else {
        input.style.borderColor = '';
    }
}

// ========== حفظ البيانات في localStorage (للاسترجاع في حالة الإغلاق الخاطئ) ==========
if (bookingForm) {
    formInputs.forEach(input => {
        // استرجاع البيانات المحفوظة
        const savedValue = localStorage.getItem(`booking_${input.id}`);
        if (savedValue && input.id !== 'date' && input.id !== 'time') {
            input.value = savedValue;
        }
        
        // حفظ البيانات عند التغيير
        input.addEventListener('input', function() {
            localStorage.setItem(`booking_${this.id}`, this.value);
        });
    });
    
    // مسح البيانات المحفوظة عند الإرسال الناجح
    bookingForm.addEventListener('submit', function() {
        formInputs.forEach(input => {
            localStorage.removeItem(`booking_${input.id}`);
        });
    });
}

console.log('✅ Booking system initialized');