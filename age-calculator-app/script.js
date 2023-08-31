const dayInput = document.querySelector(".day");
const monthInput = document.querySelector(".month");
const yearInput = document.querySelector(".year");

const dayLabel = document.getElementById("day-label");
const monthLabel = document.getElementById("month-label");
const yearLabel = document.getElementById("year-label");

//Error state for invalid input
const dayInvalid = document.getElementById("invalid-day");
const monthInvalid = document.getElementById("invalid-month");
const yearInvalid = document.getElementById("invalid-year");

//Error state for empty input field
const dayEmpty = document.getElementById("empty-day");
const monthEmpty = document.getElementById("empty-month");
const yearEmpty = document.getElementById("empty-year");

const replaceYears = document.getElementById("years");
const replaceMonths = document.getElementById("months");
const replaceDays = document.getElementById("days");

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;
const currentDay = new Date().getDate();

const submit = document.querySelector(".arrowBtn");

function addError(error) {
  error.style.display = "block";
}
function removeError(remove) {
  remove.style.display = "none";
}
function addLabelErr(label) {
  label.classList.add("Label");
}
function removeLabelErr(removeLab) {
  removeLab.classList.remove("Label");
}

function validate() {
  if (dayInput.value > 31) {
    addLabelErr(dayLabel);
    addError(dayInvalid);
  } else {
    removeLabelErr(dayLabel);
    removeError(dayInvalid);
  }
  if (monthInput.value > 12) {
    addLabelErr(monthLabel);
    addError(monthInvalid);
  } else {
    removeLabelErr(monthLabel);
    removeError(monthInvalid);
  }
  if (yearInput.value > currentYear) {
    addLabelErr(yearLabel);
    addError(yearInvalid);
  } else {
    removeLabelErr(yearLabel);
    removeError(yearInvalid);
  }

  if (dayInput.value == "") {
    dayLabel.classList.add("Empty");
    addError(dayEmpty);
  } else {
    dayLabel.classList.remove("Empty");
    removeError(dayEmpty);
  }
  if (monthInput.value == "") {
    monthLabel.classList.add("Empty");
    addError(monthEmpty);
  } else {
    monthLabel.classList.remove("Empty");
    removeError(monthEmpty);
  }
  if (yearInput.value == "") {
    yearLabel.classList.add("Empty");
    addError(yearEmpty);
  } else {
    yearLabel.classList.remove("Empty");
    removeError(yearEmpty);
  }

  switch (Number(monthInput.value)) {
    case 4:
    case 6:
    case 9:
    case 11:
      if (dayInput.value > 30) {
        addLabelErr(dayLabel);
        addError(dayInvalid);
        
      }
      break;
    case 2:
      if (yearInput.value % 4 === 0) {
        if (dayInput.value > 29) {
          dayInvalid.innerHTML = "A leap year";
          addLabelErr(dayLabel);
          addError(dayInvalid);
        }
      } else if (dayInput.value > 28) {
        addLabelErr(dayLabel);
        addError(dayInvalid);
      }
      break;
  }
}

function convert() {
  const birthYear = yearInput.value;
  const birthMonth = monthInput.value;
  const birthDay = dayInput.value;

  let months;
  let days;

  let years = currentYear - birthYear;
  if (currentMonth >= birthMonth) {
    months = currentMonth - birthMonth;
  } else {
    years--;
    months = currentMonth - birthMonth + 12;
  }

  if (currentDay >= birthDay) {
    days = currentDay - birthDay;
  } else {
    months--;
    days = currentDay - birthDay + 31;

    if (months < 0) {
      months = 11;
      years--;
    }
  }

  birthDay > 31 || birthMonth > 12 || birthYear > currentYear || birthDay == "" || birthMonth == "" || birthYear == ""
    ? false
    : (replaceDays.innerHTML = days + " ");
  birthMonth > 12 ||  birthDay > 31 || birthYear > currentYear || birthMonth == "" || birthDay == "" || birthYear == ""
    ? false
    : (replaceMonths.innerHTML = months + " ");
  birthYear > currentYear ||
  birthDay > 31 || birthMonth > 12 || birthYear == "" || birthDay == "" || birthMonth == ""
    ? false
    : (replaceYears.innerHTML = years + " ");
}

submit.addEventListener("click", validate);
submit.addEventListener("click", convert);
