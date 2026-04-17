/* ========================================
   MULTI-LANGUAGE SYSTEM
   نظام تبديل اللغات (EN/FR/IT)
======================================== */

// ========== الترجمات ==========
const translations = {
    en: {
        // Navigation
        brand: "Artful Blend",
        nav_home: "Home",
        nav_about: "About",
        nav_menu: "Menu",
        nav_locations: "Locations",
        nav_gallery: "Gallery",
        nav_contact: "Contact",
        nav_booking: "Book Now",
        
        // Home Section
        home_subtitle: "Specialty Coffee Experience",
        home_title_1: "More than coffee",
        home_title_2: "it's an experience",
        home_description: "Discover artisan coffee and delicious brunch in the heart of London. From our signature Lavender Honey Latte to gourmet toasties.",
        btn_book: "Book Now",
        btn_menu: "View Menu",
        
        // About Section
        about_subtitle: "Our Story",
        about_title: "Crafting Artful Experiences",
        about_text_1: "Since 2021, Artful Blend has been serving London's finest specialty coffee with a creative twist. We believe coffee is an art form, and every cup tells a story.",
        about_text_2: "From our signature Lavender Honey Latte to innovative Biscoff Butterscotch Coffee, we blend tradition with creativity. Our commitment to quality extends beyond coffee to our carefully crafted food menu.",
        about_badge: "5★ Hygiene Rating",
        feature_1_title: "Specialty Coffee",
        feature_1_desc: "Artisan beans, expertly brewed",
        feature_2_title: "Vegan & GF Options",
        feature_2_desc: "Inclusive menu for everyone",
        feature_3_title: "Made with Love",
        feature_3_desc: "Every detail matters",
        
        // Menu Section
        menu_subtitle: "Our Selection",
        menu_title: "Signature Menu",
        tab_drinks: "Drinks",
        tab_food: "Food",
        tab_specials: "Specials",
        
        // Drinks
        drink_1_name: "Lavender Honey Latte",
        drink_1_desc: "Floral notes meet smooth espresso",
        drink_2_name: "Biscoff Butterscotch Coffee",
        drink_2_desc: "Indulgent sweetness in every sip",
        drink_3_name: "Ceremonial Matcha",
        drink_3_desc: "Premium Japanese green tea",
        drink_4_name: "Classic Flat White",
        drink_4_desc: "Velvety microfoam perfection",
        
        // Food
        food_1_name: "Smashed Avocado Toast",
        food_1_desc: "Sourdough, poached egg, chili flakes",
        food_2_name: "Smoked Salmon Bagel",
        food_2_desc: "Cream cheese, capers, red onion",
        food_3_name: "Truffle Mushroom Toastie",
        food_3_desc: "Wild mushrooms, truffle oil, cheese",
        food_4_name: "Pistachio Cinnamon Bun",
        food_4_desc: "Freshly baked, cream cheese frosting",
        
        // Specials
        special_1_title: "Weekend Brunch Deal",
        special_1_desc: "Any breakfast item + coffee for £10",
        special_2_title: "2 for 1 Pastries",
        special_2_desc: "Buy one pastry, get one free",
        
        // Booking Section
        booking_subtitle: "Reserve Your Spot",
        booking_title: "Book Your Visit",
        booking_info_title: "Why Book?",
        benefit_1: "Guaranteed seating",
        benefit_2: "Skip the queue",
        benefit_3: "Special occasion arrangements",
        benefit_4: "Group bookings welcome",
        booking_note: "Your booking details will be sent directly to us via WhatsApp. We'll confirm within 30 minutes during business hours.",
        
        // Form Labels
        form_name: "Full Name",
        form_name_placeholder: "Enter your name",
        form_phone: "Phone Number",
        form_phone_placeholder: "+44 XXX XXX XXXX",
        form_email: "Email",
        form_email_placeholder: "your.email@example.com",
        form_date: "Date",
        form_time: "Time",
        form_guests: "Number of Guests",
        form_location: "Location",
        form_notes: "Special Requests (Optional)",
        form_notes_placeholder: "Dietary requirements, special occasion, etc.",
        btn_submit: "Send Booking via WhatsApp",
        btn_send: "Send Message",
        
        // Locations
        locations_subtitle: "Visit Us",
        locations_title: "Our Locations",
        hours_weekday: "Mon-Fri: 8:00 AM - 4:00 PM",
        hours_weekend: "Sat-Sun: 9:00 AM - 4:00 PM",
        btn_directions: "Get Directions",
        
        // Gallery
        gallery_subtitle: "Instagram",
        gallery_title: "The Artful Experience",
        
        // Contact
        contact_subtitle: "Get in Touch",
        contact_title: "Contact Us",
        contact_info_title: "Let's Connect",
        contact_info_text: "Have questions? Want to host an event? Or just want to say hi? We'd love to hear from you!",
        contact_phone: "Phone",
        contact_subject_placeholder: "Subject",
        contact_message_placeholder: "Your message...",
        
        // Footer
        footer_desc: "Crafting exceptional coffee experiences in London since 2021.",
        footer_quick_links: "Quick Links",
        footer_hours: "Opening Hours",
        hours_mon_fri: "Monday - Friday",
        hours_sat_sun: "Saturday - Sunday",
        footer_newsletter: "Newsletter",
        footer_newsletter_text: "Get updates on special offers",
        footer_email_placeholder: "Your email",
        footer_rights: "All rights reserved.",
        footer_hygiene: "5★ Hygiene Rating"
    },
    
    fr: {
        // Navigation
        brand: "Artful Blend",
        nav_home: "Accueil",
        nav_about: "À Propos",
        nav_menu: "Menu",
        nav_locations: "Emplacements",
        nav_gallery: "Galerie",
        nav_contact: "Contact",
        nav_booking: "Réserver",
        
        // Home Section
        home_subtitle: "Expérience Café Spécialisé",
        home_title_1: "Plus qu'un café",
        home_title_2: "c'est une expérience",
        home_description: "Découvrez du café artisanal et un délicieux brunch au cœur de Londres. De notre signature Lavande Miel Latte aux toasts gastronomiques.",
        btn_book: "Réserver",
        btn_menu: "Voir le Menu",
        
        // About Section
        about_subtitle: "Notre Histoire",
        about_title: "Créer des Expériences Artistiques",
        about_text_1: "Depuis 2021, Artful Blend sert le meilleur café spécialisé de Londres avec une touche créative. Nous croyons que le café est une forme d'art et chaque tasse raconte une histoire.",
        about_text_2: "De notre signature Lavande Miel Latte au café innovant Biscoff Caramel, nous mélangeons tradition et créativité. Notre engagement envers la qualité s'étend au-delà du café à notre menu alimentaire soigneusement élaboré.",
        about_badge: "Note d'Hygiène 5★",
        feature_1_title: "Café Spécialisé",
        feature_1_desc: "Grains artisanaux, expertement préparés",
        feature_2_title: "Options Véganes & Sans Gluten",
        feature_2_desc: "Menu inclusif pour tous",
        feature_3_title: "Fait avec Amour",
        feature_3_desc: "Chaque détail compte",
        
        // Menu Section
        menu_subtitle: "Notre Sélection",
        menu_title: "Menu Signature",
        tab_drinks: "Boissons",
        tab_food: "Nourriture",
        tab_specials: "Spécialités",
        
        // Drinks
        drink_1_name: "Latte Miel Lavande",
        drink_1_desc: "Notes florales rencontrent l'espresso onctueux",
        drink_2_name: "Café Caramel Biscoff",
        drink_2_desc: "Douceur indulgente à chaque gorgée",
        drink_3_name: "Matcha Cérémoniel",
        drink_3_desc: "Thé vert japonais premium",
        drink_4_name: "Flat White Classique",
        drink_4_desc: "Perfection de micromousse veloutée",
        
        // Food
        food_1_name: "Toast Avocat Écrasé",
        food_1_desc: "Pain au levain, œuf poché, flocons de piment",
        food_2_name: "Bagel Saumon Fumé",
        food_2_desc: "Fromage à la crème, câpres, oignon rouge",
        food_3_name: "Croque Champignons Truffe",
        food_3_desc: "Champignons sauvages, huile de truffe, fromage",
        food_4_name: "Roulé Cannelle Pistache",
        food_4_desc: "Fraîchement cuit, glaçage fromage à la crème",
        
        // Specials
        special_1_title: "Offre Brunch Week-end",
        special_1_desc: "N'importe quel petit-déjeuner + café pour £10",
        special_2_title: "2 pour 1 Pâtisseries",
        special_2_desc: "Achetez une pâtisserie, obtenez-en une gratuite",
        
        // Booking Section
        booking_subtitle: "Réservez Votre Place",
        booking_title: "Réservez Votre Visite",
        booking_info_title: "Pourquoi Réserver?",
        benefit_1: "Places garanties",
        benefit_2: "Évitez la file d'attente",
        benefit_3: "Arrangements pour occasions spéciales",
        benefit_4: "Réservations de groupe bienvenues",
        booking_note: "Vos détails de réservation seront envoyés directement via WhatsApp. Nous confirmerons dans les 30 minutes pendant les heures d'ouverture.",
        
        // Form Labels
        form_name: "Nom Complet",
        form_name_placeholder: "Entrez votre nom",
        form_phone: "Numéro de Téléphone",
        form_phone_placeholder: "+44 XXX XXX XXXX",
        form_email: "Email",
        form_email_placeholder: "votre.email@exemple.com",
        form_date: "Date",
        form_time: "Heure",
        form_guests: "Nombre d'Invités",
        form_location: "Emplacement",
        form_notes: "Demandes Spéciales (Optionnel)",
        form_notes_placeholder: "Exigences alimentaires, occasion spéciale, etc.",
        btn_submit: "Envoyer la Réservation via WhatsApp",
        btn_send: "Envoyer le Message",
        
        // Locations
        locations_subtitle: "Visitez-Nous",
        locations_title: "Nos Emplacements",
        hours_weekday: "Lun-Ven: 8h00 - 16h00",
        hours_weekend: "Sam-Dim: 9h00 - 16h00",
        btn_directions: "Obtenir l'Itinéraire",
        
        // Gallery
        gallery_subtitle: "Instagram",
        gallery_title: "L'Expérience Artistique",
        
        // Contact
        contact_subtitle: "Contactez-Nous",
        contact_title: "Nous Contacter",
        contact_info_title: "Restons Connectés",
        contact_info_text: "Des questions? Vous souhaitez organiser un événement? Ou juste dire bonjour? Nous aimerions avoir de vos nouvelles!",
        contact_phone: "Téléphone",
        contact_subject_placeholder: "Sujet",
        contact_message_placeholder: "Votre message...",
        
        // Footer
        footer_desc: "Créer des expériences café exceptionnelles à Londres depuis 2021.",
        footer_quick_links: "Liens Rapides",
        footer_hours: "Heures d'Ouverture",
        hours_mon_fri: "Lundi - Vendredi",
        hours_sat_sun: "Samedi - Dimanche",
        footer_newsletter: "Newsletter",
        footer_newsletter_text: "Recevez les mises à jour des offres spéciales",
        footer_email_placeholder: "Votre email",
        footer_rights: "Tous droits réservés.",
        footer_hygiene: "Note d'Hygiène 5★"
    },
    
    it: {
        // Navigation
        brand: "Artful Blend",
        nav_home: "Home",
        nav_about: "Chi Siamo",
        nav_menu: "Menu",
        nav_locations: "Sedi",
        nav_gallery: "Galleria",
        nav_contact: "Contatti",
        nav_booking: "Prenota",
        
        // Home Section
        home_subtitle: "Esperienza Caffè Speciale",
        home_title_1: "Più di un caffè",
        home_title_2: "è un'esperienza",
        home_description: "Scopri caffè artigianale e delizioso brunch nel cuore di Londra. Dal nostro signature Lavanda Miele Latte ai toast gourmet.",
        btn_book: "Prenota Ora",
        btn_menu: "Vedi Menu",
        
        // About Section
        about_subtitle: "La Nostra Storia",
        about_title: "Creare Esperienze Artistiche",
        about_text_1: "Dal 2021, Artful Blend serve il miglior caffè speciale di Londra con un tocco creativo. Crediamo che il caffè sia una forma d'arte e ogni tazza racconta una storia.",
        about_text_2: "Dal nostro signature Lavanda Miele Latte all'innovativo Caffè Biscoff Caramello, mescoliamo tradizione e creatività. Il nostro impegno per la qualità si estende oltre il caffè al nostro menu alimentare accuratamente elaborato.",
        about_badge: "Valutazione Igiene 5★",
        feature_1_title: "Caffè Speciale",
        feature_1_desc: "Chicchi artigianali, preparati da esperti",
        feature_2_title: "Opzioni Vegane e Senza Glutine",
        feature_2_desc: "Menu inclusivo per tutti",
        feature_3_title: "Fatto con Amore",
        feature_3_desc: "Ogni dettaglio conta",
        
        // Menu Section
        menu_subtitle: "La Nostra Selezione",
        menu_title: "Menu Signature",
        tab_drinks: "Bevande",
        tab_food: "Cibo",
        tab_specials: "Specialità",
        
        // Drinks
        drink_1_name: "Latte Miele Lavanda",
        drink_1_desc: "Note floreali incontrano espresso morbido",
        drink_2_name: "Caffè Caramello Biscoff",
        drink_2_desc: "Dolcezza indulgente in ogni sorso",
        drink_3_name: "Matcha Cerimoniale",
        drink_3_desc: "Tè verde giapponese premium",
        drink_4_name: "Flat White Classico",
        drink_4_desc: "Perfezione di microschuma vellutata",
        
        // Food
        food_1_name: "Toast Avocado Schiacciato",
        food_1_desc: "Pane a lievitazione naturale, uovo in camicia, peperoncino",
        food_2_name: "Bagel Salmone Affumicato",
        food_2_desc: "Formaggio spalmabile, capperi, cipolla rossa",
        food_3_name: "Toast Funghi Tartufo",
        food_3_desc: "Funghi selvatici, olio di tartufo, formaggio",
        food_4_name: "Girella Cannella Pistacchio",
        food_4_desc: "Appena sfornato, glassa formaggio spalmabile",
        
        // Specials
        special_1_title: "Offerta Brunch Weekend",
        special_1_desc: "Qualsiasi colazione + caffè a £10",
        special_2_title: "2 per 1 Pasticceria",
        special_2_desc: "Compra una pasticceria, ottieni una gratis",
        
        // Booking Section
        booking_subtitle: "Prenota il Tuo Posto",
        booking_title: "Prenota la Tua Visita",
        booking_info_title: "Perché Prenotare?",
        benefit_1: "Posti garantiti",
        benefit_2: "Salta la coda",
        benefit_3: "Accordi per occasioni speciali",
        benefit_4: "Prenotazioni di gruppo benvenute",
        booking_note: "I dettagli della prenotazione saranno inviati direttamente tramite WhatsApp. Confermeremo entro 30 minuti durante l'orario di apertura.",
        
        // Form Labels
        form_name: "Nome Completo",
        form_name_placeholder: "Inserisci il tuo nome",
        form_phone: "Numero di Telefono",
        form_phone_placeholder: "+44 XXX XXX XXXX",
        form_email: "Email",
        form_email_placeholder: "tua.email@esempio.com",
        form_date: "Data",
        form_time: "Ora",
        form_guests: "Numero di Ospiti",
        form_location: "Sede",
        form_notes: "Richieste Speciali (Opzionale)",
        form_notes_placeholder: "Requisiti dietetici, occasione speciale, ecc.",
        btn_submit: "Invia Prenotazione via WhatsApp",
        btn_send: "Invia Messaggio",
        
        // Locations
        locations_subtitle: "Visitaci",
        locations_title: "Le Nostre Sedi",
        hours_weekday: "Lun-Ven: 8:00 - 16:00",
        hours_weekend: "Sab-Dom: 9:00 - 16:00",
        btn_directions: "Ottieni Indicazioni",
        
        // Gallery
        gallery_subtitle: "Instagram",
        gallery_title: "L'Esperienza Artistica",
        
        // Contact
        contact_subtitle: "Mettiamoci in Contatto",
        contact_title: "Contattaci",
        contact_info_title: "Rimaniamo Connessi",
        contact_info_text: "Hai domande? Vuoi organizzare un evento? O vuoi solo salutare? Ci piacerebbe sentirti!",
        contact_phone: "Telefono",
        contact_subject_placeholder: "Oggetto",
        contact_message_placeholder: "Il tuo messaggio...",
        
        // Footer
        footer_desc: "Creando esperienze caffè eccezionali a Londra dal 2021.",
        footer_quick_links: "Link Rapidi",
        footer_hours: "Orari di Apertura",
        hours_mon_fri: "Lunedì - Venerdì",
        hours_sat_sun: "Sabato - Domenica",
        footer_newsletter: "Newsletter",
        footer_newsletter_text: "Ricevi aggiornamenti su offerte speciali",
        footer_email_placeholder: "La tua email",
        footer_rights: "Tutti i diritti riservati.",
        footer_hygiene: "Valutazione Igiene 5★"
    }
};

