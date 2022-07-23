/// Search functions

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
