const topText = document.getElementById("top-text")
const bottomText = document.getElementById("bottom-text")
const imageChoice = document.getElementById("image-choice")
const topTextError = document.getElementById("top-text-error")
const bottomTextError = document.getElementById("bottom-text-error")
const imageChoiceError = document.getElementById("image-choice-error")
const memeGeneratorForm = document.getElementById("meme-generator-form")

topText.addEventListener("blur", validateTopText)
bottomText.addEventListener("blur", validateBottomText)
imageChoice.addEventListener("blur", validateImage)
memeGeneratorForm.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
    const topTextIsValid = topText.value.length <= 50 && topText.value.length > 0
    const bottomTextIsValid = bottomText.value.length <= 50 && bottomText.value.length > 0
    const imageChoiceIsValid = imageChoice.value.slice(-4) === '.png' || imageChoice.value.slice(-4) === '.jpg' || imageChoice.value.slice(-5) === '.jpeg'

    if (!topTextIsValid || !bottomTextIsValid || !imageChoiceIsValid) {
        event.preventDefault()
    }
}

function validateTopText(event) {
    const input = event.target
    if(input.value.length <= 25 && input.value.length > 0) {
        topTextError.innerText = ""
        input.classList.add('valid')
        input.classList.remove('invalid')
    }
    else {
        topTextError.innerText = "You can only input between 1 and 25 characters"
        input.classList.remove('valid')
        input.classList.add('invalid')
    }
}

function validateBottomText(event){
    const input = event.target
    if(input.value.length <= 25 && input.value.length > 0) {
        bottomTextError.innerText = ""
        input.classList.add('valid')
        input.classList.remove('invalid')
    }
    else {
        bottomTextError.innerText = "You can only input between 1 and 25 characters"
        input.classList.remove('valid')
        input.classList.add('invalid')
    }
}

function validateImage(event) {
    const input = event.target
    if (input.value.slice(-4) === '.png' || input.value.slice(-4) === '.jpg' || input.value.slice(-5) === '.jpeg') {
        imageChoiceError.innerText = ""
        input.classList.add('valid')
        input.classList.remove('invalid')
    }
    else {
        imageChoiceError.innerText = "Invalid image type: must end in '.png', '.jpg', or '.jpeg'"
        input.classList.remove('valid')
        input.classList.add('invalid')
    }
}
