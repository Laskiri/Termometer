const slider_input = document.getElementById('slider_input'),
    slider_thumb = document.getElementById('slider_thumb'),
    slider_line = document.getElementById('slider_line');

let graderCelcius = document.getElementById('graderCelcius');
let graderFahrenheit = document.getElementById('graderFahrenheit');
let graderInput = document.getElementById('graderInput');
let emojiWrapper = document.getElementById('expression-wrapper');
let activeEmoji = emojiWrapper.firstElementChild;
console.log(activeEmoji)

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
    renderEmoji(temp);
    showSliderValue(temp);
});

// Add separate event listener for the text input
graderInput.addEventListener('input', () => {
    const temp = parseInt(graderInput.value);
    renderEmoji(temp);
    showSliderValue(temp);
});

const emojiLinks = {
    "temp_-273": "https://drive.google.com/thumbnail?id=1PmLmen7ZCDgE_hVBzubqb7V7WZ-021Zq&sz=s800",
    "temp_-100": "https://drive.google.com/thumbnail?id=1xpT-wz2UiAVBlmfKJqVLVxs3vuFJ40K6&sz=s800",
    "temp_-50": "https://drive.google.com/thumbnail?id=1Tb33xGYTrOzWAQLYlJio3-zPF_o2f72O&sz=s800",
    "temp_0": "https://drive.google.com/thumbnail?id=1ln6N2STqCkgic_KeY6I_39KFN0N9bQWB&sz=s800",
    "temp_15": "https://drive.google.com/thumbnail?id=1f-0LOPlePHvmDhjoe44buStk-BQNscIT&sz=s800",
    "temp_30": "https://drive.google.com/thumbnail?id=1n3eeiOSytByT_U2WnUP2T5x-SeJ8U-9T&sz=s800",
    "temp_50": "https://drive.google.com/thumbnail?id=1o1EScHWB3-lNNjqvbYQLSW3SGQEn51BC&sz=s800",
    "temp_100": "https://drive.google.com/thumbnail?id=1shxAFtUHzO-qbkEzE1l-mOrWyU6w_1hC&sz=s800",
    "temp_200": "https://drive.google.com/thumbnail?id=1CRBUMNLdM81MHnVvxYeWFaobfyKuih3z&sz=s800"
}
const emojiElements = [];

function renderEmoji(temp) {
    let emoji = null;
    if (temp >= -273 && temp < -100) {
        emoji = emojiElements[0];
    }
    else if (temp >= -100 && temp < -50) {
        emoji = emojiElements[1];
    }

    else if (temp >= -50 && temp < 0) {
        emoji = emojiElements[2];
    }
    else if (temp >= 0 && temp < 15) {
        emoji = emojiElements[3];
    }

    else if (temp >= 15 && temp < 30) {
        emoji = emojiElements[4];

    }
    else if (temp >= 30 && temp < 50) {
        emoji = emojiElements[5];
    }
    else if (temp >= 50 && temp < 100) {
        emoji = emojiElements[6];
    }
    else if (temp >= 100 && temp < 200) {
        emoji = emojiElements[7];
    }
    else if (temp >= 200) {
        emoji = emojiElements[8];
    }
    else {
        console.log("Error: " + temp);
    }
    if (emoji && emoji !== activeEmoji) {
        emoji.style.display = 'block';
        activeEmoji.style.display = 'none';
        activeEmoji = emoji;
    }
}

function initializeEmojies() {
    Object.values(emojiLinks).forEach((emoji) => {
        console.log(emoji)
        const img = document.createElement('img');
        img.src = emoji;
        img.style.display = 'none';
        img.classList.add('expression');
        emojiElements.push(img);
        emojiWrapper.appendChild(img);
    });
}
initializeEmojies();
