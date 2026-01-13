function calculateBMI() {
  let height = document.getElementById("ht").value;
  let weight = document.getElementById ("wt").value;

  if (height === "" || weight === ""){
    alert ("Please Enter both Height and Weigth !!");
  }

  let ht = height /100;
  let bmi = (weight / (ht * ht )).toFixed(1);
  document.getElementById("bmiValue").textContent = bmi;
  let status = "";

    if (bmi < 18.5) status = "Underweight";
    else if (bmi < 25) status = "Normal";
    else if (bmi < 30) status = "Overweight";
    else status = "Obese";

    document.getElementById("bmiStatus").textContent = status;
}

function reset(){
  document.getElementById("ht").value = "";
  document.getElementById("wt").value = "";
  document.getElementById("bmiStatus").textContent = "";
  document.getElementById("bmiValue").textContent = "";

}