const slider_input = document.getElementById('slider_input'),
    slider_thumb = document.getElementById('slider_thumb'),
    slider_line = document.getElementById('slider_line');

let graderCelcius = document.getElementById('graderCelcius');
let graderFahrenheit = document.getElementById('graderFahrenheit');
let graderInput = document.getElementById('graderInput');
let emojiElement = document.getElementById('expression');

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
    const emoji = getEmojiPath(temp);
    emojiElement.src = emoji;
    showSliderValue(temp);
});

// Add separate event listener for the text input
graderInput.addEventListener('input', () => {
    const temp = parseInt(graderInput.value);
    const emoji = getEmojiPath(temp);
    emojiElement.src = emoji;
    showSliderValue(temp);
});

function getEmojiPath(temp) {
    let path = '';
    if (temp >= -273 && temp < -100) {
        path = "https://drive.google.com/thumbnail?id=1PmLmen7ZCDgE_hVBzubqb7V7WZ-021Zq&sz=s800";
    }
    else if (temp >= -100 && temp < -50) {
        path = "https://drive.google.com/thumbnail?id=1xpT-wz2UiAVBlmfKJqVLVxs3vuFJ40K6&sz=s800";
    }

    else if (temp >= -50 && temp < 0) {
        path = "https://drive.google.com/thumbnail?id=1Tb33xGYTrOzWAQLYlJio3-zPF_o2f72O&sz=s800";
    }
    else if (temp >= 0 && temp < 15) {
        path = "https://drive.google.com/thumbnail?id=1ln6N2STqCkgic_KeY6I_39KFN0N9bQWB&sz=s800";
    }

    else if (temp >= 15 && temp < 30) {
        path = "https://drive.google.com/thumbnail?id=1f-0LOPlePHvmDhjoe44buStk-BQNscIT&sz=s800";
    }

    else if (temp >= 30 && temp < 50) {
        path = "https://drive.google.com/thumbnail?id=1n3eeiOSytByT_U2WnUP2T5x-SeJ8U-9T&sz=s800";
    }
    else if (temp >= 50 && temp < 100) {
        path = "https://drive.google.com/thumbnail?id=1o1EScHWB3-lNNjqvbYQLSW3SGQEn51BC&sz=s800";
    }
    else if (temp >= 100 && temp < 200) {
        path = "https://drive.google.com/thumbnail?id=1shxAFtUHzO-qbkEzE1l-mOrWyU6w_1hC&sz=s800";
    }
    else if (temp >= 200) {
        path = "https://drive.google.com/thumbnail?id=1CRBUMNLdM81MHnVvxYeWFaobfyKuih3z&sz=s800";
    }
    else {
        console.log("Error: " + temp);
    }
    return path;
}