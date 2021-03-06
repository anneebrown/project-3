//I used the Study Guide as a basis

//give focus to the first field
document.getElementById("name").focus();

//selects and hides the other job role text field when javascript is active
let otherJobRole = document.getElementById('other-title');
otherJobRole.style.display = 'none';


//if the other option is selected, the other job role field appears
//I got the basic idea for the code here: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event and here: https://stackoverflow.com/questions/24875414/addeventlistener-change-and-option-selection
const selectFields = document.querySelector('#title');
selectFields.addEventListener('change', (event) => {
    if (event.target.value === "other"){
    otherJobRole.style.display = 'block';
    }  else if (event.target.value !== 'Other') {
      otherJobRole.style.display = 'none';
      }
  });

/*
T-shirt section
*/

//Hide the “Select Theme” `option` element in the “Design” menu.
let selectThemeOption = document.getElementById('design');
selectThemeOption.firstElementChild.style.display = 'none';

//Update the “Color” field to read “Please select a T-shirt theme” until a theme is selected and hides the drop down menu
const colorOptions = document.getElementById('color');
colorOptions.style.display = 'none';
let colorLabel = document.getElementById('colors-js-puns').firstElementChild;
colorLabel.textContent = 'Please select a T-shirt theme';

//add an event listener to listen for changes, use an if clause to determine what to display, change the label to say "Color:"
selectThemeOption.addEventListener('change', (event) => {
  //gets the index value of the selected field to be able to target it with the if clauses, idea from here: https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedIndex
  let selectedOption = selectThemeOption.selectedIndex;
  //console.log(selectedOption);
  colorOptions.style.display = 'block';
//if the first option is selected, the label text changes and only valid options are displayed
  if (selectedOption == 1){
     colorLabel.textContent = 'Color: ';
     colorOptions.innerHTML = `
     <select id="color">
     <option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>
     <option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option> 
     <option value="gold">Gold (JS Puns shirt only)</option> 
   </select>`
   //if the second option is selected, the label text changes and only valid options are displayed
  } else if (selectedOption == 2){
   colorLabel.textContent = 'Color: ';
   colorOptions.innerHTML = `
   <select id="color">
              <option value="tomato">Tomato (I &#9829; JS shirt only)</option>
              <option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option> 
              <option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option> 
            </select>`

  }
});


/*
Activity section
*/

//creates a new footer element to store the activity cost and appends it to the DOM
let totalCostElement = document.createElement('footer');
let  activitiesSection = document.querySelector('.activities');
activitiesSection.appendChild(totalCostElement);

//creates a variable to store the cost
let totalActivityCost = 0;

//adds an event listener to listen for changes to the checkboxes
activitiesSection.addEventListener('change', (event) => {
  //gets the value of the selected option
  let selectedOptionTwo = event.target;
  //console.log(selectedOptionTwo);
  
  //gets the price of the selected activities
  let dataCost = event.target.getAttribute("data-cost");
  let dataCostNumber = parseInt(dataCost);
  //console.log(dataCostNumber);
  //console.log(typeof dataCostNumber);

  //if a box is selected, the cost gets added to the total, which is then added to the DOM
  //if a box is deselected, the cost is subtracted
  if (event.target.checked) {
   totalActivityCost += dataCostNumber;
   //console.log(totalActivityCost);
   totalCostElement.textContent = `Total Cost: $${totalActivityCost}`;
  } else {
  totalActivityCost -= dataCostNumber;
  //console.log(totalActivityCost);
  totalCostElement.textContent = `Total Cost: $${totalActivityCost}`;
  }
  
  //finds the date and time of the selected element
  let selectedDateAndTime = event.target.getAttribute("data-day-and-time");
  //console.log(selectedDateAndTime);
 
  //got the elements.length part here: http://www.randomsnippets.com/2008/05/15/how-to-loop-through-checkboxes-or-radio-button-groups-via-javascript/
  for (let i = 0; i < activitiesSection.elements.length; i+=1 ){
    //variable to store all options to loop over
    let inputOption = activitiesSection.elements;
    if (selectedDateAndTime == inputOption[i].getAttribute("data-day-and-time")){
      if (selectedOptionTwo !== inputOption[i] && event.target.checked){
      inputOption[i].disabled = true;
     // console.log(inputOption[i]);
      
    } else {
     inputOption[i].disabled = false;
   //console.log(inputOption[i]);
    }
  }
  }
});


