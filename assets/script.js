function GetYearly() {
  let year = new Date().getFullYear();
  let result = document.getElementsByClassName("yearly")
  result[0].innerHTML = year;
}

GetYearly()