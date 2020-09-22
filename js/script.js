

function changeColor() {
  const red = document.getElementById("redValue").value;
  const green = document.getElementById("greenValue").value;
  const blue = document.getElementById("blueValue").value;

  const rgb = "rgb( " + red + ", " + green + ", " + blue + ")";

  document.getElementById("circle").style.backgroundColor = rgb;

  document.getElementById("rgbColor").innerHTML = rgb;
}



function mouseDown() {
  document.getElementById("redRange").style.cursor = "grabbing";
  document.getElementById("greenRange").style.cursor = "grabbing";
  document.getElementById("blueRange").style.cursor = "grabbing";
}

function mouseUp() {
  document.getElementById("redRange").style.cursor = "grab";
  document.getElementById("greenRange").style.cursor = "grab";
  document.getElementById("blueRange").style.cursor = "grab";

}


document.getElementById("redRange").oninput = function () {
  let redRange = document.getElementById("redRange");

  document.getElementById("redValue").value = redRange.value;

  changeColor();
};

document.getElementById("greenRange").oninput = function () {
  let greenRange = document.getElementById("greenRange");

  document.getElementById("greenValue").value = greenRange.value;

  changeColor();
};

document.getElementById("blueRange").oninput = function () {
  let blueRange = document.getElementById("blueRange");

  document.getElementById("blueValue").value = blueRange.value;

  changeColor();
};



document.getElementById("rgbColor").innerHTML = "rgb (0 , 0, 0)";

document.getElementById("redValue").style.color = "red";
document.getElementById("greenValue").style.color = "green";
document.getElementById("blueValue").style.color = "blue";

