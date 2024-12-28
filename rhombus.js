function rhombus() {
    const base = inputSection('rhombus-d1');
    const height = inputSection('rhombus-d2');
    const area = 0.5 * base * height;
    console.log(area);
    outputField('output-rhombus',area);
}