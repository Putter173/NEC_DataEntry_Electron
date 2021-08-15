const { ipcRenderer } = require("electron");

const emptyArray = {
  maker: "",
  testCode: "",
  cathode: "",
  anode: "",
  anodeSol: "",
  anodeThick: "",
  anodeFoil: "Cu",
  necLayer: "",
  necWatt: "",
  necMinute: "",
  protectLayer: "",
  protectWatt: "",
  protectTime: "",
  necLayerCode: "",
  temp: "",
  reactiveGas: "",
  spacer: "",
  notes: "",
  mass: "",
  c1: "",
  c2: "",
  c3: "",
  c4: "",
  c5: "",
  c6: "",
  c7: "",
  c8: "",
  c9: "",
  c10: "",
  c15: "",
  c20: "",
  c30: "",
  c50: "",
  c100: "",
  vDc1: "",
  vDc2: "",
  vDc3: "",
  vDc4: "",
  vDc5: "",
  vDc6: "",
  vDc7: "",
  vDc8: "",
  vDc9: "",
  vDc10: "",
  vDc15: "",
  vDc20: "",
  vDc30: "",
  vDc50: "",
  vDc100: "",
};

function addNewArray() {
  ipcRenderer.sendSync("modArray", emptyArray);
}

function clearExistArray(arg) {
  ipcRenderer.sendSync("modArray", emptyArray, arg);
}

/* Main Functions */

function loadStoredValues(Id) {
  let val = ipcRenderer.sendSync("storredArray", true);
  Id = Id + 1;

  if (Id <= val) {
    let data = ipcRenderer.sendSync("storredArray", false);
    data = data[Id - 1];
    const dataEntries = Object.entries(data);
    for (const [id, value] of dataEntries) {
      document.getElementById(id).value = value;
    }
  } else if (Id > val) {
    (document.getElementById("maker").value = ""),
      (document.getElementById("testCode").value = ""),
      (document.getElementById("cathode").value = ""),
      (document.getElementById("anode").value = ""),
      (document.getElementById("anodeSol").value = ""),
      (document.getElementById("anodeThick").value = ""),
      (document.getElementById("anodeFoil").value = "Cu"),
      (document.getElementById("necLayer").value = ""),
      (document.getElementById("necWatt").value = ""),
      (document.getElementById("necMinute").value = ""),
      (document.getElementById("protectLayer").value = ""),
      (document.getElementById("protectWatt").value = ""),
      (document.getElementById("necLayerCode").value = ""),
      (document.getElementById("temp").value = ""),
      (document.getElementById("reactiveGas").value = ""),
      (document.getElementById("spacer").value = ""),
      (document.getElementById("notes").value = ""),
      (document.getElementById("mass").value = ""),
      (document.getElementById("c1").value = ""),
      (document.getElementById("c2").value = ""),
      (document.getElementById("c3").value = ""),
      (document.getElementById("c4").value = ""),
      (document.getElementById("c5").value = ""),
      (document.getElementById("c6").value = ""),
      (document.getElementById("c7").value = ""),
      (document.getElementById("c8").value = ""),
      (document.getElementById("c9").value = ""),
      (document.getElementById("c10").value = ""),
      (document.getElementById("c15").value = ""),
      (document.getElementById("c20").value = ""),
      (document.getElementById("c30").value = ""),
      (document.getElementById("c50").value = ""),
      (document.getElementById("c100").value = ""),
      (document.getElementById("vDc1").value = ""),
      (document.getElementById("vDc2").value = ""),
      (document.getElementById("vDc3").value = ""),
      (document.getElementById("vDc4").value = ""),
      (document.getElementById("vDc5").value = ""),
      (document.getElementById("vDc6").value = ""),
      (document.getElementById("vDc7").value = ""),
      (document.getElementById("vDc8").value = ""),
      (document.getElementById("vDc9").value = ""),
      (document.getElementById("vDc10").value = ""),
      (document.getElementById("vDc15").value = ""),
      (document.getElementById("vDc20").value = ""),
      (document.getElementById("vDc30").value = ""),
      (document.getElementById("vDc50").value = ""),
      (document.getElementById("vDc100").value = "");
  } else {
    throw "Error in loadStoredValues Function";
  }

  electrodeMass();
  calculate();
}

