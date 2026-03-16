document.addEventListener('DOMContentLoaded', function () {

    // Set minimum date to tomorrow
    const testRideDateInput = document.getElementById('testRideDate');
    if (testRideDateInput) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        testRideDateInput.setAttribute('min', tomorrow.toISOString().split('T')[0]);
    }

    // Form submit - send to WhatsApp
    const form = document.getElementById('testRideForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const name      = document.getElementById('name').value.trim();
            const mobile    = document.getElementById('mobile').value.trim();
            const city      = document.getElementById('city').value.trim();
            const model     = document.getElementById('scooterModel').value;
            const date      = document.getElementById('testRideDate').value;
            const timeSlot  = document.getElementById('timeSlot').value;
            const utr       = document.getElementById('utrNumber').value.trim();

            if (!name || !mobile || !city || !model || !date || !timeSlot) {
                alert('Kripya saare zaroori fields bharein!');
                return;
            }

            if (mobile.length !== 10) {
                alert('Sahi 10 digit mobile number daalen!');
                return;
            }

            // Build WhatsApp message
            const msg =
                `🛵 *COMPTECH EV - TEST RIDE BOOKING*%0A` +
                `━━━━━━━━━━━━━━━━━━━━%0A` +
                `👤 *Naam:* ${name}%0A` +
                `📱 *Mobile:* ${mobile}%0A` +
                `🏙️ *Shehar:* ${city}%0A` +
                `🛵 *Scooter Model:* ${model}%0A` +
                `📅 *Date:* ${date}%0A` +
                `⏰ *Time Slot:* ${timeSlot}%0A` +
                `💰 *Booking Fee:* ₹2000%0A` +
                `🔖 *UTR/Transaction ID:* ${utr || 'Not provided'}%0A` +
                `━━━━━━━━━━━━━━━━━━━━%0A` +
                `📍 *Shagun Moters Dewas*%0A` +
                `Keladevi Chorahana, Near Salasar Granite%0A` +
                `Dewas, MP - 455001`;

            // Show confirmation modal first
            const details = document.getElementById('confirmationDetails');
            details.innerHTML = `
                <p>👤 <strong>Naam:</strong> ${name}</p>
                <p>📱 <strong>Mobile:</strong> ${mobile}</p>
                <p>🛵 <strong>Model:</strong> ${model}</p>
                <p>📅 <strong>Date:</strong> ${date}</p>
                <p>⏰ <strong>Time:</strong> ${timeSlot}</p>
                <p>💰 <strong>Fee:</strong> ₹2000</p>
            `;
            document.getElementById('confirmationModal').style.display = 'block';

            // Open WhatsApp with message
            setTimeout(() => {
                window.open(`https://wa.me/919907579406?text=${msg}`, '_blank');
            }, 500);

            form.reset();
        });
    }

    // Modal close
    const modalClose = document.querySelector('.modal-close');
    if (modalClose) {
        modalClose.addEventListener('click', () => {
            document.getElementById('confirmationModal').style.display = 'none';
        });
    }

    window.addEventListener('click', function (e) {
        const modal = document.getElementById('confirmationModal');
        if (e.target === modal) modal.style.display = 'none';
    });
});

// Copy UPI ID to clipboard
function copyUPI() {
    const upiId = document.getElementById('upiIdText').textContent;
    navigator.clipboard.writeText(upiId).then(() => {
        const btn = document.querySelector('.copy-btn');
        btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        btn.style.background = '#28a745';
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-copy"></i> Copy';
            btn.style.background = '';
        }, 2000);
    });
}
