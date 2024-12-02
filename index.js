

const generateAdvice = async () => {

try {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    const advice = data.slip.advice;
    const slipId = data.slip.id;   
    
    $('.adviceH1').empty();
    $('.adviceP').empty();
    $('.adviceH1').text(`Advice: #${slipId}`);
    $('.adviceP').text(advice);


} catch(error){
    console.log(error);
}    

}



$(document).ready(function () {
    generateAdvice();
    $('.adviceGenerator').on('click', generateAdvice);
});