function saveCurrentValues(Id) {
  let currentArray = {
    maker: document.getElementById("maker").value,
    testCode: document.getElementById("testCode").value,
    cathode: document.getElementById("cathode").value,
    anode: document.getElementById("anode").value,
    anodeSol: document.getElementById("anodeSol").value,
    anodeThick: document.getElementById("anodeThick").value,
    anodeFoil: document.getElementById("anodeFoil").value,
    necLayer: document.getElementById("necLayer").value,
    necWatt: document.getElementById("necWatt").value,
    necMinute: document.getElementById("necMinute").value,
    protectLayer: document.getElementById("protectLayer").value,
    protectWatt: document.getElementById("protectWatt").value,
    protectTime: document.getElementById("protectTime").value,
    necLayerCode: document.getElementById("necLayerCode").value,
    temp: document.getElementById("temp").value,
    reactiveGas: document.getElementById("reactiveGas").value,
    spacer: document.getElementById("spacer").value,
    notes: document.getElementById("notes").value,
    mass: document.getElementById("mass").value,
    c1: document.getElementById("c1").value,
    c2: document.getElementById("c2").value,
    c3: document.getElementById("c3").value,
    c4: document.getElementById("c4").value,
    c5: document.getElementById("c5").value,
    c6: document.getElementById("c6").value,
    c7: document.getElementById("c7").value,
    c8: document.getElementById("c8").value,
    c9: document.getElementById("c9").value,
    c10: document.getElementById("c10").value,
    c15: document.getElementById("c15").value,
    c20: document.getElementById("c20").value,
    c30: document.getElementById("c30").value,
    c50: document.getElementById("c50").value,
    c100: document.getElementById("c100").value,
    vDc1: document.getElementById("vDc1").value,
    vDc2: document.getElementById("vDc2").value,
    vDc3: document.getElementById("vDc3").value,
    vDc4: document.getElementById("vDc4").value,
    vDc5: document.getElementById("vDc5").value,
    vDc6: document.getElementById("vDc6").value,
    vDc7: document.getElementById("vDc7").value,
    vDc8: document.getElementById("vDc8").value,
    vDc9: document.getElementById("vDc9").value,
    vDc10: document.getElementById("vDc10").value,
    vDc15: document.getElementById("vDc15").value,
    vDc20: document.getElementById("vDc20").value,
    vDc30: document.getElementById("vDc30").value,
    vDc50: document.getElementById("vDc50").value,
    vDc100: document.getElementById("vDc100").value,
  };

  ipcRenderer.sendSync("modArray", currentArray, Id);
}

function bootWithRecent() {
  let totalBarVal = ipcRenderer.sendSync("storredArray", true);
  let currentBarVal = Number(document.querySelectorAll("#barList li").length);
  const element = document.getElementById("barList");
  element.removeChild(element.lastElementChild);
  while (currentBarVal < totalBarVal) {
    currentBarVal++;
    // Create New Element (Note: listEL = List element, elValue = Element Value, & linkEl = Link Element)
    let listEl = document.createElement("Li");
    let elValue = document.createTextNode(currentBarVal); // Add Value of New Element
    let currentBarValStr = currentBarVal.toString();
    listEl.appendChild(elValue);

    // Add Attributes to New Element

    listEl.setAttribute("id", "bar" + currentBarValStr); // Create & Add "id" attribute
    listEl.setAttribute(
      "onclick",
      "refreshActive('bar" + currentBarValStr + "')"
    ); // Create & Add "onclick" attribute

    // Wrap new Element in <a> and create it
    let linkEl = document.createElement("a");
    linkEl.appendChild(listEl);
    element.appendChild(linkEl);
  }
  let blankDiv = document.createElement("div");
  blankDiv.setAttribute("id", "blank");
  element.appendChild(blankDiv);
  loadStoredValues(0);
}

