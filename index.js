var setupComplete = false;
const sectionPrefix = "scrolldemo-section-"
const activeClassName = "scrolldemo-section-active"


function initializeScrolldemo(){
  if(!setupComplete){
    //Give scrolldemo-sections incrementable identifiers
    var sectionList = document.getElementsByClassName("scrolldemo-section");
    let index =0;
    for(let element of sectionList){
      element.id = sectionPrefix+index
      if(index==0){
        element.classList.add(activeClassName)
      }
      index++;
    }

    //append next-previous-buttons
    var attachPoint = document.getElementById("scrolldemo-container");
    var buttonContainer = document.createElement("div")
    buttonContainer.classList.add('scrolldemo-button-container')
    buttonContainer.innerHTML = '<div class="scrolldemo-button scrolldemo-button-prev" onclick="navigationButtonClick(\'prev\')">&#9650;</div><div class="scrolldemo-button scrolldemo-button-next"  onclick="navigationButtonClick(\'next\')">&#9660;</div>'
    attachPoint.append(buttonContainer)
  }
  setupComplete = true;
}

function scrollIdIntoView(id){
  var elementToScrollTo = document.getElementById(id);
  elementToScrollTo.scrollIntoView({behavior: "smooth"});
}

function scrolldemoScrollIntoView(amount){
  //Find OLD active element
  let oldActiveElement = document.getElementsByClassName(activeClassName)[0];
  let oldId = oldActiveElement.id;
  let oldIndex = oldId.replace(sectionPrefix, "")
  oldActiveElement.classList.remove(activeClassName)
  //Get the element of oldActiveIndex+amount
  let oldIndexAsInteger = parseInt(oldIndex);
  let newIndexAsInteger = oldIndexAsInteger + amount;
  let idToQuery = sectionPrefix + newIndexAsInteger;
  //Scroll to that bad boy.
  let newActiveElement = document.getElementById(idToQuery);
  newActiveElement.classList.add(activeClassName)
  scrollIdIntoView(idToQuery)
}

function navigationButtonClick(action){
  const PREV = "prev";
  const NEXT = "next";
  switch (action){
    case PREV:
      scrolldemoScrollIntoView(-1);
      break;
    case NEXT:
      scrolldemoScrollIntoView(1);
      break;
    default:
      console.log("the function navigationbuttonclick did not recieve an action that it recognized. Current actions are 'prev' and 'next'...")
  }

}

initializeScrolldemo()
