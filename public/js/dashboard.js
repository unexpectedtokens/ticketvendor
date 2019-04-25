const eventLink = document.getElementsByClassName("navlink")[0];
const userLink = document.getElementsByClassName("navlink")[1];
const adminLink = document.getElementsByClassName("navlink")[2];
const homeLink = document.getElementById("homeLink");
const eventDiv = document.getElementById("events");
const userDiv = document.getElementById("users");
const adminDiv = document.getElementById("admins");
const landingDiv = document.getElementById("landing");
const contArr = [userDiv, eventDiv, adminDiv, landingDiv];

eventLink.addEventListener("click", () => {
  contArr[0].style.display = "none";
  contArr[1].style.display = "grid";
  contArr[2].style.display = "none";
  contArr[3].style.display = "none";
});
userLink.addEventListener("click", () => {
  contArr[0].style.display = "block";
  contArr[1].style.display = "none";
  contArr[2].style.display = "none";
  contArr[3].style.display = "none";
});
adminLink.addEventListener("click", () => {
  contArr[0].style.display = "none";
  contArr[1].style.display = "none";
  contArr[2].style.display = "block";
  contArr[3].style.display = "none";
});
homeLink.addEventListener("click", () => {
  contArr[0].style.display = "none";
  contArr[1].style.display = "none";
  contArr[2].style.display = "none";
  contArr[3].style.display = "block";
});

const newEvent = event => {
  event.preventDefault();
  const eventData = {
    eventName: document.getElementById("eventname").value,
    tickets: document.getElementById("amount-tickets").value,
    ticketPrice: document.getElementById("price").value,
    location: document.getElementById("location").value,
    eventImage: document.getElementById("imageUrl").value,
    category: document.getElementById("category").value,
    eventDate: document.getElementById("eventdate").value,
    description: document.getElementById("description").value
  };
  fetch("/event/addevent", {
    credentials: "same-origin",
    method: "POST",
    body: JSON.stringify(eventData),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  }).then(response => console.log(response));
};

const deleteEvent = id => {
  fetch(`/event/deletevent/${id}`, {
    method: "DELETE",
    credentials: "same-origin",
    headers: new Headers({
      "Content-Type": "application/json"
    })
  }).then(response => console.log(response));
};
