function activeBTn(BtnsID, index) {
  let header = document.getElementById(BtnsID);

  let Button_group = header.querySelectorAll(".btn");
  // console.log(Button_group);

  let Active_Btns = header.getElementsByClassName("active");
  for (const Active_Btn of Active_Btns) {
    // console.log("test2");

    Active_Btn.className = Active_Btn.className.replace("active", "");
  }

  // console.log("test");

  Button_group[index].className += " active";
}

export { activeBTn };
