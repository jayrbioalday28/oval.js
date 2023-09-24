function displayShape() {
    var selectedShape = document.getElementById("shape").value;
    var selectedColor = document.getElementById("color").value;
    var selectedSize = document.getElementById("size").value;

    var sizeValue = 0;
    switch (selectedSize) {
        case "small":
            sizeValue = 40;
            break;
        case "medium":
            sizeValue = 70;
            break;
        case "large":
            sizeValue = 100;
            break;
        default:
            sizeValue = 40; // Default to small
            break;
    }

    var canvas = document.getElementById("shapeCanvas");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = selectedColor;

    if (selectedShape === "oval") {
        context.beginPath();
        context.arc(100, 100, sizeValue, 0, 2 * Math.PI);
        context.fill();
    } 
    else if (selectedShape === "square") {
        var offset = (100 - sizeValue / 2); // Adjust position for square
        context.fillRect(offset, offset, sizeValue, sizeValue);
    }
    else if (selectedShape === "triangle") {
    context.beginPath();
    context.moveTo(100, 100 - sizeValue / 1);
    context.lineTo(100 - sizeValue / 1, 100 + sizeValue / 1);
    context.lineTo(100 + sizeValue/ 1, 100 + sizeValue / 1);
    context.closePath();
    context.fill();
}
}