var productData = JSON.parse(localStorage.getItem("productData"));
console.log("productData:", productData);
appendProductData(productData);
function appendProductData(data) {
  let productImage = document.getElementById("productImage");
  productImage.src = data.img;
  let Title = document.getElementById("Title");
  Title.innerHTML = data.title;
  let level = document.getElementById("level");
  level.innerHTML = data.level;
  let duration = document.getElementById("duration");
  duration.innerHTML = `${Math.floor(
    Math.random() * (4 - 1) + 1
  )}h ${Math.floor(Math.random() * (60 - 10) + 10)}m`;
  let date = document.getElementById("date");
  date.innerHTML = `Released: ${data.date}`;
  let rating = document.getElementById("rating");
  let rate = (Math.random() * (5 - 2) + 2).toFixed(1);
  let star = "";
  for (let i = 0; i < Math.floor(rate); i++) {
    star += "★" + " ";
  }
  rating.innerHTML = `${rate} <span id="star">${star}</span>`;
   let description_details = document.getElementById("description-details");
   description_details.innerHTML = `${data.decription} learners`;
   let course_video = document.getElementById("course-video");
   course_video.src = data.video_link;
   
}
function onVdieo() {
  let course_video = document.getElementById("course-video");
  course_video.style.display = "block";
   let btn_off = document.getElementById("btn-off");
   btn_off.style.display = "block";
}
let btn_off = document.getElementById("btn-off");
  btn_off.style.display = "none";
function offVdieo() {
  let course_video = document.getElementById("course-video");
  course_video.style.display = "none";
 
  btn_off.style.display = "none";
  
}

let usrNames = JSON.parse(localStorage.getItem("usrNames"));
var fisrt_name = usrNames[0].firstName;
console.log("fisrt_name:", fisrt_name);
let user_name = document.querySelectorAll(".user-name");
console.log("user_name:", user_name);
for (let i = 0; i < user_name.length; i++) {
  user_name[i].innerHTML = fisrt_name;
}

function HigherEducation() {
  window.location.href = "HigherEducation.html";
}
function goverment() {
  window.location.href = "goverment.html";
}