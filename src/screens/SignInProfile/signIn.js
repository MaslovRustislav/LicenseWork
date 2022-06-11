checkEmail = () => {
  let tag = document.createElement("p");
  let text = document.createTextNode(
    "*Inalid email .Example'myName@index.com'"
  );
  tag.appendChild(text);
  let element = document.getElementById("newE");
  let Eval = document.getElementById("email").value;
  let regExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!regExp.test(Eval)) {
    document.getElementById("email").classList.add("fooInvalid");
    if (element.appendChild(tag))
      element.appendChild(tag).classList.add("fooPInvalid");
  } else {
    document.getElementById("email").classList.add("fooValid");
    element.parentNode.removeChild(element);
  }
};
checkPass = () => {
  let tag = document.createElement("p");
  let text = document.createTextNode(
    "*Minimum eight characters, at least one letter and one number:"
  );
  tag.appendChild(text);
  let element = document.getElementById("newP");
  let Pval = document.getElementById("pass").value;
  let regExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!regExp.test(Pval)) {
    document.getElementById("pass").classList.add("fooInvalid");
    if (element.appendChild(tag))
      element.appendChild(tag).classList.add("fooPInvalid");
    document.getElementById("pass").value = "";
  } else {
    document.getElementById("pass").classList.add("fooValid");
    element.parentNode.removeChild(element);
  }
};
checkAgainPass = () => {
  let tag = document.createElement("p");
  let text = document.createTextNode("*Passwords doesn't matches");
  tag.appendChild(text);
  let element = document.getElementById("newRP");
  let Pval = document.getElementById("pass").value;
  let PAval = document.getElementById("repPass").value;
  if (Pval != PAval) {
    // alert("Pval = " + Pval + "PAval" + PAval)
    document.getElementById("repPass").classList.add("fooInvalid");
    if (element.appendChild(tag))
      element.appendChild(tag).classList.add("fooPInvalid");
  } else {
    document.getElementById("repPass").classList.add("fooValid");
    element.parentNode.removeChild(element);
  }
};
checkTel = () => {
  let tag = document.createElement("p");
  let text = document.createTextNode(
    "*Your tel should be like this '+373611-390-76|373-611-39-076"
  );
  tag.appendChild(text);
  let element = document.getElementById("newT");
  let Tval = document.getElementById("tel").value;
  let regExp = /^(\+[1-9][0-9]*)?[0]?[1-9][0-9\-]*$/;
  if (!regExp.test(Tval)) {
    document.getElementById("tel").classList.add("fooInvalid");
    if (element.appendChild(tag))
      element.appendChild(tag).classList.add("fooPInvalid");
    document.getElementById("tel").value = "";
  } else {
    document.getElementById("tel").classList.add("fooValid");
    element.parentNode.removeChild(element);
  }
};
