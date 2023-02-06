function distanceBetweenPoints(x1, y1, x2, y2) {
    let x = x2 - x1;
    let y = y2 - y1;
    let distance = Math.sqrt(x*x + y*y);
    console.log(distance)
}distanceBetweenPoints(2, 4, 5, 0)