function refreshActive(val) {
  // Change Active Element
  // Old Active Element

  let oldActive = document.getElementsByClassName("active")[0]; // Identify previous Element
  let oldActiveId = oldActive.innerHTML;
  saveCurrentValues(oldActiveId - 1);
  oldActive.removeAttribute("class"); // Remove "active" Class from previous Element

  // New Active Element
  let newActive = document.getElementById(val);
  let newActiveId = newActive.innerHTML;
  let classAttr = document.createAttribute("class"); // Create a "class" attribute
  classAttr.value = "active"; // Add "active" Class to "class" attribute
  newActive.setAttributeNode(classAttr); // Add "active" Class to current Element
  loadStoredValues(newActiveId - 1);
}

function addLi() {
  // Remove Blank Div
  const barListEl = document.getElementById("barList");
  barListEl.removeChild(barListEl.lastElementChild);

  let totalBarVal = ipcRenderer.sendSync("storredArray", true); // Get Current Bar Value
  document.getElementsByClassName("active")[0].removeAttribute("class"); // Remove "active" Class from previous Element

  // Check, Update, and Lmit Total Bar Value
  totalBarVal = totalBarVal + 1;
  if (totalBarVal === 99) {
    let attr = document.createAttribute("style");
    attr.value = "display: none;";
    document.getElementById("add").setAttributeNode(attr);
    document.getElementById("max").removeAttribute("style");
  }

  // Create New Element (Note: listEL = List element, elValue = Element Value, & linkEl = Link Element)
  let listEl = document.createElement("Li");
  let elValue = document.createTextNode(totalBarVal); // Add Value of New Element
  listEl.appendChild(elValue);

  // Add Attributes to New Element
  let element = document.getElementById("barList");
  let classAttr = document.createAttribute("class"); // Create & Add "class" attribute
  classAttr.value = "active";
  listEl.setAttributeNode(classAttr);
  let idAttr = document.createAttribute("id"); // Create & Add "id" attribute
  idAttr.value = "bar" + totalBarVal.toString();
  listEl.setAttributeNode(idAttr);
  let onclickAttr = document.createAttribute("onclick"); // Create & Add "onclick" attribute
  onclickAttr.value = "refreshActive('bar" + totalBarVal.toString() + "')";
  listEl.setAttributeNode(onclickAttr);
  // Wrap new Element in <a> and create it
  let linkEl = document.createElement("a");
  linkEl.appendChild(listEl);
  element.appendChild(linkEl);
  addNewArray();
  loadStoredValues(totalBarVal);

  // Add Blank Div Back
  let blankDiv = document.createElement("div");
  blankDiv.setAttribute("id", "blank");
  element.appendChild(blankDiv);
}

function removeArray() {
  let currentArray = document.getElementsByClassName("active")[0]; // Identify previous Element
  let totalBarVal = ipcRenderer.sendSync("storredArray", true);
  let currentArrayId = currentArray.innerHTML;
  let newActiveBarId = Number(currentArrayId) - 1;

  if (newActiveBarId === 0) {
    if (totalBarVal === 1) {
      clearExistArray(0);
      loadStoredValues(0);
    } else {
      ipcRenderer.sendSync("removeArray", 0);
      document.getElementById("bar" + totalBarVal.toString()).remove();
      bootWithRecent();
    }
  } else {
    refreshActive("bar" + newActiveBarId.toString());
    currentArray.remove();
    ipcRenderer.sendSync("removeArray", currentArrayId - 1);
  }
}

