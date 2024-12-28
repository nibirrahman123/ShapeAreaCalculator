function ellipse() {
    const base = inputSection('ellipse-a');
    const height = inputSection('ellipse-b');
    const area = 3.1416 * base * height;
    console.log(area);
    outputField('output-ellipse',area);
}