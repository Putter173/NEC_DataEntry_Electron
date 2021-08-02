function calculate() {
    var mass = document.getElementById("mass").value;
    var anodeFoil = document.getElementById("anodeFoilMass").value;
    var cathodeFoil = document.getElementById("cathodeFoilMass").value;
    var ampPerGram = document.getElementById("ampPerGram").value;
    
    var active = mass - anodeFoil - cathodeFoil
    active = Math.round(active * 1000) / 1000
    var result = ampPerGram * active * 1000
    result = Math.round(result * 100) / 100
    document.getElementById("result").innerHTML = result;        
    if (result <= 0) {
        document.getElementById("result").innerHTML = "..."
    }
}
function electrodeMass() {
    var anode = document.getElementById("anodeFoil").value;
    var cathode = document.getElementById("cathodeFoil").value;
    if (anode === "Al") {
        document.getElementById("anodeFoilMass").value = '0.0106';
    } else if (anode === "Cu") {
        document.getElementById("anodeFoilMass").value = '0.0175';
    }
    if (cathode === "Al") {
        document.getElementById("cathodeFoilMass").value = '0.0106';
    } else if (cathode === "Cu") {
        document.getElementById("cathodeFoilMass").value = '0.0175';
    }
}
function cc() {
    var el = document.createElement('textarea');
    el.value = (document.getElementById("result").innerHTML)
    el.setAttribute('readonly', '');
    el.style = { position: 'absolute', left: '-9999px' };
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

function uploadBtn() {
    document.getElementById('uploadBtn').setAttribute('class', 'button is-loading')
    setTimeout(function(){
        uploadArray()
    },10);
}