function uploadArray() {
  var anodeMass = document.getElementById("anodeFoilMass").value;
  var cathodeMass = document.getElementById("cathodeFoilMass").value;
  const newRowNum = ipcRenderer.sendSync("getCurrentRowVal");

  const maker = document.getElementById("maker").value;
  const testCode = document.getElementById("testCode").value;
  const cathode = document.getElementById("cathode").value;
  const anode = document.getElementById("anode").value;
  const anodeSol = document.getElementById("anodeSol").value;
  const anodeThick = document.getElementById("anodeThick").value;
  const anodeFoil = document.getElementById("anodeFoil").value;
  const necLayer = document.getElementById("necLayer").value;
  const necWatt = document.getElementById("necWatt").value;
  const necMinute = document.getElementById("necMinute").value;
  const protectLayer = document.getElementById("protectLayer").value;
  const protectWatt = document.getElementById("protectWatt").value;
  const protectTime = document.getElementById("protectTime").value;
  const necLayerCode = document.getElementById("necLayerCode").value;
  const temp = document.getElementById("temp").value;
  const reactiveGas = document.getElementById("reactiveGas").value;
  const spacer = document.getElementById("spacer").value;
  const notes = document.getElementById("notes").value;
  const mass = document.getElementById("mass").value;
  const activeMass = "=P" + newRowNum + "-" + anodeMass + "-" + cathodeMass;
  const c1 = document.getElementById("c1").value;
  const c2 = document.getElementById("c2").value;
  const c3 = document.getElementById("c3").value;
  const c4 = document.getElementById("c4").value;
  const c5 = document.getElementById("c5").value;
  const c6 = document.getElementById("c6").value;
  const c7 = document.getElementById("c7").value;
  const c8 = document.getElementById("c8").value;
  const c9 = document.getElementById("c9").value;
  const c10 = document.getElementById("c10").value;
  const c15 = document.getElementById("c15").value;
  const c20 = document.getElementById("c20").value;
  const c30 = document.getElementById("c30").value;
  const c50 = document.getElementById("c50").value;
  const c100 = document.getElementById("c100").value;
  const vDc1 = document.getElementById("vDc1").value;
  const vDc2 = document.getElementById("vDc2").value;
  const vDc3 = document.getElementById("vDc3").value;
  const vDc4 = document.getElementById("vDc4").value;
  const vDc5 = document.getElementById("vDc5").value;
  const vDc6 = document.getElementById("vDc6").value;
  const vDc7 = document.getElementById("vDc7").value;
  const vDc8 = document.getElementById("vDc8").value;
  const vDc9 = document.getElementById("vDc9").value;
  const vDc10 = document.getElementById("vDc10").value;
  const vDc15 = document.getElementById("vDc15").value;
  const vDc20 = document.getElementById("vDc20").value;
  const vDc30 = document.getElementById("vDc30").value;
  const vDc50 = document.getElementById("vDc50").value;
  const vDc100 = document.getElementById("vDc100").value;
  const value = [
    maker,
    testCode,
    cathode,
    anode,
    anodeSol,
    anodeThick,
    anodeFoil,
    necLayer,
    necWatt,
    necMinute,
    protectLayer,
    protectWatt,
    protectTime,
    necLayerCode,
    temp,
    reactiveGas,
    spacer,
    notes,
    mass,
    activeMass,
    c1,
    c2,
    c3,
    c4,
    c5,
    c6,
    c7,
    c8,
    c9,
    c10,
    c15,
    c20,
    c30,
    c50,
    c100,
    vDc1,
    vDc2,
    vDc3,
    vDc4,
    vDc5,
    vDc6,
    vDc7,
    vDc8,
    vDc9,
    vDc10,
    vDc15,
    vDc20,
    vDc30,
    vDc50,
    vDc100,
  ];
  const result = ipcRenderer.sendSync("uploadArray", value);
  if (result === "Array Uploaded Successfully") {
    document.getElementById("uploadBtn").setAttribute("class", "button");
    document
      .getElementById("uploadBtn")
      .setAttribute(
        "style",
        "font-family: 'Courier New', Courier, monospace;font-weight: bold;background-color: #55bd68"
      );
    document.getElementById("uploadBtn").innerHTML = "Uploaded Successfully!";
    setTimeout(function () {
      document
        .getElementById("uploadBtn")
        .setAttribute(
          "style",
          "font-family: 'Courier New', Courier, monospace;font-weight: bold;"
        );
      document.getElementById("uploadBtn").innerHTML = "Upload";
    }, 1000);
    removeArray();
  } else {
    document.getElementById("uploadBtn").setAttribute("class", "button");
    document
      .getElementById("uploadBtn")
      .setAttribute(
        "style",
        "font-family: 'Courier New', Courier, monospace;font-weight: bold;background-color: #ff6961"
      );
    document.getElementById("uploadBtn").innerHTML = "Upload Failed!";
    setTimeout(function () {
      document
        .getElementById("uploadBtn")
        .setAttribute(
          "style",
          "font-family: 'Courier New', Courier, monospace;font-weight: bold;"
        );
      document.getElementById("uploadBtn").innerHTML = "Upload";
    }, 1000);
  }
}
