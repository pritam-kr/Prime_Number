const form = document.forms[0];
const myName = document.querySelector("#name");
const month = document.querySelector("#month");
const dateOfBirth = document.querySelector("#date-birth");
let isPrime = true;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  var nameValue = myName.value;
  var dateValue = Number(dateOfBirth.value);
  var monthValue = Number(month.value);
  checkPrime(dateValue);
  if (dateValue > 31) {
    document.querySelector(".out-put").innerHTML = `<p>Enter valid date. </p>`;
  } else if (!nameValue) {
    document.querySelector(
      ".out-put"
    ).innerHTML = `<p>Name field can not blank.</p>`;
  } else if (!dateValue) {
    document.querySelector(
      ".out-put"
    ).innerHTML = `<p>Date field can not blank.</p>`;
  }
});

function checkMonth(e) {
  if (!e) {
    document.querySelector(
      ".out-put"
    ).innerHTML = `<p>Month field can not blank.</p>`;
  } else if (e > 12) {
    document.querySelector(".out-put").innerHTML = `<p>Enter valid month. </p>`;
  }
}

//check prime

function checkPrime(e) {
  // console.log(e)
  if (e === 1) {
    document.querySelector(
      ".out-put"
    ).innerHTML = `<p>Your birth date is neither prime a composite number. </p>`;
  } else if (e > 1) {
    for (let i = 2; i < e; i++) {
    //   console.log(i);
      if (e % i == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      document.querySelector(
        ".out-put"
      ).innerHTML = `<p>Your birth date is a prime number. </p>`;
    } else {
      document.querySelector(
        ".out-put"
      ).innerHTML = `<p>Your birth date is not a prime number. </p>`;
    }
  }
}
