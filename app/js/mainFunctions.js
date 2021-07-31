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

// Unused Functions Below

function csv() {
    var testCode = document.getElementById("testCode").value;
    var cathode = document.getElementById("cathode").value;
    var anode = document.getElementById("anode").value;
    var anodeSol = document.getElementById("anodeSol").value;
    var anodeThick = document.getElementById("anodeThick").value;
    var anodeFoil = document.getElementById("anodeFoil").value;
    var necLayer = document.getElementById("necLayer").value;
    var necWatt = document.getElementById("necWatt").value;
    var necMinute = document.getElementById("necMinute").value;
    var protectLayer = document.getElementById("protectLayer").value;
    var protectWatt = document.getElementById("protectWatt").value;
    var protectTime = document.getElementById("protectTime").value;
    var mass = document.getElementById("mass").value;
    var c1 = document.getElementById("1").value;
    var c2 = document.getElementById("2").value;
    var c3 = document.getElementById("3").value;
    var c4 = document.getElementById("4").value;
    var c5 = document.getElementById("5").value;
    var c6 = document.getElementById("6").value;
    var c7 = document.getElementById("7").value;
    var c8 = document.getElementById("8").value;
    var c9 = document.getElementById("9").value;
    var c10 = document.getElementById("10").value;
    var c15 = document.getElementById("15").value;
    var c20 = document.getElementById("20").value;
    var c30 = document.getElementById("30").value;
    var c50 = document.getElementById("50").value;
    var c100 = document.getElementById("100").value;
    const value = ["", testCode, cathode, anode, anodeSol, anodeThick, anodeFoil, necLayer,necWatt, necMinute, protectLayer, protectWatt, protectTime, mass, c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c15, c20, c30, c50, c100]
    let finalValue = value.toString()
    var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
    var localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);
    localISOTime = localISOTime.substring(0,19)
    localISOTime = localISOTime.replace('-','')
    localISOTime = localISOTime.replace('-','')
    localISOTime = localISOTime.replace('T','-')
    localISOTime = localISOTime.replace(':','')
    localISOTime = localISOTime.replace(':','')
    var fileName = localISOTime + ".csv"
    download(fileName, finalValue);
}
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}