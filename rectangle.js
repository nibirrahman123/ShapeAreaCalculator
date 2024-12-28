function rectangle() {
    const base = inputSection('rectangle-w');
    const height = inputSection('rectangle-l');
    const area = base * height;
    console.log(area);
    outputField('output-rect',area);
}



