//give focus to the first field
document.getElementById("name").focus();

//selects and hides the other job role text field when javascript is active
let otherJobRole = document.getElementById("other-title");
otherJobRole.style.display = 'none';

//if the other option is selected, the other job role field appears
//I got the basic idea for the code here: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
//currently automatically switches to the other option, no matter which option is selected
const selectFields = document.querySelector('#title');
selectFields.addEventListener('change', (event) => {
    if (selectFields.value = "other"){
    otherJobRole.style.display = 'block';
    }  else if (selectFields.value != 'other') {
        otherJobRole.style.display = 'none';
        }
  });

//