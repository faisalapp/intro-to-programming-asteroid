// let projectUrl = "https://github.com/";
let projectUrl = "https://www.google.com/";
let errorFetch = 'Fetching API is not successfull'


// fetch('https://api.github.com/users/faisalapp')
fetch('https://api.github.com/users/faisalapp/repos')

  .then(response => response.json())
  .then(data => {

    // console.log(data[0].html_url) // Prints result from `response.json()` in getRequest


    // console.log("\n",data); // array of film title API
    for (let i = 0; i < data.length; i++) {
      // console.log(data[i].full_name) // Prints result from `response.json()` in getRequest
      if (data[i].full_name === "faisalapp/intro-to-programming-asteroid") {
        projectUrl = data[i].html_url

      }
    }


    const projectElement = document.getElementById('projectId');
    projectElement.setAttribute("href", projectUrl);



  })
  .catch(error => console.error(errorFetch))


addingFooter();


function addingFooter() {

  /// adding footer ///

  let footerElement = document.createElement("footer");
  footerElement.id = 'footerId';


  let paraElement = document.createElement("div");
  paraElement.innerHTML = '© Muhammad Faisal 2022';
  footerElement.appendChild(paraElement);

  let anchorElement = document.createElement("a");
  anchorElement.setAttribute("href", "https://twitter.com/");
  anchorElement.setAttribute("target", "_blank");
  anchorElement.style.marginLeft = "65%";


  let imageElement = document.createElement("img");
  imageElement.setAttribute("src", "twitter1.png");
  imageElement.setAttribute("width", "30");
  imageElement.setAttribute("height", "30");

  anchorElement.appendChild(imageElement);
  footerElement.appendChild(anchorElement);

  anchorElement = document.createElement("a");
  anchorElement.setAttribute("href", 'https://github.com/faisalapp');
  anchorElement.setAttribute("target", "_blank");
  anchorElement.style.marginLeft = "2px";


  imageElement = document.createElement("img");
  imageElement.setAttribute("src", "github1.png");
  imageElement.setAttribute("width", "30");
  imageElement.setAttribute("height", "30");

  anchorElement.appendChild(imageElement);
  footerElement.appendChild(anchorElement);


  anchorElement = document.createElement("a");
  anchorElement.setAttribute("href", "https://www.linkedin.com/in/muhammad-faisal-pcb/");
  anchorElement.setAttribute("target", "_blank");
  anchorElement.style.marginLeft = "2px";


  imageElement = document.createElement("img");
  imageElement.setAttribute("src", "linkedin1.png");
  imageElement.setAttribute("width", "30");
  imageElement.setAttribute("height", "30");
  footerElement.appendChild(imageElement);

  anchorElement.appendChild(imageElement);
  footerElement.appendChild(anchorElement);

  document.body.appendChild(footerElement);


  /// adding footer ///
}



/// adding skill section in styled grid layout

let gridArray = ['Operating System:', 'Windows 7 and Windows 10', 'Programming Language:',
  'C, Skill, Assembly, Javascript, HTML, CSS, Shell Scripting', 'Softwares/Framework:', 'MS Office, VS Code, GitHub'
]

let gridElement = document.getElementById('grid-id');


for (i = 0; i < gridArray.length; i++) {

  let divElement = document.createElement("div");
  divElement.innerHTML = gridArray[i];
  gridElement.appendChild(divElement);

}



/// adding skill section in styled grid layout



let divElementLocalCount = 0;



/// function for sumit button

const submit = document.getElementById('submit');

