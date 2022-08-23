



function getElementValue(elementId) {
    const elementTagValue = document.getElementById(elementId);
    const elementStringValue = elementTagValue.innerText;
    const elementValue = parseFloat(elementStringValue);
    return elementValue;

}