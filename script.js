function preload_image(im_url) {
    let img = new Image();
    img.src = im_url;
}

preload_image("envelope.closed.png");
preload_image("envelope.open.png");

const hoverImage = document.getElementById('envelop_id');

hoverImage.addEventListener('mouseenter', () => {
    hoverImage.src = 'envelope-open.png'; // Replace 'hover-image.jpg' with the path to your hover image
});

hoverImage.addEventListener('mouseleave', () => {
    hoverImage.src = 'envelope-closed.png'; // Replace 'original-image.jpg' with the path to your original image
});




var envelopBotton = document.getElementById('envelopBtn_id');
envelopBotton.onclick = function () {
    var mainContainer_1 = document.getElementById('mainCntr_1_id').style.backgroundColor = "#FECDBC"

}



