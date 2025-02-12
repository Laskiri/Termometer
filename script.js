const slider_input = document.getElementById('slider_input'),
    slider_thumb = document.getElementById('slider_thumb'),
    slider_line = document.getElementById('slider_line');

let graderCelcius = document.getElementById('graderCelcius');
let graderFahrenheit = document.getElementById('graderFahrenheit');
let graderInput = document.getElementById('graderInput');
let emojiElement = document.getElementById('expression');

function getEmojiPath(temp) {
    const assetsPath = './assets/';
    let path = assetsPath + 'earth.png';

    if (temp >= -273 && temp < -100) {
        path = assetsPath + 'XXCold.png';
    }
    else if (temp >= -100 && temp < -50) {
        path = assetsPath + 'XCold.png';
    }

    else if (temp >= -50 && temp < 0) {
        path = assetsPath + 'MCold.png';
    }

    else if (temp >= 0 && temp < 15) {
        path = assetsPath + 'Cold.png';
    }

    else if (temp >= 15 && temp < 30) {
        path = assetsPath + 'SHot.png';
    }

    else if (temp >= 30 && temp < 50) {
        path = assetsPath + 'MHot.png';
    }

    else if (temp >= 50 && temp < 100) {
        path = assetsPath + 'Hot.png';
    }

    else if (temp >= 100 && temp < 200) {
        path = assetsPath + 'XHot.png';
    }

    else if (temp >= 200) {
        path = assetsPath + 'XXHot.png';
    }
    else {
        console.log("Error: " + temp);
    }
    return path;
}



function showSliderValue(grader) {
    const Fah = grader * 1.8 + 32;

    slider_thumb.innerHTML = grader + '°C';
    slider_input.value = grader + 273;
    graderInput.value = grader;
    graderCelcius.innerText = grader + '°C';
    graderFahrenheit.innerText = Fah.toFixed(1) + '°F'; //kun 1 tal efter komma

    const bulletPosition = (slider_input.value / slider_input.max),
        space = slider_input.offsetWidth - slider_thumb.offsetWidth;

    slider_thumb.style.left = (bulletPosition * space) + 'px';
    slider_line.style.width = slider_input.value;
}

// Initiate the page with a value of 0 degrees
showSliderValue(0);

// Add separate event listener for the slider (range) input
slider_input.addEventListener('input', () => {
    const temp = slider_input.value - 273;
    console.log("slider: " + temp);
    const emoji = getEmojiPath(temp);
    emojiElement.src = emoji;
    showSliderValue(temp);
});

// Add separate event listener for the text input
graderInput.addEventListener('input', () => {
    const temp = parseInt(graderInput.value);
    console.log("text: " + temp);
    emojiElement.src = emoji;
    showSliderValue(temp);
});