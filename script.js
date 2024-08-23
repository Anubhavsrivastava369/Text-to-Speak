let speech = new SpeechSynthesisUtterance();

document.querySelector('.btn').addEventListener('click' , () =>{
    speech.text = document.querySelector('.txtArea').value;
    window.speechSynthesis.speak(speech);
});