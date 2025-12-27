document.addEventListener('DOMContentLoaded', function() {
    // Dynamic WhatsApp based on current page
    const whatsappBtn = document.getElementById('whatsapp-btn');
    let productName = 'JB Batteries';
    
    // Detect current page
    const currentPath = window.location.pathname;
    if (currentPath.includes('bike')) productName = 'Bike';
    else if (currentPath.includes('car')) productName = 'Car';
    else if (currentPath.includes('scooter')) productName = 'Scooter';
    else if (currentPath.includes('inverter')) productName = 'Inverter';
    else productName = 'products';
    
    const message = encodeURIComponent(`Hi JB Batteries, I'm interested in your ${productName} batteries. Please share details and pricing.`);
    whatsappBtn.href = `https://wa.me/919876543210?text=${message}`;
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // Close menu on link click
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // NAVBAR FUNCTIONALITY
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.querySelector('.navbar');

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    // Close menu on link click
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });

    // Navbar scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });

    // DYNAMIC WHATSAPP MESSAGING
    const whatsappBtn = document.getElementById('whatsapp-btn');
    if (whatsappBtn) {
        const currentPath = window.location.pathname;
        let productName = 'JB Batteries';
        
        if (currentPath.includes('bike')) productName = 'Bike Batteries';
        else if (currentPath.includes('car')) productName = 'Car Batteries';
        else if (currentPath.includes('scooter')) productName = 'Scooter Batteries';
        else if (currentPath.includes('inverter')) productName = 'Inverter Batteries';
        
        const message = encodeURIComponent(`Hi JB Batteries! I'm interested in your ${productName}. Please share pricing and availability.`);
        whatsappBtn.href = `https://wa.me/919876543210?text=${message}`;
    }

    // SMOOTH SCROLLING
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
