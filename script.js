


let add = document.querySelector('.add'); // selects the add button
add.onclick = function() { // turn it into a on-click function
    let ol = document.querySelector('ol'); // selects the ordered list tag
    let li = document.createElement('li'); // creates a <li> tag
    ol.append(li); // adds the new li tag into the ordered list
    li.innerText = "French Fries" // assigns the new <li> tag with the string "French Fries"
}

