// Test Ride Booking Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const testRideForm = document.getElementById('testRideForm');
    const confirmationModal = document.getElementById('confirmationModal');
    const modalClose = document.querySelector('.modal-close');

    if (testRideForm) {
        testRideForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = {
                name: document.getElementById('name').value,
                mobile: document.getElementById('mobile').value,
                city: document.getElementById('city').value,
                scooterModel: document.getElementById('scooterModel').value,
                testRideDate: document.getElementById('testRideDate').value,
                timeSlot: document.getElementById('timeSlot').value,
                utrNumber: document.getElementById('utrNumber') ? document.getElementById('utrNumber').value : ''
            };

            if (!formData.name || !formData.mobile || !formData.city || !formData.scooterModel || !formData.testRideDate || !formData.timeSlot) {
                alert('Please fill all required fields');
                return;
            }

            const whatsappMessage = `*New Test Ride Booking - Shagun Moters*%0A%0A` +
                `%F0%9F%91%A4 Name: ${formData.name}%0A` +
                `%F0%9F%93%B1 Mobile: ${formData.mobile}%0A` +
                `%F0%9F%8F%99%EF%B8%8F City: ${formData.city}%0A` +
                `%F0%9F%9B%B5 Model: ${formData.scooterModel}%0A` +
                `%F0%9F%93%85 Date: ${formData.testRideDate}%0A` +
                `%E2%8F%B0 Time: ${formData.timeSlot}%0A` +
                `%F0%9F%92%B3 UPI ID: lovepatidar406-2%40okicici%0A` +
                `%F0%9F%A7%BE UTR/TxnID: ${formData.utrNumber || 'Not provided'}%0A` +
                `%F0%9F%92%B0 Booking Fee: %E2%82%B92000`;

            window.open(`https://wa.me/919907579406?text=${whatsappMessage}`, '_blank');

            const confirmationDetails = document.getElementById('confirmationDetails');
            if (confirmationDetails) {
                confirmationDetails.innerHTML = `
                    <p><strong>Name:</strong> ${formData.name}</p>
                    <p><strong>Mobile:</strong> ${formData.mobile}</p>
                    <p><strong>Model:</strong> ${formData.scooterModel}</p>
                    <p><strong>Date:</strong> ${formData.testRideDate}</p>
                    <p><strong>Time:</strong> ${formData.timeSlot}</p>
                `;
            }

            if (confirmationModal) confirmationModal.style.display = 'block';
            testRideForm.reset();
        });
    }

    if (modalClose) {
        modalClose.addEventListener('click', function() {
            if (confirmationModal) confirmationModal.style.display = 'none';
        });
    }

    window.addEventListener('click', function(e) {
        if (e.target === confirmationModal) confirmationModal.style.display = 'none';
    });
});

// Copy UPI ID to clipboard
function copyUPI() {
    const upiId = 'lovepatidar406-2@okicici';
    navigator.clipboard.writeText(upiId).then(() => {
        const btn = document.getElementById('copyBtn');
        if (btn) {
            btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            btn.style.background = '#218838';
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-copy"></i> Copy';
                btn.style.background = '';
            }, 2500);
        }
    }).catch(() => {
        // Fallback for older browsers
        const el = document.createElement('textarea');
        el.value = upiId;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        const btn = document.getElementById('copyBtn');
        if (btn) {
            btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            setTimeout(() => { btn.innerHTML = '<i class="fas fa-copy"></i> Copy'; }, 2500);
        }
    });
}

// Show payment done badge when UPI app button clicked
function markPaid() {
    setTimeout(() => {
        const badge = document.getElementById('paymentConfirmed');
        if (badge) badge.style.display = 'block';
    }, 1500);
}
