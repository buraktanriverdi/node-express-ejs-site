const express = require('express');
const path = require('path');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// static files
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.get('/', (req, res) => {
  const data = {
    pageTitle: 'Ana Sayfa',
    pageDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget enim quis nisi vestibulum pulvinar vitae a elit. Aenean euismod, sapien vel vulputate luctus, neque metus iaculis lorem, sit amet maximus orci sapien sit amet lectus.',
    sliderImages: [
      { src: 'img/slider-image-1.jpg', alt: 'Slider Image 1' },
      { src: 'img/slider-image-2.jpg', alt: 'Slider Image 2' },
      { src: 'img/slider-image-3.jpg', alt: 'Slider Image 3' },
      { src: 'img/slider-image-4.jpg', alt: 'Slider Image 4' },
      { src: 'img/slider-image-5.jpg', alt: 'Slider Image 5' }
    ]
  };

  res.render('index', { data });
});

// server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