submit.addEventListener('click', () => {

  // document.getElementById('submit').onclick = function() {

  //console.log(document.querySelector(".firstName").value);
  //let firstNameElement = document.querySelector(".firstName");

  let firstNameElement = document.getElementById("firstName");

  let firstName = firstNameElement.value;

  let lastNameElement = document.getElementById("lastName");
  let lastName = lastNameElement.value;

  let emailAddressElement = document.getElementById("emailAddress");
  let emailAddress = emailAddressElement.value;

  firstNameElement.className = 'noerror';
  lastNameElement.className = 'noerror';
  emailAddressElement.className = 'noerror';

  /*
    let customMsgElement = document.getElementById("customMsg");
    let displayMsgElement = document.getElementById("displayMsg");

    customMsgElement.innerHTML = "";
    displayMsgElement.innerHTML = "";

    let paraElementTemp = document.getElementById("paraId");
    let editButtonElement = document.getElementById("editButtonId");
    let removeButtonElement = document.getElementById("removeButtonId");
  */

  /*

  if (paraElementTemp !== null) {
    paraElementTemp.remove();
    editButtonElement.remove();
    removeButtonElement.remove();

  }

*/


  if (!firstName || !lastName || !emailAddress) {
    alert("Fields cannot be blank. Please refer to missing values in red fields.");

    let arrayMissingIds = [];
    let index = -1;

    if (!firstName) {
      index++;
      arrayMissingIds[index] = firstNameElement;
    }

    if (!lastName) {
      index++;
      arrayMissingIds[index] = lastNameElement;
    }

    if (!emailAddress) {
      index++;
      arrayMissingIds[index] = emailAddressElement;
    }



    for (let i = 0; i < arrayMissingIds.length; i++)
      arrayMissingIds[i].className = "error";

  } else {


    divElementLocalCount++;
    // console.log('Count = ' + divElementLocalCount);


    let displayMsg = document.getElementById("textarea").value;
    // console.log('displayMsg = ' + document.getElementById("textarea"));
    document.getElementById("displayMsg").className = 'displayMsg';

    /// create parent element ///

    let divElementParent = document.createElement("div");

    divElementParent.setAttribute('id', 'divElementParent' + divElementLocalCount); // add 1/2/3
    // document.getElementById("user-section-id").appendChild(divElementParent);
    document.getElementById("user-section-id").prepend(divElementParent);

    /// display user message ///

    let textElement = document.createElement("div");
    textElement.setAttribute('id', 'paraId' + divElementLocalCount);
    textElement.style.lineHeight = '3';
    textElement.style.margin = "10px 200px 10px 10px";

    let textNode = document.createTextNode(displayMsg);
    textElement.appendChild(textNode);
    divElementParent.appendChild(textElement);
    // divElementParent.insertBefore(textElement,divElementParent.firstChild);



    /// display date and time ///

    textElement = document.createElement("div");
    textElement.setAttribute('id', 'dateId' + divElementLocalCount);
    textElement.style.fontSize = '12px';
    textElement.style.margin = "10px";
    textElement.setAttribute('class', 'wrapper');


    textNode = document.createTextNode(findCurrentTime() + ' from ' + firstName);
    textElement.appendChild(textNode);
    divElementParent.appendChild(textElement);


    /// display edit button ///

    let buttonElement = document.createElement("BUTTON");
    buttonElement.setAttribute('id', 'editButtonId' + divElementLocalCount);
    buttonElement.setAttribute('class', 'button-class');
    buttonElement.setAttribute('onclick', 'editFunction(this.id)');
    // buttonElement.setAttribute('class', 'wrapper');

    // buttonElement.style.marginLeft =  '75% auto';
    buttonElement.style.margin = "0px 0px 5px 85%";


    textNode = document.createTextNode('Edit');
    buttonElement.appendChild(textNode);
    // document.body.insertBefore(buttonElement, footerElement);
    divElementParent.appendChild(buttonElement);

    /// display remove button ///


    buttonElement = document.createElement("BUTTON");
    buttonElement.setAttribute('id', 'removeButtonId' + divElementLocalCount);
    buttonElement.setAttribute('class', 'button-class');
    // buttonElement.setAttribute('class', 'wrapper');
    buttonElement.setAttribute('onclick', 'removeFunction(this.id)');
    buttonElement.style.backgroundColor = 'red';
    buttonElement.style.marginLeft = '1%';
    // buttonElement.style.display =  'inline-block';

    textNode = document.createTextNode('Remove');
    buttonElement.appendChild(textNode);
    // document.body.insertBefore(buttonElement, footerElement);
    divElementParent.appendChild(buttonElement);


    let divElement = document.createElement("div");
    divElement.style.borderBottom = "5px dotted Maroon";
    divElement.style.margin = '5px';


    divElementParent.appendChild(divElement);


    // adding footer //






  }


});

