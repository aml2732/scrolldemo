//window.scrollTo(0,0)
var setupComplete = false;
var scrollLock = false;
var totalNumberOfSections = 0;
var oldScrollPosition = window.pageYOffset || document.documentElement.scrollTop || 0;
console.log("-- initial oldScrollPosition", oldScrollPosition)
//var oldScroll = window.scrollY;
const sectionPrefix = "scrolldemo-section-"
const activeClassName = "scrolldemo-section-active"

function scrollIdIntoView(id){
  console.log('got here to scrollIdIntoView', id)
  var elementToScrollTo = document.getElementById(id);
  return elementToScrollTo.scrollIntoView({behavior: "smooth"});
}

function scrolldemoScrollIntoView(amount){
  //Find OLD active element
  let oldActiveElement = document.getElementsByClassName(activeClassName)[0];
  console.log("oldActiveElement",oldActiveElement)
  let oldId = oldActiveElement.id;
  let oldIndex = oldId.replace(sectionPrefix, "")
  //Get the element of oldActiveIndex+amount
  let oldIndexAsInteger = parseInt(oldIndex);
  let newIndexAsInteger = oldIndexAsInteger + amount;
  console.log("-- newIndexAsInteger", newIndexAsInteger, ">",totalNumberOfSections);
  if(newIndexAsInteger>=totalNumberOfSections){
    console.log("last section already reached; Cannot scroll further")
    return;
  }
  if(newIndexAsInteger<0){
    console.log("first section already reached; cannot scroll further up")
    return;
  }
  oldActiveElement.classList.remove(activeClassName)
  let idToQuery = sectionPrefix + newIndexAsInteger;
  //Scroll to that bad boy.
  console.log("id to query", idToQuery)
  let newActiveElement = document.getElementById(idToQuery);
  newActiveElement.classList.add(activeClassName)
  scrollIdIntoView(idToQuery)
}


function initializeScrolldemo(){
  if(!setupComplete){
    //Give scrolldemo-sections incrementable identifiers
    var sectionList = document.getElementsByClassName("scrolldemo-section");
    totalNumberOfSections = sectionList.length;
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

  //edit onscroll behavior to do what the buttons do
  /*document.onscroll = function scroll(event) {
    event.preventDefault();
    if(scrollLock){return;}
    scrollLock = true;
    if(window.scrollY<oldScroll){//prev
      scrolldemoScrollIntoView(-1)
    }else{//next
      scrolldemoScrollIntoView(1);
    }
    setTimeout(function(){scrollLock = false;},2000)

 }*/

/* window.onscroll = function(event){
   if(scrollLock){
     return;
   }
   scrollLock = true;
   let newScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
   console.log("new vs old", newScrollPosition, oldScrollPosition)
   if (newScrollPosition > oldScrollPosition){
     scrolldemoScrollIntoView(1);
  } else if(newScrollPosition <oldScrollPosition) {
     scrolldemoScrollIntoView(-1);
  }
  else{
    setTimeout(function(){scrollLock = false;},2000)
    return; //equal no op
  }
  oldScrollPosition = newScrollPosition <= 0 ? 0 : newScrollPosition;
  setTimeout(function(){scrollLock = false;},2000)
  event.preventDefault();
}*/

  document.addEventListener('keydown', function (event){
    console.log("got to onKeydown", event)
    switch (event.key) {
      case "ArrowUp":
        event.preventDefault()
        scrolldemoScrollIntoView(-1);
        break;
      case "ArrowDown":
        event.preventDefault()
        scrolldemoScrollIntoView(1);
        break;
    }
  })


  setupComplete = true;
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
