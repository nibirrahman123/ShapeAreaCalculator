function triangle() {
    const base = inputSection('base-tri');
    const height = inputSection('height-tri');
    const area = 0.5 * base * height;
    console.log(area);
    outputField('output-tri',area);
}


function outputField(outputId,area){
    const output = document.getElementById(outputId);
    output.innerText = area || '0' ;
}