// ========== اللغة الحالية ==========
let currentLanguage = localStorage.getItem('language') || 'en';

// ========== تطبيق اللغة ==========
function applyLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // تحديث جميع العناصر المترجمة
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // تحديث placeholders
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // تحديث اتجاه الصفحة (لو في لغات RTL في المستقبل)
    document.documentElement.setAttribute('lang', lang);
    
    // تحديث الأزرار النشطة
    updateLanguageButtons(lang);
    
    console.log(`Language changed to: ${lang.toUpperCase()}`);
}

// ========== تحديث أزرار اللغة ==========
function updateLanguageButtons(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
}

// ========== Event Listeners لأزرار اللغات ==========
document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');
        applyLanguage(lang);
        
        // تأثير بصري
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 100);
    });
});

// ========== تطبيق اللغة عند تحميل الصفحة ==========
document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLanguage);
});

// ========== كشف اللغة من المتصفح (اختياري) ==========
function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    
    if (browserLang.startsWith('fr')) {
        return 'fr';
    } else if (browserLang.startsWith('it')) {
        return 'it';
    }
    return 'en';
}

// استخدام لغة المتصفح إذا لم يكن هناك لغة محفوظة
if (!localStorage.getItem('language')) {
    const detectedLang = detectBrowserLanguage();
    applyLanguage(detectedLang);
}

console.log('🌍 Multi-language system initialized');