/*
Payment Section 
*/

//hides the select payment method option
let selectPayment = document.getElementById('payment');
//added this line for re-review so the user can see the credit card option is pre-selected, also changed line 145 and 146 for this. 
selectPayment.firstElementChild.textContent = 'Credit Card';
selectPayment.firstElementChild.style.display = 'none';
 
//creates a variable for the credit card div which is visible by default
let creditCardDiv = document.getElementById('credit-card');

//creates a variable for the paypal div and hides it initially
let payPalDiv = document.getElementById('paypal');
payPalDiv.style.display = 'none';

//creates a variable for the bitcoin div and hides it initially
let bitCoinDiv = document.getElementById('bitcoin');
bitCoinDiv.style.display = 'none';

//variable to store which payment method was selected globally, for validation purposes later
//set it to credit card while updating my code for re-review
let pickedPayment = 'credit card';

//adds an event listener to the payment method select menu. Hides the options that are not selected
selectPayment.addEventListener('change', (event) => {
  if (event.target.value === "credit card"){
    creditCardDiv.style.display = 'block';
    payPalDiv.style.display = 'none';
    bitCoinDiv.style.display = 'none';
    pickedPayment = 'credit card';
  } else if (event.target.value === "paypal") {
    creditCardDiv.style.display = 'none';
    payPalDiv.style.display = 'block';
    bitCoinDiv.style.display = 'none';
    pickedPayment = 'paypal';
  } else if (event.target.value === "bitcoin") {
    creditCardDiv.style.display = 'none';
    payPalDiv.style.display = 'none';
    bitCoinDiv.style.display = 'block';
    pickedPayment = 'bitcoin';
  }
});


/*
Validation Section 
*/

//I'm using the validation I learned in the coursework as a basis to validate the username and email in real time, while they are being entered by the user

//username section
//gets the username and label elements, sets the border color to red with a validation warning

let usernameInput = document.getElementById("name");

//creates a regex to test a name, allows for middle names or hyphenated last names
function isValidUsername(username) {
  return /^[A-Za-z]* ?[A-Za-z]*[ -]?[A-Za-z]*?$/.test(username);
}
//console.log(isValidUsername(username));


function showOrHideTipUsername(show) {
  if (show) {
    usernameInput.style.borderColor = "red";
    usernameInput.style.color = "red";
    let usernameLabel = usernameInput.previousElementSibling;
    usernameLabel.textContent = "Name: Please enter upper and lower case letters, hyphens and spaces only";
  } else {
    usernameInput.style.borderColor = "black";
    usernameInput.style.color = "black"
    let usernameLabel = usernameInput.previousElementSibling;
    usernameLabel.textContent = "Name: ";
  }
}

function createListenerUsername(validator) {
  return e => {
    const text = e.target.value;
    const valid = validator(text);
    const showTip = text !== "" && !valid;
    showOrHideTipUsername(showTip);
  };
}

let usernameListener = usernameInput.addEventListener("input", createListenerUsername(isValidUsername));
console.log(usernameListener);


//email section 

let emailInput = document.getElementById("mail");

//creates a regex to test an email
function isValidEmail(email) {
  return /[^@]+@[^@.]+\.[a-z]+$/i.test(email);
}

function showOrHideTipEmail(show) {
  if (show) {
    emailInput.style.borderColor = "red";
    emailInput.style.color = "red";
    let emailLabel = emailInput.previousElementSibling;
    emailLabel.textContent = "Email: Please enter a valid email address";
  } else {
    emailInput.style.borderColor = "black";
    emailInput.style.color = "black"
    let emailLabel = emailInput.previousElementSibling;
    emailLabel.textContent = "Email: ";
  }
}

function createListenerEmail(validator) {
  return e => {
    const text = e.target.value;
    const valid = validator(text);
    const showTip = text !== "" && !valid;
    showOrHideTipEmail(showTip);
  };
}

let emailListener = emailInput.addEventListener("input", createListenerEmail(isValidEmail));


