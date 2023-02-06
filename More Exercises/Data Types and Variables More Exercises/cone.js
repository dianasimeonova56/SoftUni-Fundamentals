function cone(radius, height) {
    let volume = 1 / 3 * (Math.PI * radius * radius * height);
    let slantHeight = Math.sqrt(height * height + radius * radius)
    let area = Math.PI * radius * (radius + slantHeight)
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`)
}