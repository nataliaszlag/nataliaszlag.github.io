const lightbox = document.createElement('div')
lightbox.id = "lightbox";
document.getElementById('gallery-app').appendChild(lightbox);


const images = document.querySelectorAll("p.gallery-img > img")

images.forEach(image => {
    image.addEventListener('click', e =>{
        lightbox.classList.add('active')
        const img = document.createElement('img')
        img.src = image.src
        
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
    })
});

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active')
})