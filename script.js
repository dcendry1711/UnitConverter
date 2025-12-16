const inputEl = document.getElementById("input-el")
const convBtn = document.getElementById("convert-btn")
const lengthP = document.getElementById("length-convert-result")
const volumeP = document.getElementById("volume-convert-result")
const massP = document.getElementById("mass-convert-result")

convBtn.addEventListener('click', () => {

    const convertValue = inputEl.value

    convertMeterFeet(convertValue)
    convertLitersGallons(convertValue)
    convertKilogramsPounds(convertValue)
})

function convertMeterFeet(val){
    const meterToFeet = (val * 3.281).toFixed(3)
    const feetToMeter = (val / 3.281).toFixed(3)
    lengthP.textContent = `${val} meters = ${meterToFeet} feet | ${val} feet = ${feetToMeter} meters`
}

function convertLitersGallons(val){
    const litersToGallon = (val * 0.264).toFixed(3)
    const gallonToLiters = (val / 0.264).toFixed(3)
    volumeP.textContent = `${val} meters = ${litersToGallon} gallons | ${val} feet = ${gallonToLiters} liters`
}

function convertKilogramsPounds(val){
    const kilosToPounds = (val * 2.204).toFixed(3)
    const poundsToKilos = (val / 2.204).toFixed(3)
    massP.textContent = `${val} meters = ${kilosToPounds} pounds | ${val} feet = ${poundsToKilos} kilos`
}