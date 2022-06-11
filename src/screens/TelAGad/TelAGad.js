function updatemenu() {
  let element = document.getElementById("menu");

  if (x.matches) {
    document.getElementById("menu").style.width = "99%";
  }
  if (document.getElementById("responsive-menu").checked == true) {
    document.getElementById("menu").style.borderBottomRightRadius = "0";
    document.getElementById("menu").style.borderBottomLeftRadius = "0";
    element.appendChild(element).classList.add("fooMenu");
  } else {
    document.getElementById("menu").style.borderRadius = "10px";
    // if (x.matches) { // If media query matches
    // alert("It is in else")
    document.getElementById("menu").style.width = "35px";
    // } else {
    // document.getElementById('menu').style.width = '35px';

    // }
  }
}

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    document.getElementById("menu").style.width = "35px";
  } else {
    document.getElementById("menu").style.width = "99%";
  }
}
let x = window.matchMedia("(max-width: 842px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes\
// changeBgImage = (id, value) => {
//         let count = Math.floor(id)

//         for (let i = 1; i <= value; i++) {
//             id = count + "." + i;

//             // alert(id)
//             document.getElementById(id).style.backgroundImage = 'url("../Images/goldStar.png")'
//         }
//     }
// restoreBgImage = (id, value, flag) => {

//     let count = Math.floor(id)

//     for (let i = 1; i <= value; i++) {
//         id = count + "." + i;

//         // alert(id)
//         document.getElementById(id).style.backgroundImage = 'url("../Images/emptyStar.png")'
//     }
// }
setBgImage = (id, value) => {
  let count = Math.floor(id);
  for (let i = 1; i <= value; i++) {
    id = count + "." + i;

    document.getElementById(id).style.backgroundImage =
      'url("../../Images/Icons/goldStar.png")';
  }
  // alert("out" + id)
  value = Number(value);
  value += 1;
  for (let j = value; j <= 5; j++) {
    id = count + "." + j;
    // alert(typeof(value))

    // alert("in")
    document.getElementById(id).style.backgroundImage =
      'url("../../Images/Icons/emptyStar.png")';
  }
};
boughtFlag = (id) => {
  document.getElementById(id).style.backgroundColor = "rgb(6, 155, 6)";
};
