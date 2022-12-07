import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";
var swiper = new Swiper(".swiper-container", {
  grabCursor: true,
  // Default parameters
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

document.getElementById("theStory").style.color = "brown";
document.getElementById("theStory").style.borderBottomColor = "brown";
document.getElementById("theStory").style.borderBottomWidth = "4px";
document.getElementById("theStory1").style.cursor = "text";
let i = 1;
document.getElementById("menuIcon").addEventListener("click", (e) => {
  e.preventDefault();
  checkMenu();
});
document.getElementById("menuIcon2").addEventListener("click", (e) => {
  e.preventDefault();
  checkMenu2();
});
document.getElementById("Homes").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("headers").scrollIntoView({ block: 'end',  behavior: 'smooth' });
  checkMenu2();
});
document.getElementById("Contacts").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("footers").scrollIntoView({ block: 'end',  behavior: 'smooth' });
  checkMenu2();
});
document.getElementById("Abouts").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("theStoryMain").scrollIntoView({ block: 'start',  behavior: 'smooth' });
  checkMenu2();
  CheckInput();
});
document.getElementById("Galleries").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("GalleryMain").scrollIntoView({ block: 'start',  behavior: 'smooth' });
  checkMenu2();
});
document.getElementById("Reservations").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("Reservation").scrollIntoView({ block: 'start',  behavior: 'smooth' });
  checkMenu2();
});
document.getElementById("Abouts2").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("theStoryMain").scrollIntoView({ block: 'end',  behavior: 'smooth' });
  CheckInput();
});
document.getElementById("Galleries2").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("GalleryMain").scrollIntoView({ block: 'end',  behavior: 'smooth' });
});
document.getElementById("Reservations2").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("Reservation").scrollIntoView({ block: 'end',  behavior: 'smooth' });
});
document.getElementById("Contacts2").addEventListener("click", (e) => {
  e.preventDefault();
  document.body.scrollIntoView({ block: 'end',  behavior: 'smooth' });
});
document.getElementById("theStory").addEventListener("click", (e) => {
  e.preventDefault();
  CheckInput();
  return (i = 1);
});
document.getElementById("theTeam").addEventListener("click", (e) => {
  e.preventDefault();
  CheckInput2();
  return (i = 2);
});
document.getElementById("pressAwards").addEventListener("click", (e) => {
  e.preventDefault();
  CheckInput3();
  return (i = 3);
});
document.getElementById("theStory").addEventListener("mouseover", (e) => {
  e.preventDefault();
  CheckInput11();
});
document.getElementById("theTeam").addEventListener("mouseover", (e) => {
  e.preventDefault();
  CheckInput22();
});
document.getElementById("pressAwards").addEventListener("mouseover", (e) => {
  e.preventDefault();
  CheckInput33();
});
document.getElementById("theStory").addEventListener("mouseout", (e) => {
  e.preventDefault();
  CheckInput111();
});
document.getElementById("theTeam").addEventListener("mouseout", (e) => {
  e.preventDefault();
  CheckInput222();
});
document.getElementById("pressAwards").addEventListener("mouseout", (e) => {
  e.preventDefault();
  CheckInput333();
});

