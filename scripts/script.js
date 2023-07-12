document.querySelector('#button').onclick = function() {
    const human = prompt('Ön biztos ember?');

    if(human == "Igen") alert("Na jó, tavább léphetsz elhiszem, hogy ember vagy!");
    else alert("Sajnálom de nem léphetsz tovább, ez a hely csak embereknek van fenttartva!");

};