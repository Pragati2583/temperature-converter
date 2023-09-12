celciusInput= document.querySelector('#celcius>input')
fahrenheitInput= document.querySelector('#fahrenheit>input')
kelvinInput= document.querySelector('#kelvin>input')

 let btn= document.querySelector('.button button')
 
 function roundnumber(number){
    return Math.round(number*100)/100
 }
/*celcius TO fahrenheit AND kelvin*/
celciusInput.addEventListener('input',function(){

    let cTemp=parseFloat(celciusInput.value)
    let fTemp=(cTemp*(9/5)) + 32
    let kTemp=cTemp + 273.15

    fahrenheitInput.value= roundnumber(fTemp)
    kelvinInput.value= roundnumber(kTemp)

})
/*fahrenheit TO celcius AND kelvin*/
 fahrenheitInput.addEventListener('input',function()
{
    let fTemp=parseFloat(fahrenheitInput.value)
    let cTemp=(fTemp - 32)*(5/9)
    let kTemp= (cTemp -32)*(5/9) +273.15

    celciusInput.value= roundnumber(fTemp)
    kelvinInput.value= roundnumber(kTemp)

})
/*kelvin TO fahrenheit AND celcius*/
kelvinInput.addEventListener('input',function()
{
    let kTemp=parseFloat(kelvinInput.value)
    let cTemp=kTemp + 273.15
    let fTemp=(kTemp - 273.15)*(9/5) +32

    celciusInput.value = roundnumber(cTemp)
    fahrenheitInput.value= roundnumber(fTemp)

})
btn.addEventListener('click',()=>{
celciusInput.value=""
fahrenheitInput.value=""
kelvinInput.value=""
})