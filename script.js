function toggleCustomDateInput() {
  var customDateInputDiv = document.getElementById("customDateInput");
  customDateInputDiv.style.display = document.getElementById("useCustomDate")
    .checked
    ? "block"
    : "none";
}

function calculateAge() {
  var birthdateInput = document.getElementById("birthdate").value;
  var useTodayCheckbox = document.getElementById("useToday");
  var customDateInputDiv = document.getElementById("customDateInput");
  var customDateInput = document.getElementById("customDate").value;
  var today = new Date();

  if (useTodayCheckbox.checked) {
    // Calculate age using today's date
    calculateAndDisplayAge(today, birthdateInput);
  } else {
    // Show the custom date input field
    customDateInputDiv.style.display = "block";

    if (customDateInput) {
      // Parse custom date and calculate age
      var customDate = new Date(customDateInput);
      calculateAndDisplayAge(customDate, birthdateInput);
    }
  }
}

function calculateAndDisplayAge(referenceDate, birthdateInput) {
  if (birthdateInput.trim() === "") {
    alert("Please select a valid birthdate.");
    return;
  }

  var birthdate = new Date(birthdateInput);
  var ageInMilliseconds = referenceDate - birthdate;
  var ageDate = new Date(ageInMilliseconds);

  var years = Math.abs(ageDate.getUTCFullYear() - 1970);
  var months = ageDate.getUTCMonth();
  var days = ageDate.getUTCDate() - 1;

  var resultElement = document.getElementById("result");
  resultElement.innerHTML =
    "Your age is: " +
    years +
    " years, " +
    months +
    " months, and " +
    days +
    " days";
}