//activities section 
//remove checked attribute from first item in activities list

//got the basic idea of how to check if any box is checked here: https://stackoverflow.com/questions/9119407/how-do-i-check-if-any-checkboxes-at-all-on-the-page-are-checked

function anyCheckbox() {
    let inputElements = document.getElementsByTagName("input");
    //console.log(inputElements);
    for (let i = 0; i < inputElements.length; i++)
        if (inputElements[i].type == "checkbox")
            if (inputElements[i].checked)
                return true;
    return false;
}

//console.log(anyCheckbox());

//credit card section 

//CC number validator
let ccNumber = document.querySelector('#cc-num');
function isValidCCNumber(numberonCC) {     
  return /^[0-9]{13,16}$/.test(numberonCC);
 }

//cvv validator
let cvvNumber = document.getElementById('cvv');
function isValidCVVNumber(numberCVV) {     
 return /^[0-9]{3}$/.test(numberCVV);
 }

 //zip validator
let zipCode = document.getElementById('zip');
function isValidZip(zipNumber){
 return /^[0-9]{5}$/.test(zipNumber);
};

//submit section
//got the idea of how to get target the submit button here: https://stackoverflow.com/questions/5897122/accessing-elements-by-type-in-javascript
let submitButton = document.querySelector('button');
console.log(submitButton);

submitButton.addEventListener("click", (e) => {
  //checks if a valid username was entered, the error message is displayed live while entering, code for that is above, prevents default if false
  let usernameValue = usernameInput.value;
  if (!isValidUsername(usernameValue)){
    event.preventDefault();
  }
  //if the length of the name is smaller than 1, a warning appears
  if (usernameValue.length < 1){
    usernameInput.previousElementSibling.textContent = 'A name is required';
    usernameInput.style.borderColor = 'red';
    e.preventDefault();
  }
  //checks if a valid email was entered, the error message is displayed live while entering, code for that is above, prevents default if false
 let emailValue = emailInput.value;
 if (!isValidEmail(emailValue)) {
  e.preventDefault();
 };
 //if the length of the email is smaller than 1, a warning appears
 if (emailValue.length < 1){
  emailInput.previousElementSibling.textContent = 'An email address is required';
  emailInput.style.borderColor = 'red';
  e.preventDefault();

 };
  //check if any checkbox has been checked, if no box was checked, prevents default, adds a message
  if (!anyCheckbox()){
    let activityWarning = document.createElement('span');
    activityWarning.textContent = 'Please choose at least one activity';
    activityWarning.style.color = 'red';
    activitiesSection.appendChild(activityWarning);
    e.preventDefault();
  };
  //if selected payment was the credit card, checks the entered number, provides an error if false
  if (pickedPayment == 'credit card') {
    //console.log('hi');
    let ccValue = ccNumber.value;
    if (!isValidCCNumber(ccValue)){
    ccNumber.style.borderColor = 'red';
    ccNumber.previousElementSibling.textContent = 'Card Number: Please enter a valid credit card number, 13 to 16 digits long.'
     e.preventDefault();
    }
  };
  //if the picked payment method is the credit card, the CVV is checked, depending on the error, the message changes
  if (pickedPayment == 'credit card') {
    //console.log('sup');
    let cvvValue = cvvNumber.value;
    if (!isValidCVVNumber(cvvValue)){
      cvvNumber.style.borderColor = 'red';
      if (cvvValue.length > 3){
      cvvNumber.previousElementSibling.textContent = 'CVV: This number can only have 3 digits.'
      e.preventDefault();
      } else if (cvvValue.length < 3){
       cvvNumber.previousElementSibling.textContent = 'CVV: This number has to have 3 digits.'
       e.preventDefault();
      }
      e.preventDefault();
    } 
  };
  //if the picked payment method is the credit card, the zip is checked, provides an error if false
  if (pickedPayment == 'credit card'){
    let zipValue = zipCode.value;
    if (!isValidZip(zipValue)){
      zipCode.style.borderColor = 'red';
      zipCode.previousElementSibling.textContent = 'Zip Code: This number can have 5 digits only.'
      e.preventDefault();
    }
  };
});

