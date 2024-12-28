function pentagon() {
    const base = inputSection('pentagon-perimeter');
    const height = inputSection('pentagon-apothem');
    const area = 0.5 * base * height;
    console.log(area);
    outputField('output-pentagon', area);
}