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

//T-shirt section

//Hide the “Select Theme” `option` element in the “Design” menu.
let selectThemeOption = document.getElementById('design');
selectThemeOption.firstElementChild.style.display = 'none';

//Update the “Color” field to read “Please select a T-shirt theme” until a theme is selected
const colorOptions = document.getElementById('color');
colorOptions.style.display = 'none';
let colorLabel = document.getElementById('colors-js-puns').firstElementChild;
colorLabel.textContent = 'Please select a T-shirt theme';

//add an event listener to listen for changes, use an if clause to determine what to display, change the label to say "Color:"
// try event.target.value too in the if clause ?
//
selectThemeOption.addEventListener('change', (event) => {
  //gets the index value of the selected field to be able to target it with the if clauses, idea from here: https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedIndex
  let selectedOption = selectThemeOption.selectedIndex;
  console.log(selectedOption);
  colorOptions.style.display = 'block';
  if (selectedOption == 1){
     colorLabel.textContent = 'Color: ';
     colorOptions.innerHTML = `
     <select id="color">
     <option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>
     <option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option> 
     <option value="gold">Gold (JS Puns shirt only)</option> 
   </select>`
   
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


//activity section

