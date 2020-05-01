<!DOCTYPE html>
<html lang="en-GB">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>KPB</title>
    <style>
      body {
        background-color: #ffffff;
        text-align: center;
      }
      #logo {
        margin-top: 100px;
      }
      #login {
        width: 150px;
        height: 150px;
        border-radius: 80px;
        margin: 0 auto;
        margin-top: 20px;
        padding: 50px;
        background: #285b84;
      }
    </style>
    <!-- begin js script -->
    <script>
      // accounts list
      const accounts = {
        123456: {
          name: "Jacob",
          pin: 1234,
          attempts: 3,
          balance: 2000,
          withdrawalLimit: 250,
          statement: [`\nEnd of transactions list`],
        },
        999999: {
          name: "Dean",
          pin: 9999,
          attempts: 3,
          balance: 10000,
          withdrawalLimit: 250,
          statement: [`\nEnd of transactions list`],
        },
      };
    
      // initialising user data input
      let userAcc;
      let userPIN;
      // date for statement purposes
      let d = new Date();
      // currency formatter
      const displayCurrency = (amount, currency) => {
        if (currency == "usd") {
          return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(amount);
        } else {
          return new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
          }).format(amount);
        }
      };
      /*transaction functions list*/
      //withdraw function
      const withdraw = (id) => {
        let amount = Number(window.prompt("Please enter an amount."));
        if (
          amount > accounts[id].withdrawalLimit ||
          amount > accounts[id].balance
        ) {
          alert(
            `This amount exceeds your withdrawal limit, Please enter a new amount`
          );
          withdraw(id);
        } else if (Number.isNaN(amount) == true) {
          alert(`That is not a valid number, Please enter a new amount`);
          withdraw(userAcc);
        } else {
          accounts[id].balance -= amount;
          accounts[id].withdrawalLimit -= amount;
          accounts[id].statement.unshift(
            `\n${d.getDate()}/${d.getMonth()}/${d.getFullYear()}   WDL   -${displayCurrency(
              amount
            )}    ${displayCurrency(accounts[id].balance)}`
          );
          alert(
            `\nYou have withdrawn ${displayCurrency(
              amount
            )}\nYour new balance is ${displayCurrency(accounts[id].balance)}`
          );
        }
      };
      // deposit function
      const deposit = (id) => {
        let amount = Number(window.prompt("Please enter an amount."));
        if (amount > 250) {
          alert(
            `This amount exceeds the single limit, Please enter a new amount`
          );
          deposit(id);
        } else if (Number.isNaN(amount) == true) {
          alert(`That is not a valid number, Please enter a new amount`);
          deposit(id);
        } else {
          accounts[id].balance += amount;
          accounts[id].statement.unshift(
            `\n${d.getDate()}/${d.getMonth()}/${d.getFullYear()}   DEP   +${displayCurrency(
              amount
            )}    ${displayCurrency(accounts[id].balance)}`
          );
          alert(
            `You have deposited ${displayCurrency(
              amount
            )}\nYour new balance is ${displayCurrency(accounts[id].balance)}`
          );
        }
      };
      // transfer function
      const transfer = (id, transferTo) => {
        let amount = Number(window.prompt("Please enter an amount"));
        if (Number.isNaN(amount) == true) {
          alert(`That is not a valid number, Please enter a new amount`);
          transfer(id, transferTo);
        } else {
          accounts[id].balance -= amount;
          accounts[transferTo].balance += amount;
          accounts[id].statement.unshift(
            `\n${d.getDate()}/${d.getMonth()}/${d.getFullYear()}   TFR   -${displayCurrency(
              amount
            )}    ￡${accounts[id].balance}`
          );
          alert(
            `You have successfully transferred ${displayCurrency(
              amount
            )} to account #${transferTo}\nYour new balance is ${displayCurrency(
              accounts[id].balance
            )}`
          );
        }
      };
      // statement function
      const statement = (id) => {
        alert(
          `Current balance: ${displayCurrency(
            accounts[id].balance
          )}\nShowing up to 10 most recent transactions in descending order:\n${accounts[
            id
          ].statement
            .slice(0, 9)
            .join("")}`
        );
      };
      // pin change function
      const pinChange = (id, newPin, pinConfirm) => {
        if (
          newPin >= 1000 &&
          newPin <= 9999 &&
          newPin != userPIN &&
          newPin === pinConfirm
        ) {
          accounts[id].pin = newPin;
          userPIN = newPin;
          alert(`PIN changed successfully`);
        } else {
          alert(`PIN change unsuccessful, please try again`);
        }
      };
      // conversion function
      const convertUSD = (id) => {
        let amount = Number(window.prompt("Please enter an amount"));
        if (Number.isNaN(amount) == true) {
          alert(`That is not a valid number, Please enter a new amount`);
          transfer(id, transferTo);
        } else {
          accounts[id].balance -= amount;
          accounts[id].statement.unshift(
            `\n${d.getDate()}/${d.getMonth()}/${d.getFullYear()}   CNV   -${displayCurrency(
              amount
            )}    ${displayCurrency(accounts[id].balance)}`
          );
          alert(
            `You have withdrawn ${displayCurrency(
              amount
            )} converted to ${displayCurrency(
              amount * 1.23,
              "usd"
            )}\nYour account balance is ${displayCurrency(
              accounts[id].balance
            )}`
          );
        }
      };
      // atm main function
      const atm = (id, pin) => {
        if (accounts[id].pin == pin && accounts[id].attempts > 0) {
          accounts[id].attempts = 3;
          let userAction = window.prompt(
            `#${id} - Welcome, ${
              accounts[id].name
            }.\n\Your account balance is ${displayCurrency(
              accounts[id].balance
            )}\n\nPlease enter one of the following options:\nstatement | deposit | withdraw | transfer | change pin | convert`
          ).toLowerCase();
          if (userAction == "withdraw") { // withdraws amount
            return withdraw(id);
          } else if (userAction == "deposit") { // deposits amount
            return deposit(id);
          } else if (userAction == "transfer") { // transfers amount to specified user account
            let transferTo = window.prompt(
              "Please enter the six digit account number to transfer to"
            );
            return transfer(id, transferTo);
          } else if (userAction == "change pin") { // changes pin to new 4 digit number
            let newPin = window.prompt("Please enter a new four digit PIN");
            let pinConfirm = window.prompt(
              "Please confirm your new four digit PIN"
            );
            pinChange(id, newPin, pinConfirm);
          } else if (userAction == "statement") { // displays 10 most recent transactions
            return statement(id);
          } else if (userAction == "convert") { // converts from GBP to USD and withdraws USD
            return convertUSD(id);
          } else { // catch-all error
            alert(`This transaction could not be completed`);
          }
        } else if (accounts[id].attempts > 1) {
          accounts[id].attempts -= 1; // pin tries decrease
          alert(
            `Your account number or pin is incorrect, you have ${accounts[id].attempts} attempt(s) remaining. Please try again or visit us in-store for assistance`
          );
          userAcc = window.prompt("Enter your six digit account number");
          userPIN = window.prompt("Enter your four digit PIN number");
          atm(userAcc, userPIN);
        } else {
          accounts[id].attempts = 0; // pin tried too many times
          alert(
            `Account locked for security purposes, please call 0123 444 5678 or visit us in-store for assistance`
          );
        }
      };
      // login prompts
      const loginFunc = () => {
        do {
          userAcc = window.prompt(
            "Please enter a valid six digit account number"
          );
        } while (userAcc.length != 6 || Number.isNaN(Number(userAcc)));
        do {
          userPIN = window.prompt("Please enter a valid four digit PIN number");
        } while (userPIN.length != 4 || Number.isNaN(Number(userPIN)));
        do {
          atm(userAcc, userPIN);
        } while (
          window.confirm(
            `Click OK if you would like to complete another transaction`
          ) == true
        );
        alert(`Thank you for banking with KPB, have a nice day!`);
      };
    </script>
  </head>
    <!-- html document body -->
  <body>
    <div id="logo"><img src="https://i.ibb.co/XYnPXQg/kpbtm.png" /></div>
    <div id="login">
      <img
        src="https://lh3.googleusercontent.com/proxy/uRftkElkgZyjGNw53Hjw3-6MV1DgI9BsvYr_865nHYGQxlj1BEsMlLiM2Rx3-2YNkNHWP2kvyNGWEy80ulkTDrZKs8_3cXMb5JTiyypg1NuuEzg"
        height="150px"
        width="150px"
        onclick="loginFunc()"
      /><br />
    </div>
  </body>
  <!-- end of html document body -->
</html>