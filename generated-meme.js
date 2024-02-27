let params = new URLSearchParams(document.location.search);
let topText = params.get("top-text")
let bottomText = params.get("bottom-text")
let imageChoice = params.get("image-choice"); 

if(topText && bottomText){
    document.getElementById("top-text").innerText = topText
    document.getElementById("bottom-text").innerText = bottomText
}

if(imageChoice){
    document.getElementById('image-choice').src = imageChoice;
}