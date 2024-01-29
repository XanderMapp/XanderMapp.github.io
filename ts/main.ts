const image = document.querySelector('footer a .image-container');

image?.addEventListener('mouseover', (event) => {
    event.preventDefault();
    image.classList.add('active');
})

image?.addEventListener('mouseout', (event) => {
    event.preventDefault();
    image.classList.remove('active');
})