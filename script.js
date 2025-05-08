const convertBtn = document.getElementById('convert-button')
const inputField = document.getElementById('input-field')
const lengthParagraph = document.getElementById('length-calc') 
const volumeParagraph = document.getElementById('volume-calc')
const massParagraph = document.getElementById('mass-calc')

const meterToFeet = 3.281 //1 meter = 3.281 feet
const literToGallon = 0.264 //1 liter = 0.264 gallon
const kilogramToPound = 2.204 //1 kilogram = 2.204 pound

convertBtn.addEventListener('click', function(){
    let valueToConvert = Number(inputField.value)
    if (valueToConvert){
        lengthParagraph.innerHTML = 
        `
        ${valueToConvert} meters = ${(valueToConvert * meterToFeet).toFixed(3)} feet | 
        ${valueToConvert} feet = ${(valueToConvert / meterToFeet).toFixed(3)} meters
        `
        volumeParagraph.innerHTML = 
        `
        ${valueToConvert} meters = ${(valueToConvert * literToGallon).toFixed(3)} feet | 
        ${valueToConvert} feet = ${(valueToConvert / literToGallon).toFixed(3)} meters
        `
        massParagraph.innerHTML = 
        `
        ${valueToConvert} meters = ${(valueToConvert * kilogramToPound).toFixed(3)} feet | 
        ${valueToConvert} feet = ${(valueToConvert / kilogramToPound).toFixed(3)} meters
        `
    } 
})