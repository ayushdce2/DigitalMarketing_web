// design debugging STARTS---
var all_div = document.getElementsByTagName("div");

  //console.log(all_div.length);

var border_on = () => {
  let i;

  for (i = 0; i < all_div.length; i++) {
    all_div[i].style.border = "1px solid red";
    //alert(i);
  }
};

  //border_on();

// design debugging ENDS---