window.addEventListener("resize", (e) => {
  e.preventDefault();
  let widthStoryMain = document.getElementById("theStoryMain").offsetWidth;
  if (widthStoryMain < 1024) {
    document.getElementById("theStoryMain").classList.remove("h-[1000px]");
    document.getElementById("awardsLg").classList.add("h-[1000px]");
  } else {
    document.getElementById("theStoryMain").classList.add("h-[1000px]");
    document.getElementById("awardsLg").classList.remove("h-[1000px]");
  }
  if (widthStoryMain < 640) {
    document.getElementById("welcome").classList.add("h-[850px]");
  } else {
    document.getElementById("welcome").classList.remove("h-[850px]");
  }
});
function checkMenu() {
  document.getElementById("menuIcon").classList.add("hidden");
  document.getElementById("Menu").classList.remove("hidden");
  document.getElementById("menuIcon2").classList.remove("hidden");
}
function checkMenu2() {
  document.getElementById("menuIcon2").classList.add("hidden");
  document.getElementById("Menu").classList.add("hidden");
  document.getElementById("menuIcon").classList.remove("hidden");
}
function CheckInput() {
  document.getElementById("theStory1").style.cursor = "text";
  document.getElementById("theTeam1").style.cursor = "pointer";
  document.getElementById("pressAwards1").style.cursor = "pointer";
  document.getElementById("theStory").style.borderBottomColor = "brown";
  document.getElementById("theTeam").style.borderBottomColor = "white";
  document.getElementById("theStory").style.borderBottomWidth = "4px";
  document.getElementById("pressAwards").style.borderBottomColor = "white";
  document.getElementById("theTeam").style.color = "";
  document.getElementById("theStory").style.color = "brown";
  document.getElementById("pressAwards").style.color = "";
  document.getElementById("welcome").style.display = "flex";
  document.getElementById("Chefs").style.display = "none";
  document.getElementById("Awards").style.display = "none";
  let widthStoryMain = document.getElementById("theStoryMain").offsetWidth;
  if (widthStoryMain < 640) {
    document.getElementById("welcome").classList.add("h-[850px]");
  } else {
    document.getElementById("welcome").classList.remove("h-[850px]");
  }
}
function CheckInput2() {
  document.getElementById("theStory1").style.cursor = "pointer";
  document.getElementById("theTeam1").style.cursor = "text";
  document.getElementById("pressAwards1").style.cursor = "pointer";
  document.getElementById("theTeam").style.borderBottomColor = "brown";
  document.getElementById("theTeam").style.borderBottomWidth = "4px";
  document.getElementById("theStory").style.borderBottomColor = "white";
  document.getElementById("pressAwards").style.borderBottomColor = "white";
  document.getElementById("theTeam").style.color = "brown";
  document.getElementById("theStory").style.color = "black";
  document.getElementById("pressAwards").style.color = "";
  document.getElementById("welcome").style.display = "none";
  document.getElementById("Chefs").style.display = "flex";
  document.getElementById("Awards").style.display = "none";
  let widthStoryMain = document.getElementById("theStoryMain").offsetWidth;
  if (widthStoryMain > 1024) {
    document.getElementById("theStoryMain").classList.add("h-[1000px]");
  } else {
    document.getElementById("theStoryMain").classList.remove("h-[1000px]");
  }
}
function CheckInput3() {
  document.getElementById("theStory1").style.cursor = "pointer";
  document.getElementById("theTeam1").style.cursor = "pointer";
  document.getElementById("pressAwards1").style.cursor = "text";
  document.getElementById("pressAwards").style.borderBottomColor = "brown";
  document.getElementById("theTeam").style.borderBottomColor = "white";
  document.getElementById("theStory").style.borderBottomColor = "white";
  document.getElementById("pressAwards").style.borderBottomWidth = "4px";
  document.getElementById("theTeam").style.color = "";
  document.getElementById("theStory").style.color = "black";
  document.getElementById("pressAwards").style.color = "brown";
  document.getElementById("welcome").style.display = "none";
  document.getElementById("Chefs").style.display = "none";
  document.getElementById("Awards").style.display = "flex";
  let widthStoryMain = document.getElementById("theStoryMain").offsetWidth;
  if (widthStoryMain < 1024) {
    document.getElementById("awardsLg").classList.add("h-[1000px]");
  } else {
    document.getElementById("awardsLg").classList.remove("h-[1000px]");
  }
}
function CheckInput11() {
  if (i == 1) {
    document.getElementById("theTeam").style.borderBottomColor = "white";
    document.getElementById("pressAwards").style.borderBottomColor = "white";
    document.getElementById("theTeam").style.color = "";
    document.getElementById("pressAwards").style.color = "";
  } else if (i == 2) {
    document.getElementById("theStory").style.borderBottomColor = "brown";
    document.getElementById("theStory").style.borderBottomWidth = "4px";
    document.getElementById("pressAwards").style.borderBottomColor = "white";
    document.getElementById("theStory").style.color = "brown";
    document.getElementById("pressAwards").style.color = "";
  } else if (i == 3) {
    document.getElementById("theStory").style.borderBottomColor = "brown";
    document.getElementById("theTeam").style.borderBottomColor = "white";
    document.getElementById("theStory").style.borderBottomWidth = "4px";
    document.getElementById("theTeam").style.color = "";
    document.getElementById("theStory").style.color = "brown";
  }
}
function CheckInput22() {
  if (i == 1) {
    document.getElementById("theTeam").style.borderBottomColor = "brown";
    document.getElementById("theTeam").style.borderBottomWidth = "4px";
    document.getElementById("pressAwards").style.borderBottomColor = "white";
    document.getElementById("theTeam").style.color = "brown";
    document.getElementById("pressAwards").style.color = "";
  } else if (i == 2) {
    document.getElementById("pressAwards").style.borderBottomColor = "white";
    document.getElementById("theStory").style.borderBottomColor = "white";
    document.getElementById("theStory").style.color = "black";
    document.getElementById("pressAwards").style.color = "";
  } else if (i == 3) {
    document.getElementById("theTeam").style.borderBottomColor = "brown";
    document.getElementById("theStory").style.borderBottomColor = "white";
    document.getElementById("theTeam").style.borderBottomWidth = "4px";
    document.getElementById("theStory").style.color = "black";
    document.getElementById("theTeam").style.color = "brown";
  }
}
function CheckInput33() {
  if (i == 1) {
    document.getElementById("pressAwards").style.borderBottomColor = "brown";
    document.getElementById("pressAwards").style.borderBottomWidth = "4px";
    document.getElementById("theTeam").style.borderBottomColor = "white";
    document.getElementById("pressAwards").style.color = "brown";
    document.getElementById("theTeam").style.color = "";
  } else if (i == 2) {
    document.getElementById("pressAwards").style.borderBottomColor = "brown";
    document.getElementById("theStory").style.borderBottomColor = "white";
    document.getElementById("pressAwards").style.borderBottomWidth = "4px";
    document.getElementById("theStory").style.color = "black";
    document.getElementById("pressAwards").style.color = "brown";
  } else if (i == 3) {
    document.getElementById("theTeam").style.borderBottomColor = "white";
    document.getElementById("theStory").style.borderBottomColor = "white";
    document.getElementById("theStory").style.color = "black";
    document.getElementById("theTeam").style.color = "";
  }
}
function CheckInput111() {
  if (i == 1) {
    document.getElementById("theStory").style.borderBottomColor = "brown";
    document.getElementById("theStory").style.color = "brown";
  } else if (i == 2) {
    document.getElementById("theStory").style.borderBottomColor = "white";
    document.getElementById("theStory").style.color = "black";
  } else if (i == 3) {
    document.getElementById("theStory").style.borderBottomColor = "white";
    document.getElementById("theStory").style.color = "black";
  }
}
function CheckInput222() {
  if (i == 1) {
    document.getElementById("theTeam").style.borderBottomColor = "white";
    document.getElementById("theTeam").style.color = "";
  } else if (i == 2) {
    document.getElementById("theTeam").style.borderBottomColor = "brown";
    document.getElementById("theTeam").style.color = "brown";
  } else if (i == 3) {
    document.getElementById("theTeam").style.borderBottomColor = "white";
    document.getElementById("theTeam").style.color = "";
  }
}
function CheckInput333() {
  if (i == 1) {
    document.getElementById("pressAwards").style.borderBottomColor = "white";
    document.getElementById("pressAwards").style.color = "";
  } else if (i == 2) {
    document.getElementById("pressAwards").style.borderBottomColor = "white";
    document.getElementById("pressAwards").style.color = "";
  } else if (i == 3) {
    document.getElementById("pressAwards").style.borderBottomColor = "brown";
    document.getElementById("pressAwards").style.color = "brown";
  }
}
