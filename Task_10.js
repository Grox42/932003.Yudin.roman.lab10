var lightOn = false;
var isRebbit = true;

function Initialization()
{
    document.getElementById("curtain").style.transition = "0.2s";
    document.getElementById("light").style.transition = "0.2s";
	document.getElementById("magician").style.transition = "0.2s";
	document.getElementById("hat").style.transition = "0.2s";
    document.getElementById("rabbit").style.transition = "0.5s";
    document.getElementById("dove").style.transition = "0.5s";   
}

function RaiseCurtain() 
{
    let curtain = document.getElementById("curtain");
    curtain.style.transition = "1s";
    curtain.style.marginTop = "-100vh";
}

function LightOn() 
{
    let light = document.getElementById("light");
	let magician = document.getElementById("magician");
	let hat = document.getElementById("hat");
	let rabbit = document.getElementById("rabbit");
	let dove = document.getElementById("dove");

    if (lightOn) {
        light.style.opacity = 0;

		magician.style.opacity = 0;
		magician.style.transition = "0.2s";
		hat.style.opacity = 0;
		hat.style.transition = "0.2s";
		rabbit.style.opacity = 0;
		rabbit.style.transition = "0.2s";
		dove.style.opacity = 0;
		dove.style.transition = "0.2s";

        lightOn = false;
    }
    else {
        light.style.opacity = 0.3;

		magician.style.opacity = 1;
		magician.style.transition = "0.2s";
		hat.style.opacity = 1;
		hat.style.transition = "0.2s";
		if (isRebbit) {
			rabbit.style.opacity = 1;
			rabbit.style.transition = "0.2s";
		}
		else {
			dove.style.opacity = 1;
			dove.style.transition = "0.2s";
		}

        lightOn = true;
    }
}

function ReplaceAnimal(animal) 
{
	let rabbit = document.getElementById('rabbit');
    let dove = document.getElementById('dove');
    
    let topPos = "550px";
    let lowPos = "650px";
	
    dove.style.transition = rabbit.style.transition = "0.5s";


    if (animal == 'rabbit') {
		dove.style.top = topPos;
		dove.style.opacity = 1;
        rabbit.style.top = lowPos;
        rabbit.style.opacity = 0;
		isRebbit = false;
    }
    else {
		rabbit.style.top = topPos;
		rabbit.style.opacity = 1;
        dove.style.top = lowPos;
        dove.style.opacity = 0
		isRebbit = true;
    }
}