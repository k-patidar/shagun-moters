# Shagun Moters Dewas - EV Scooter Showroom Website

Complete modern dynamic business website for Shagun Moters Dewas, an authorized Comptech EV Scooter dealer.

## Features

### Website Pages
- **Home Page**: Hero section, featured scooters, benefits, customer reviews
- **About Page**: Company information, mission, vision, future goals
- **Products Page**: Comptech EV scooter models with detailed specifications
- **Gallery Page**: Dynamic image and video gallery
- **Services Page**: EV servicing, battery health check, spare parts, support
- **Test Ride Page**: Online booking system with ₹2000 payment
- **Contact Page**: Multiple contact options, form, and Google Maps integration

### Key Features
- ✅ Floating WhatsApp chat button on every page
- ✅ Click-to-call functionality
- ✅ Test ride booking system with payment integration
- ✅ Dynamic gallery loading from Downloads folder
- ✅ Fully responsive mobile design
- ✅ Modern green and white color scheme
- ✅ Smooth animations and transitions
- ✅ SEO optimized
- ✅ Fast loading

### Comptech EV Features Included
- 135 km range per charge
- 85 km/h top speed
- 3-4 hours fast charging
- Anti-theft system
- Disc brakes with CBS
- LFP battery technology
- Reverse mode
- USB charging port
- Large boot space
- Regenerative braking
- Stylish DRL lights

## Installation & Setup

### Basic Setup (Static Website)
1. Extract all files to a folder
2. Open `index.html` in a web browser
3. Website is ready to use!

### Advanced Setup (With Dynamic Gallery)

#### Prerequisites
- Node.js installed on your computer
- npm (comes with Node.js)

#### Steps
1. Open terminal/command prompt in the website folder
2. Install dependencies:
   ```bash
   npm install express cors
   ```
3. Start the server:
   ```bash
   node server.js
   ```
4. Open browser and go to: `http://localhost:3000`

The server will automatically load images and videos from your Downloads folder that were downloaded today.

## File Structure
```
shagun-moters-website/
├── index.html              # Home page
├── about.html              # About page
├── products.html           # Products page
├── gallery.html            # Gallery page
├── services.html           # Services page
├── test-ride.html          # Test ride booking page
├── contact.html            # Contact page
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   ├── main.js            # Main JavaScript
│   ├── test-ride.js       # Test ride form handler
│   ├── gallery.js         # Gallery functionality
│   └── contact.js         # Contact form handler
├── images/                 # Image folder (add your images here)
├── server.js              # Backend server for dynamic gallery
└── README.md              # This file
```

## Customization

### Adding Images
1. Create an `images` folder in the website directory
2. Add your scooter photos, delivery photos, and showroom images
3. Update image paths in HTML files

### Updating Contact Information
Edit the following in all HTML files:
- Phone: +91 9907579406
- WhatsApp: +91 9907579406
- Email: sagunmotersdewas@gmail.com
- Instagram: @comptech_shagun_motos41
- Address: Keladevi Chorahana, Near Salasar Granite, Dewas, MP - 455001

### Payment Integration
The test ride booking currently uses WhatsApp notification. To integrate real payment:

1. **Razorpay Integration**:
   - Sign up at razorpay.com
   - Get API keys
   - Add Razorpay script to test-ride.html
   - Update payment button handler in test-ride.js

2. **UPI Integration**:
   - Use UPI deep links
   - Format: `upi://pay?pa=YOUR_UPI_ID&pn=Shagun Moters&am=2000&cu=INR`

### Google Maps
Update the Google Maps embed in contact.html with your exact location coordinates.

## Browser Support
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- Node.js (for backend)
- Express.js (for API)
- Font Awesome (icons)

## Contact & Support

**Shagun Moters Dewas**
- Phone: +91 9907579406
- WhatsApp: +91 9907579406
- Email: sagunmotersdewas@gmail.com
- Instagram: https://instagram.com/comptech_shagun_motos41

## License
© 2026 Shagun Moters Dewas. All rights reserved.

## Notes
- For production deployment, consider using a proper hosting service
- Add SSL certificate for HTTPS
- Implement proper payment gateway integration
- Set up email notifications for form submissions
- Add analytics tracking (Google Analytics)
- Optimize images for faster loading
- Consider adding a CMS for easier content management
