// Menu function
function showMenu() {
  const menu = document.querySelector("#menu");
  menu.classList.toggle("active");
}

/// Search functions ///
const form1Input = document.forms["form-1"].querySelector("input");
form1Input.addEventListener("keyup", function (e) {
  e.preventDefault();
  const searchTerm = e.target.value.toLowerCase();
  const searchItems = document.querySelectorAll("#playlist-1 li");
  searchItems.forEach(function (item) {
    const itemTitle = item.querySelector(".item-title").textContent;
    if (itemTitle.toLowerCase().indexOf(searchTerm) != -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
});

const form2Input = document.forms["form-2"].querySelector("input");
form2Input.addEventListener("keyup", function (e) {
  e.preventDefault();
  const searchTerm = e.target.value.toLowerCase();
  const searchItems = document.querySelectorAll("#playlist-2 li");
  searchItems.forEach(function (item) {
    const itemTitle = item.querySelector(".item-title").textContent;
    if (itemTitle.toLowerCase().indexOf(searchTerm) != -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
});
const form3Input = document.forms["form-3"].querySelector("input");
form3Input.addEventListener("keyup", function (e) {
  e.preventDefault();
  const searchTerm = e.target.value.toLowerCase();
  const searchItems = document.querySelectorAll("#playlist-3 li");
  searchItems.forEach(function (item) {
    const itemTitle = item.querySelector(".item-title").textContent;
    if (itemTitle.toLowerCase().indexOf(searchTerm) != -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
});
const form4Input = document.forms["form-4"].querySelector("input");
form4Input.addEventListener("keyup", function (e) {
  e.preventDefault();
  const searchTerm = e.target.value.toLowerCase();
  const searchItems = document.querySelectorAll("#playlist-4 li");
  searchItems.forEach(function (item) {
    const itemTitle = item.querySelector(".item-title").textContent;
    if (itemTitle.toLowerCase().indexOf(searchTerm) != -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
});
const form5Input = document.forms["form-5"].querySelector("input");
form5Input.addEventListener("keyup", function (e) {
  e.preventDefault();
  const searchTerm = e.target.value.toLowerCase();
  const searchItems = document.querySelectorAll("#playlist-5 li");
  searchItems.forEach(function (item) {
    const itemTitle = item.querySelector(".item-title").textContent;
    if (itemTitle.toLowerCase().indexOf(searchTerm) != -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
});
const form6Input = document.forms["form-6"].querySelector("input");
form6Input.addEventListener("keyup", function (e) {
  e.preventDefault();
  const searchTerm = e.target.value.toLowerCase();
  const searchItems = document.querySelectorAll("#playlist-6 li");
  searchItems.forEach(function (item) {
    const itemTitle = item.querySelector(".item-title").textContent;
    if (itemTitle.toLowerCase().indexOf(searchTerm) != -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
});
const form7Input = document.forms["form-7"].querySelector("input");
form7Input.addEventListener("keyup", function (e) {
  e.preventDefault();
  const searchTerm = e.target.value.toLowerCase();
  const searchItems = document.querySelectorAll("#playlist-7 li");
  searchItems.forEach(function (item) {
    const itemTitle = item.querySelector(".item-title").textContent;
    if (itemTitle.toLowerCase().indexOf(searchTerm) != -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
});
///////////////////////////////////////////////////////////////////////////
/// Choosing the right list functions
const divisionWrapper = document.querySelector(".divisions");
const playlists = document.querySelectorAll(".playlist");
const divisions = document.querySelectorAll(".division");
divisionWrapper.addEventListener("click", function (e) {
  if (e.target.className == "box-img") {
    console.log(divisions);
    divisions.forEach(function (division) {
      const arrow = division.querySelector(".playlist-arrow");
      console.log(arrow.className);
      if (arrow.className.includes("active")) {
        arrow.className = "playlist-arrow";
      }
    });
    e.target.parentElement.previousElementSibling.classList.add("active");
    const targetPlaylist = document.querySelector(e.target.dataset.target);
    playlists.forEach(function (playlist) {
      if (playlist == targetPlaylist) {
        playlist.classList.add("active");
      } else {
        playlist.classList.remove("active");
      }
    });
  }
});
///////////////////////////////////////////////////////////////////////////

// Playing a video function
function showVideo(link) {
  const popup = document.querySelector("#popup-video");
  const frame = popup.querySelector("iframe");
  frame.src = link;
  popup.className = "active";
}
function hideVideo() {
  const popup = document.querySelector("#popup-video");
  const frame = popup.querySelector("iframe");
  frame.src = "";
  popup.className = "";
}
///////////////////////////////////////////////////////////////////////////

// Testimonials slider functions
// vars
var testim = document.getElementById("testim"),
  testimDots = Array.prototype.slice.call(
    document.getElementById("testim-dots").children
  ),
  testimContent = Array.prototype.slice.call(
    document.getElementById("testim-content").children
  ),
  testimLeftArrow = document.getElementById("left-arrow"),
  testimRightArrow = document.getElementById("right-arrow"),
  testimSpeed = 5000,
  currentSlide = 0,
  currentActive = 0,
  testimTimer,
  touchStartPos,
  touchEndPos,
  touchPosDiff,
  ignoreTouch = 30;
window.onload = function () {
  // Testim Script
  function playSlide(slide) {
    for (var k = 0; k < testimDots.length; k++) {
      testimContent[k].classList.remove("active");
      testimContent[k].classList.remove("inactive");
      testimDots[k].classList.remove("active");
    }

    if (slide < 0) {
      slide = currentSlide = testimContent.length - 1;
    }

    if (slide > testimContent.length - 1) {
      slide = currentSlide = 0;
    }

    if (currentActive != currentSlide) {
      testimContent[currentActive].classList.add("inactive");
    }
    testimContent[slide].classList.add("active");
    testimDots[slide].classList.add("active");

    currentActive = currentSlide;

    clearTimeout(testimTimer);
    testimTimer = setTimeout(function () {
      playSlide((currentSlide += 1));
    }, testimSpeed);
  }

  testimLeftArrow.addEventListener("click", function () {
    playSlide((currentSlide -= 1));
  });

  testimRightArrow.addEventListener("click", function () {
    playSlide((currentSlide += 1));
  });

  for (var l = 0; l < testimDots.length; l++) {
    testimDots[l].addEventListener("click", function () {
      playSlide((currentSlide = testimDots.indexOf(this)));
    });
  }

  playSlide(currentSlide);

  // keyboard shortcuts
  document.addEventListener("keyup", function (e) {
    switch (e.keyCode) {
      case 37:
        testimLeftArrow.click();
        break;

      case 39:
        testimRightArrow.click();
        break;

      case 39:
        testimRightArrow.click();
        break;

      default:
        break;
    }
  });

  testim.addEventListener("touchstart", function (e) {
    touchStartPos = e.changedTouches[0].clientX;
  });

  testim.addEventListener("touchend", function (e) {
    touchEndPos = e.changedTouches[0].clientX;

    touchPosDiff = touchStartPos - touchEndPos;

    if (touchPosDiff > 0 + ignoreTouch) {
      testimLeftArrow.click();
    } else if (touchPosDiff < 0 - ignoreTouch) {
      testimRightArrow.click();
    } else {
      return;
    }
  });
};

///////////////////////////////////////////////////////////////////////////
// The footer popups functions
// 1 for item 1 ,2 for item 2 ,and so on
var popupItem1 = document.querySelector(".payment-popup .popup-item.i-1");
var popupKey1 = popupItem1.querySelector(".key");
var popupValue1 = popupItem1.querySelector(".value");
var popupImg = popupItem1.previousElementSibling;

var popupItem2 = document.querySelector(".payment-popup .popup-item.i-2");
var popupKey2 = popupItem2.querySelector(".key");
var popupValue2 = popupItem2.querySelector(".value");
var popupImg2 = popupItem2.previousElementSibling;

var popupItem3 = document.querySelector(".payment-popup .popup-item.i-3");
var popupKey3 = popupItem3.querySelector(".key");
var popupValue3 = popupItem3.querySelector(".value");
var popupImg3 = popupItem3.previousElementSibling;

var popupItem4 = document.querySelector(".payment-popup .popup-item.i-4");
var popupKey4 = popupItem4.querySelector(".key");
var popupValue4 = popupItem4.querySelector(".value");
var popupImg4 = popupItem4.previousElementSibling;

var popupItem5 = document.querySelector(".payment-popup .popup-item.i-5");
var popupKey5 = popupItem5.querySelector(".key");
var popupValue5 = popupItem5.querySelector(".value");
var popupImg5 = popupItem5.previousElementSibling;

var popupItem6 = document.querySelector(".payment-popup .popup-item.i-6");
var popupKey6 = popupItem6.querySelector(".key");
var popupValue6 = popupItem6.querySelector(".value");
var popupImg6 = popupItem6.previousElementSibling;

const popup = document.querySelector(".payment-popup");
const ils = document.querySelectorAll(".payment ul li");
function showPop(num) {
  if (num == 1) {
    if (popup.className.includes("pos-1")) {
      popup.classList.toggle("pos-1");
    } else {
      popup.className = "payment-popup pos-1";
    }
    const li = document.querySelector(".payment ul li:nth-child(1)");
    ils.forEach(function (e) {
      if (e != li) {
        e.classList.remove("lg");
      }
    });
    li.classList.toggle("lg");
    popupImg.src = "./assets/Al-Ahly.svg";
    popupKey1.textContent = "الاسم:";
    popupValue1.textContent = "شركة صابر الشحات السيد وشريكه";
    popupKey2.textContent = "فرع: ";
    popupValue2.textContent = "درب نجم";
    popupKey3.textContent = "العملة: ";
    popupValue3.textContent = "EGP";
    popupKey4.textContent = "رقم الحساب: ";
    popupValue4.textContent = "4546121342465878";
    popupKey5.textContent = "IBAN: ";
    popupValue5.textContent = "EG47024654512313216";
    popupKey6.textContent = "سويفت كود:";
    popupValue6.textContent = "NBEGCASD55";
  } else if (num == 2) {
    if (popup.className.includes("pos-2")) {
      popup.classList.toggle("pos-2");
    } else {
      popup.className = "payment-popup pos-2";
    }
    const li = document.querySelector(".payment ul li:nth-child(2)");
    ils.forEach(function (e) {
      if (e != li) {
        e.classList.remove("lg");
      }
    });
    li.classList.toggle("lg");
    popupImg.src = "./assets/Al-Ahly.svg";
    popupKey1.textContent = "الاسم:";
    popupValue1.textContent = "البنك الاهلي المصري دولار";
    popupKey2.textContent = "فرع: ";
    popupValue2.textContent = "درب نجم";
    popupKey3.textContent = "العملة: ";
    popupValue3.textContent = "EGP";
    popupKey4.textContent = "رقم الحساب: ";
    popupValue4.textContent = "4546121342465878";
    popupKey5.textContent = "IBAN: ";
    popupValue5.textContent = "EG47024654512313216";
    popupKey6.textContent = "سويفت كود:";
    popupValue6.textContent = "NBEGCASD55";
  } else if (num == 3) {
    if (popup.className.includes("pos-3")) {
      popup.classList.toggle("pos-3");
    } else {
      popup.className = "payment-popup pos-3";
    }
    const li = document.querySelector(".payment ul li:nth-child(3)");
    ils.forEach(function (e) {
      if (e != li) {
        e.classList.remove("lg");
      }
    });
    li.classList.toggle("lg");
    popupImg.src = "./assets/Al-Rajhi.svg";
    popupKey1.textContent = "الاسم:";
    popupValue1.textContent = "مصرف الراجحي ريال سعودي";
    popupKey2.textContent = "فرع: ";
    popupValue2.textContent = "درب نجم";
    popupKey3.textContent = "العملة: ";
    popupValue3.textContent = "EGP";
    popupKey4.textContent = "رقم الحساب: ";
    popupValue4.textContent = "4546121342465878";
    popupKey5.textContent = "IBAN: ";
    popupValue5.textContent = "EG47024654512313216";
    popupKey6.textContent = "سويفت كود:";
    popupValue6.textContent = "NBEGCASD55";
  } else if (num == 4) {
    if (popup.className.includes("pos-4")) {
      popup.classList.toggle("pos-4");
    } else {
      popup.className = "payment-popup pos-4";
    }
    const li = document.querySelector(".payment ul li:nth-child(4)");
    ils.forEach(function (e) {
      if (e != li) {
        e.classList.remove("lg");
      }
    });
    li.classList.toggle("lg");
    popupImg.src = "./assets/Al-Ahly.svg";
    popupKey1.textContent = "الاسم:";
    popupValue1.textContent = " التجاري وفا بنك جنية مصري";
    popupKey2.textContent = "فرع: ";
    popupValue2.textContent = "درب نجم";
    popupKey3.textContent = "العملة: ";
    popupValue3.textContent = "EGP";
    popupKey4.textContent = "رقم الحساب: ";
    popupValue4.textContent = "4546121342465878";
    popupKey5.textContent = "IBAN: ";
    popupValue5.textContent = "EG47024654512313216";
    popupKey6.textContent = "سويفت كود:";
    popupValue6.textContent = "NBEGCASD55";
  } else if (num == 5) {
    if (popup.className.includes("pos-5")) {
      popup.classList.toggle("pos-5");
    } else {
      popup.className = "payment-popup pos-5";
    }
    const li = document.querySelector(".payment ul li:nth-child(5)");
    ils.forEach(function (e) {
      if (e != li) {
        e.classList.remove("lg");
      }
    });
    li.classList.toggle("lg");
    popupImg.src = "./assets/Al-Ahly.svg";
    popupKey1.textContent = "الاسم:";
    popupValue1.textContent = " التجاري وفا بنك دولار";
    popupKey2.textContent = "فرع: ";
    popupValue2.textContent = "درب نجم";
    popupKey3.textContent = "العملة: ";
    popupValue3.textContent = "EGP";
    popupKey4.textContent = "رقم الحساب: ";
    popupValue4.textContent = "4546121342465878";
    popupKey5.textContent = "IBAN: ";
    popupValue5.textContent = "EG47024654512313216";
    popupKey6.textContent = "سويفت كود:";
    popupValue6.textContent = "NBEGCASD55";
  } else if (num == 6) {
    if (popup.className.includes("pos-6")) {
      popup.classList.toggle("pos-6");
    } else {
      popup.className = "payment-popup pos-6";
    }
    const li = document.querySelector(".payment ul li:nth-child(6)");
    ils.forEach(function (e) {
      if (e != li) {
        e.classList.remove("lg");
      }
    });
    li.classList.toggle("lg");
    popupImg.src = "./assets/Vodafone.png";
    popupKey1.textContent = "الاسم:";
    popupValue1.textContent = "فودافون كاش";
    popupKey2.textContent = "فرع: ";
    popupValue2.textContent = "درب نجم";
    popupKey3.textContent = "العملة: ";
    popupValue3.textContent = "EGP";
    popupKey4.textContent = "رقم الحساب: ";
    popupValue4.textContent = "4546121342465878";
    popupKey5.textContent = "IBAN: ";
    popupValue5.textContent = "EG47024654512313216";
    popupKey6.textContent = "سويفت كود:";
    popupValue6.textContent = "NBEGCASD55";
  }
}
///////////////////////////////////////////////////////////////////////////
