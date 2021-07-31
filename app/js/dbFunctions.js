const { ipcRenderer } = require("electron");

function addNewArray() {
  let emptyArray = {
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
  };
  ipcRenderer.sendSync("modArray", emptyArray);
}
function clearExistArray(arg) {
  let emptyArray = {
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
  };
  ipcRenderer.sendSync("modArray", emptyArray, arg);
}

/* Main Functions */

function loadStoredValues(Id) {
  let val = ipcRenderer.sendSync("storredArray", true);
  Id = Id + 1

  if (Id <= val) {
    let data = ipcRenderer.sendSync("storredArray", false);
    data = data[Id - 1];
    const dataEntries = Object.entries(data);
    for (const [id, value] of dataEntries) {
      document.getElementById(id).value = value;
    }
  } else if (Id > val) {
    document.getElementById("testCode").value = "",
      document.getElementById("cathode").value = "",
      document.getElementById("anode").value = "",
      document.getElementById("anodeSol").value = "",
      document.getElementById("anodeThick").value = "",
      document.getElementById("anodeFoil").value = "Cu",
      document.getElementById("necLayer").value = "",
      document.getElementById("necWatt").value = "",
      document.getElementById("necMinute").value = "",
      document.getElementById("protectLayer").value = "",
      document.getElementById("protectWatt").value = "",
      document.getElementById("protectTime").value = "",
      document.getElementById("mass").value = "",
      document.getElementById("c1").value = "",
      document.getElementById("c2").value = "",
      document.getElementById("c3").value = "",
      document.getElementById("c4").value = "",
      document.getElementById("c5").value = "",
      document.getElementById("c6").value = "",
      document.getElementById("c7").value = "",
      document.getElementById("c8").value = "",
      document.getElementById("c9").value = "",
      document.getElementById("c10").value = "",
      document.getElementById("c15").value = "",
      document.getElementById("c20").value = "",
      document.getElementById("c30").value = "",
      document.getElementById("c50").value = "",
      document.getElementById("c100").value = "";
  } else {
    throw "Error in loadStoredValues Function"
  }

  electrodeMass();
  calculate();
}

function saveCurrentValues(Id) {
  let currentArray = {
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
  };

  ipcRenderer.sendSync("modArray", currentArray, Id);
}

function bootWithRecent() {
  let totalBarVal = ipcRenderer.sendSync("storredArray", true);
  let currentBarVal = Number(document.querySelectorAll("#barList li").length);
  currentBarVal = currentBarVal - 2;
  while (currentBarVal < totalBarVal) {
    currentBarVal++;
    // Create New Element (Note: listEL = List element, elValue = Element Value, & linkEl = Link Element)
    let listEl = document.createElement("Li");
    let elValue = document.createTextNode(currentBarVal); // Add Value of New Element
    let currentBarValStr = currentBarVal.toString();
    listEl.appendChild(elValue);

    // Add Attributes to New Element
    let element = document.getElementById("barList");
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
  let totalBarVal = ipcRenderer.sendSync("storredArray", true); // Get Current Bar Value
  document.getElementsByClassName("active")[0].removeAttribute("class"); // Remove "active" Class from previous Element

  // Check, Update, and Lmit Total Bar Value
  totalBarVal = totalBarVal + 1;
  if (totalBarVal === 15) {
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
  let classAttr = document.createAttribute("class");       // Create & Add "class" attribute
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
  addNewArray()
  loadStoredValues(totalBarVal)
}

function removeArray() {
  let currentArray = document.getElementsByClassName("active")[0]; // Identify previous Element
  let currentArrayId = currentArray.innerHTML;
  let newActiveBarId = Number(currentArrayId) - 1
  console.log(newActiveBarId)

  if (newActiveBarId === 0 ) {
    clearExistArray(0)
    loadStoredValues(0)
  } else {
    refreshActive("bar" + newActiveBarId.toString())
    currentArray.remove()
    ipcRenderer.sendSync("removeArray", currentArrayId - 1);
  }
}