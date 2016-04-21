var myArray = ['a', 'b', 'c', 'd'];




function addArrayToPage(array) {
  // clear the page
  document.body.innerHTML = '';
  array.forEach(function (item) {
    // create the div holding the item
    var myItemContainer = document.createElement('div');
    myItemContainer.textContent = item;
    // add the click event
    addClickToRemove(myItemContainer);
    // add it to the page
    document.body.appendChild(myItemContainer);
  });
}

function addClickToRemove(element) {
  element.addEventListener('click', function (evt) {
    console.log(evt);
    if (evt.detail === 2) {
      // double clicked
      var itemIndex = myArray.indexOf(this.textContent);
      // remove the item
      myArray.splice(itemIndex, 1);
      addArrayToPage(myArray);
    }
  });
}

addArrayToPage(myArray);