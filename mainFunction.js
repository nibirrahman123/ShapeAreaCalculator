function inputSection(inputId) {
    const Input = document.getElementById(inputId);
    const InputText = Input.value;
    
    const InputNum = parseFloat(InputText);


    return InputNum;
}


// for output 
function outputField(outputId,area){
    const output = document.getElementById(outputId);
    output.innerText = area || '0' ;
}