//////////////////////////////////////////////////////


/// edit function ///

function editFunction(clickedId) {

  let firstNameElement = document.getElementById("firstName");
  let lastNameElement = document.getElementById("lastName");
  let emailAddressElement = document.getElementById("emailAddress");
  let textareaElement = document.getElementById("textarea");


  firstNameElement.disabled = true;
  lastNameElement.disabled = true;
  emailAddressElement.disabled = true;
  textareaElement.disabled = true;

  console.log(clickedId);
  let numId = clickedId[clickedId.length - 1];
  let paraId = 'paraId' + numId;


  let editButtonElement = document.getElementById(clickedId);
  divElementParent = editButtonElement.parentElement;
  editButtonElement.innerHTML = 'Save';
  editButtonElement.style.backgroundColor = '#04AA6D';
  editButtonElement.setAttribute('id', 'saveButtonId' + numId);
  editButtonElement.setAttribute('onclick', 'saveFunction(this.id)');

  let paraElement = document.getElementById(paraId); // make Id
  let displayMsg = paraElement.innerHTML;
  let inputElement = document.createElement("input");
  inputElement.setAttribute('id', paraId);

  inputElement.size = "110";
  inputElement.style.margin = "10px 200px 10px 10px";
  inputElement.value = displayMsg;

  divElementParent.replaceChild(inputElement, paraElement);

  inputElement.focus();



};

/// edit function ///



/// removing function ///

function removeFunction(clickedId) {
  console.log(clickedId);
  let removeButtonElement = document.getElementById(clickedId);
  divElementParent = removeButtonElement.parentElement;

  divElementParent.remove();

};

/// removing function ///

/// save function ///

function saveFunction(clickedId) {

  console.log(clickedId);
  let numId = clickedId[clickedId.length - 1];
  let paraId = 'paraId' + numId;

  let saveButtonElement = document.getElementById(clickedId);
  divElementParent = saveButtonElement.parentElement;


  let inputElement = document.getElementById(paraId); // make Id


  /// display user message ///

  let textElement = document.createElement("div");
  textElement.setAttribute('id', paraId);
  textElement.style.lineHeight = '3';
  textElement.style.margin = "10px 200px 10px 10px";

  let textNode = document.createTextNode(inputElement.value);
  textElement.appendChild(textNode);

  divElementParent.replaceChild(textElement, inputElement);

  /// display user message ///


  saveButtonElement.innerHTML = 'Edit';
  saveButtonElement.style.backgroundColor = 'blue';
  saveButtonElement.setAttribute('id', 'editButtonId' + numId);
  saveButtonElement.setAttribute('onclick', 'editFunction(this.id)');


  let dateId = 'dateId' + numId;
  let dateElement = document.getElementById(dateId);

  let firstNameElement = document.getElementById("firstName");
  let lastNameElement = document.getElementById("lastName");
  let emailAddressElement = document.getElementById("emailAddress");
  let textareaElement = document.getElementById("textarea");

  let firstName = firstNameElement.value;

  dateElement.innerHTML = findCurrentTime() + ' from ' + firstName;

  firstNameElement.disabled = false;
  lastNameElement.disabled = false;
  emailAddressElement.disabled = false;
  textareaElement.disabled = false;


};

/// save function ///


/// find time function ///

function findCurrentTime() {
  let today = new Date();
  let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  let time = (today.getHours() + 11) % 12 + 1 + ":" + today.getMinutes() + ":" + today.getSeconds();
  let suffix = (today.getHours() >= 12) ? 'PM' : 'AM';
  let currentTime = date + ', ' + time + ' ' + suffix;
  return currentTime;
}

/// find time function ///


/// star/rating function ///


function starFunction(clickedId) {

  let numId = clickedId[clickedId.length - 1];
  numId = parseInt(numId)
  starElement = document.getElementById(clickedId);
  let starClass = starElement.className;

  for (let i = 1; i <= 5; i++) {
    starId = 'starId' + i;
    starElement = document.getElementById(starId);

    if (i <= numId) {
      starElement.className = 'fa fa-star checked'
    } else {
      starElement.className = 'fa fa-star'
    }
  }

}

/// star/rating function ///
