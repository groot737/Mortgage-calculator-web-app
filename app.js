let data = [
  ["purchasePrice", "$", null],
  ["downPayment", "$", null],
  ["interestRate", "%", null],
  ["repaymentTime", "years", null]
];

for (let i = 0; i < 4; i++) {
  document.getElementById(i).addEventListener("input", () => {
    let title = document.getElementById(data[i][0]);
    if (i < 2) {
      title.innerText = data[i][1] + document.getElementById(i).value;
    } else {
      title.innerText = document.getElementById(i).value + ` ${data[i][1]}`;
    }
    data[i][2] = parseInt(document.getElementById(i).value);
  });
}

function calculate() {
  let P = data[0][2] - data[1][2]; // Loan amount
  let n = data[3][2] * 12; // Number of payments
  let r = data[2][2] / 100 / 12; // Monthly interest rate
  let monthlyPayment = P * (r * (1 + r) ** n) / ((1 + r) ** n - 1); // Monthly payment

  document.getElementsByTagName("h2")[0].innerText = `$${P}`;
  document.getElementsByTagName("h2")[1].innerText = `$${monthlyPayment.toFixed(2)}`;
}