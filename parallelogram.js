function parallelogram() {
    const base = inputSection('parall-base');
    const height = inputSection('parall-height');
    const area = base * height;
    console.log(area);
    outputField('output-parallelogram',area);
}