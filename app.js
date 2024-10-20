//Question 12:
// The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

function calculate() {
  
  let pieValue = parseFloat(document.querySelector(".pie-value").value);
  let radiusValue = parseFloat(document.querySelector(".radius").value);
  let answer = document.querySelector(".answer");

  // Correct formula for the circumference of a circle
  let circumference = `Circumference of a Circle: ${(
    2 *
    pieValue *
    radiusValue
  ).toFixed(2)}`;

  answer.innerText = circumference;
}
