const converter = document.querySelector('#converter');
const result = document.querySelector('p');
const convBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change');
const one = document.querySelector('.one');
const two = document.querySelector('.two');

let celsius;
let fahrenheit;

// °C = (°F − 32) /1.8
// °F = °C * 1.8  + 32 

const swap = () => {
    if(one.innerText === "°C"){
        two.innerText = "°C"
        one.innerText = "°F"

    }else{ two.innerText = "°F"

    one.innerText ="°C"

    }
  
}
const celToFar = () => {
    if(one.innerText === "°C"){
        fahrenheit = converter.value * 1.8 + 32;
        result.innerHTML = fahrenheit + '°F';

    }else{ 
        celsius = (converter.value - 32) * 1.8;
        result.innerHTML = celsius + '°C';

    }
    
}

const resetAll = () => {
    converter.value = '';
    result.value = '';
}


changeBtn.addEventListener('click', swap);
convBtn.addEventListener('click', celToFar);
resetBtn.addEventListener('click', resetAll);
