const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");

calculateBtn.addEventListener("click", () => {

    const weight = parseFloat(weightInput.value);
    const heightCm = parseFloat(heightInput.value);

    if (!weight || !heightCm || weight <= 0 || heightCm <= 0) {

        result.innerHTML = `
            <h2>Invalid Input</h2>
            <p>Please enter a valid weight and height.</p>
        `;

        return;
    }

    const heightMeters = heightCm / 100;

    const bmi = weight / (heightMeters * heightMeters);

    let category;
    let message;
    let range;

    if (bmi < 18.5) {

        category = "Underweight";
        message = "Your BMI is below the standard range.";
        range = "Below 18.5";

    } else if (bmi < 25) {

        category = "Normal Weight";
        message = "Your BMI is within the standard range.";
        range = "18.5 – 24.9";

    } else if (bmi < 30) {

        category = "Overweight";
        message = "Your BMI is above the standard range.";
        range = "25 – 29.9";

    } else {

        category = "Obese";
        message = "Your BMI is in the obesity range.";
        range = "30+";
    }

    result.innerHTML = `
        <h2>Your BMI: ${bmi.toFixed(1)}</h2>

        <p>
            Category:
            <strong>${category}</strong>
        </p>

        <p>${message}</p>

        <p>
            Standard BMI range:
            <strong>${range}</strong>
        </p>
    `;
});