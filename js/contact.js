// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const successModal = document.getElementById('successModal');
    const modalClose = document.querySelector('.modal-close');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('contactName').value,
                phone: document.getElementById('contactPhone').value,
                email: document.getElementById('contactEmail').value,
                subject: document.getElementById('contactSubject').value,
                message: document.getElementById('contactMessage').value
            };

            // Validate required fields
            if (!formData.name || !formData.phone || !formData.subject || !formData.message) {
                alert('Please fill all required fields');
                return;
            }

            // Create WhatsApp message
            const whatsappMessage = `*New Contact Form Submission*%0A%0A` +
                `Name: ${formData.name}%0A` +
                `Phone: ${formData.phone}%0A` +
                `Email: ${formData.email || 'Not provided'}%0A` +
                `Subject: ${formData.subject}%0A` +
                `Message: ${formData.message}`;

            // Send to WhatsApp
            window.open(`https://wa.me/919907579406?text=${whatsappMessage}`, '_blank');

            // Show success modal
            successModal.style.display = 'block';

            // Reset form
            contactForm.reset();
        });
    }

    // Close modal
    if (modalClose) {
        modalClose.addEventListener('click', function() {
            successModal.style.display = 'none';
        });
    }

    // Close modal on outside click
    window.addEventListener('click', function(e) {
        if (e.target === successModal) {
            successModal.style.display = 'none';
        }
    });
});
