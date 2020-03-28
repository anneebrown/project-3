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
let selectThemeOption = document.getElementById('design').firstElementChild;
selectThemeOption.style.display = 'none';

//Update the “Color” field to read “Please select a T-shirt theme”.

//Hide the colors in the “Color” drop down menu.

//add an event listener to listen for changes, use an if clause to determine what to display

