const date = new Date();
const currentYear = date.getFullYear();
const currentDay = date.getDate();
const currentMonth = date.getMonth();
const happyGif = [
    'https://media.giphy.com/media/l46CkATpdyLwLI7vi/giphy.gif',
    'http://giphygifs.s3.amazonaws.com/media/GXnaqmGcg1CTu/giphy.gif',
    'https://media.giphy.com/media/YTbZzCkRQCEJa/giphy.gif',
    'https://media.giphy.com/media/UkhHIZ37IDRGo/giphy.gif',
    'http://giphygifs.s3.amazonaws.com/media/mcJohbfGPATW8/giphy.gif',
    'https://media.giphy.com/media/lXiRnXRukC71MipmU/giphy.gif'
];
const sadGif = [
    'https://media.giphy.com/media/E5jCN5tsN21Ec/giphy.gif',
    'http://giphygifs.s3.amazonaws.com/media/12hdeiFVeNm0Ug/giphy.gif',
    'http://giphygifs.s3.amazonaws.com/media/9JZYVpuXk2KmA/giphy.gif',
    'https://media.giphy.com/media/xUA7bgj8d068Z0BUwE/giphy.gif',
    'https://media.giphy.com/media/l0Iy11M65Amu8h54Y/giphy.gif'
];

// Query selectors
const yearSelectElement = document.querySelector('#input-year');
const daySelectElement = document.querySelector('#input-day');
const monthSelectElement = document.querySelector('#input-month');


// Years generator for "Select the year" input. 
for (let year = 1900; year <= currentYear; year++) {
    const optionElement = document.createElement('option');
    optionElement.value = year;
    optionElement.innerHTML = year;

    if (year === currentYear) {
        optionElement.selected = true;
    }

    yearSelectElement.appendChild(optionElement);
}

// Calender days generator for "Select the day" input.
for (let day = 1; day <= 31; day++) {
    const optionElement = document.createElement('option');
    optionElement.value = day;
    optionElement.innerHTML = day;
    
    if (day === currentDay) {
        optionElement.selected = true;
    }

    daySelectElement.appendChild(optionElement);
}

// Months generator for "Select the month".
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

for (let monthsNumber = 0; monthsNumber < months.length; monthsNumber++) {
    const monthName = months[monthsNumber];
    const optionElement = document.createElement('option');
    optionElement.value = monthName;
    optionElement.innerHTML = monthName;

    if (monthsNumber === currentMonth) {
        optionElement.selected = true;
    }

    monthSelectElement.appendChild(optionElement);
}

// Adding onClick handler for button.

const buttonElement = document.querySelector('#calculate-button');
buttonElement.addEventListener('click', onCalculate);

function onCalculate() {
    // Query selectors
    const yearSelectElement = document.querySelector('#input-year');
    const daySelectElement = document.querySelector('#input-day');
    const monthSelectElement = document.querySelector('#input-month');
    const welcomeTextElement = document.querySelector('#welcome-text');
    const resultsDaysElement = document.querySelector('#results-days');
    const daysOldElement = document.querySelector('#days-old');
    const dateSelectorElement = document.querySelector('#date-selectors');
    const giffyElement = document.querySelector('#giffy');

    // Get data entered by user.
    const year = yearSelectElement.value;
    const day = daySelectElement.value;
    const month = monthSelectElement.value;

    // Calculate differens between today day and birthday date.
    const birthdayDate = new Date(`${month}-${day}-${year}`);
    const todayDate = new Date();

    // Calculate date in the days. 
    const differenceInMicroSeconds = todayDate.getTime() - birthdayDate.getTime(); 
    const differenceInDays = Math.floor(differenceInMicroSeconds / (1000 * 60 * 60 * 24));
    
    // How many days user old is.
    daysOldElement.innerHTML = differenceInDays;


    // Show random GIF
    const gifSource = differenceInDays < 10000 ? happyGif : sadGif;
    const randomGifIndex = Math.floor(Math.random() * gifSource.length);
    const randomGifSrc = gifSource[randomGifIndex];
    giffyElement.src = randomGifSrc; 

    console.log(randomGifSrc);
    // Make result section visible.
    welcomeTextElement.style.display = 'none';
    resultsDaysElement.style.display = 'block';
    dateSelectorElement.classList.add('select-date-min');
    
}
