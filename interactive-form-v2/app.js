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

// The goal for the t-shirt section is to filter the available "Color" options by the selected theme in
// the "Design" field. Doing this ensures that the user cannot select an invalid combination of
// values for the "Design" and "Color" fields.
// When the form is initially loaded, we need to update the "Design" and "Color" fields so that it's
// clear to the user that they need to select a theme before selecting a color. Use javaScript to:
// ● Hide the “Select Theme” `option` element in the “Design” menu.
// ● Update the “Color” field to read “Please select a T-shirt theme”.
// ● Hide the colors in the “Color” drop down menu.
// ● NOTE: Be sure to check out the helpful links in the second section of this Study Guide if
// you’re unsure of how to accomplish these steps.
// Then, when one of the two themes is selected, only the appropriate colors should show in the
// “Color” drop down menu, and the “Color” field should update to the first available color. You’ll
// use a `change` event listener on the “Design” menu `select` element to listen for changes. And
// inside the event listener, you’ll use a conditional to determine what to hide, show and update.
// ● If “js puns” is selected, hide the three “heart js” option elements in the “Color” drop
// down menu, show the three “js puns” option elements, and update the “Color” field to
// the first available color.
// ● If “heart js” is selected, hide the three “js puns” option elements in the “Color” drop
// down menu, show the three “heart js” option elements, and update the “Color” field to
// the first available color.