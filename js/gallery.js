// Gallery Dynamic Loading and Lightbox
document.addEventListener('DOMContentLoaded', function() {
    const galleryGrid = document.getElementById('galleryGrid');
    const videoGrid = document.getElementById('videoGrid');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');

    let currentImageIndex = 0;
    let galleryImages = [];

    // Define your images here - Add your image filenames
    const galleryData = {
        scooters: [
            'assets/6967ba47-91e9-44ba-bbcc-af6fab52aafa.jfif',
            'assets/7ea98468-fc78-4094-bd53-4acff7edb0ec.jfif',
            'assets/b1b6297b-17ed-4ea4-81cd-6c7444857b0e.jfif',
            'assets/b3ec8aec-66f3-46ea-8aa3-51d1df772f2c.jfif',
            'assets/b9ebf011-edae-49c5-a427-bf0ee6cab4b9.jfif',
            'assets/bbd60c24-cb21-4c8b-9be9-15e738c123d2.jfif',
            'assets/bf6df38d-01c5-4bac-b0fa-8040089de930.jfif',
            'assets/d5007bdd-9e79-4276-85e8-2d62855f0a51.jfif',
            'assets/ea672a85-4b15-43b4-ab81-baa556d3e583.jfif',
            'assets/eba79e77-0ba7-4dbe-b412-2a1f2f0a6814.jfif',
            'assets/ee61e091-b581-41af-b97f-62e1fad08a3f.jfif',
            'assets/ffacc8eb-0687-445d-885e-868452ac37aa.jfif'
        ],
        delivery: [
            // You can move specific images here for delivery category
        ],
        showroom: [
            // You can move specific images here for showroom category
        ],
        videos: [
            'assets/VID-20260313-WA0009.mp4',
            'assets/VID-20260313-WA0011.mp4',
            'assets/WhatsApp Video 2026-03-12 at 23.12.09 (1).mp4',
            'assets/WhatsApp Video 2026-03-12 at 23.12.09.mp4',
            'assets/WhatsApp Video 2026-03-12 at 23.13.36 (1).mp4',
            'assets/WhatsApp Video 2026-03-12 at 23.13.36.mp4',
            'assets/WhatsApp Video 2026-03-12 at 23.13.37 (1).mp4',
            'assets/WhatsApp Video 2026-03-12 at 23.13.37.mp4',
            'assets/WhatsApp Video 2026-03-12 at 23.14.14.mp4',
            'assets/WhatsApp Video 2026-03-12 at 23.14.15 (1).mp4',
            'assets/WhatsApp Video 2026-03-12 at 23.14.15.mp4'
        ]
    };

    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');
            filterGallery(filter);
        });
    });

    function filterGallery(filter) {
        const items = document.querySelectorAll('.gallery-item');
        items.forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Load gallery from assets folder
    function loadGallery() {
        const allImages = [
            ...galleryData.scooters.map(img => ({ url: img, category: 'scooters' })),
            ...galleryData.delivery.map(img => ({ url: img, category: 'delivery' })),
            ...galleryData.showroom.map(img => ({ url: img, category: 'showroom' }))
        ];

        if (allImages.length > 0) {
            renderImages(allImages);
        } else {
            showInstructions();
        }

        if (galleryData.videos.length > 0) {
            renderVideos(galleryData.videos);
        }
    }

    function renderImages(images) {
        galleryGrid.innerHTML = '';
        images.forEach((img, index) => {
            const item = document.createElement('div');
            item.className = `gallery-item ${img.category}`;
            item.innerHTML = `<img src="${img.url}" alt="Gallery Image" loading="lazy" onerror="this.parentElement.style.display='none'">`;
            item.addEventListener('click', () => {
                galleryImages = images.map(i => i.url);
                openLightbox(index);
            });
            galleryGrid.appendChild(item);
        });
    }

    function renderVideos(videos) {
        videoGrid.innerHTML = '';
        videos.forEach(vid => {
            const item = document.createElement('div');
            item.className = 'video-item';
            item.innerHTML = `
                <video controls>
                    <source src="${vid}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            `;
            videoGrid.appendChild(item);
        });
    }

    function showInstructions() {
        galleryGrid.innerHTML = `
            <div class="gallery-message">
                <i class="fas fa-images"></i>
                <h3>Add Your Images</h3>
                <p>To display your gallery:</p>
                <ol style="text-align: left; max-width: 600px; margin: 2rem auto;">
                    <li>Add images to <strong>assets/scooters/</strong> folder</li>
                    <li>Add delivery photos to <strong>assets/delivery/</strong> folder</li>
                    <li>Add showroom photos to <strong>assets/showroom/</strong> folder</li>
                    <li>Add videos to <strong>assets/videos/</strong> folder</li>
                    <li>Edit <strong>js/gallery.js</strong> and add filenames to galleryData</li>
                </ol>
                <p><strong>Example:</strong> 'assets/scooters/comptech-black.jpg'</p>
            </div>
        `;
    }

    // Lightbox functionality
    function openLightbox(index) {
        currentImageIndex = index;
        lightboxImage.src = galleryImages[currentImageIndex];
        lightbox.style.display = 'block';
    }

    function closeLightbox() {
        lightbox.style.display = 'none';
    }

    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        lightboxImage.src = galleryImages[currentImageIndex];
    }

    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        lightboxImage.src = galleryImages[currentImageIndex];
    }

    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', showPrevImage);
    }

    if (lightboxNext) {
        lightboxNext.addEventListener('click', showNextImage);
    }

    // Close lightbox on outside click
    window.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (lightbox.style.display === 'block') {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') showPrevImage();
            if (e.key === 'ArrowRight') showNextImage();
        }
    });

    // Initialize gallery
    loadGallery();
});
