const slider_input = document.getElementById('slider_input'),
    slider_thumb = document.getElementById('slider_thumb'),
    slider_line = document.getElementById('slider_line');

let graderCelcius = document.getElementById('graderCelcius');
let graderFahrenheit = document.getElementById('graderFahrenheit');
let graderInput = document.getElementById('graderInput');

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
    showSliderValue(temp);
});

// Add separate event listener for the text input
graderInput.addEventListener('input', () => {
    const temp = parseInt(graderInput.value);
    showSliderValue(temp);
});