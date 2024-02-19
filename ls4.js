document.querySelector("form").addEventListener("submit", fn4);
// var s4 = JSON.parse(localStorage.getItem("DB4")) || [];
var s3 = JSON.parse(localStorage.getItem("DB3"));
var mail = s3[s3.length-1].Mail;
var passwd = s3[s3.length-1].Password;
var Fname = s3[s3.length-1].FirstName;
var Lname = s3[s3.length-1].LastName;
var Cname = s3[s3.length-1].Country;
var Cname2 = s3[s3.length-1].City;
function fn4 (event){
    event.preventDefault();
     var jobtitles = document.querySelector("#jobtitle").value;
    // var obj4 = {
    //     Mail : mail,
    //     Password : passwd,
    //     FirstName : Fname,
    //     LastName : Lname,
    //     Country : Cname,
    //     City : Cname2,
    //     JobTitle : jobtitles,
    // }
    // s4.push(obj4);
    // localStorage.setItem("DB4", JSON.stringify(s4));
    register(Fname,Lname,Cname,Cname2,mail,passwd,jobtitles);

}



async function register(Fname,Lname,Cname,Cname2,mail,passwd,jobtitles) {
    try {
      let registerData = {
        firstName: Fname,
        lastName: Lname,
        job_title: jobtitles,
        email: mail,
        password: passwd,
        country_region: Cname,
        city_district: Cname2,
      };
      registerData = JSON.stringify(registerData);
     
      let res = await fetch("https://lynda01.herokuapp.com/register", {
        method: "POST",
        body: registerData,
        headers: {
          "Content-Type": "application/json",
        },
      });
      let user = await res.json();
      console.log("user:", user);
      if(user.status){
          window.location.href = "ls5.html";
      }
      else{
          alert("user exist")
      }
    } catch (error) {
      console.log("error:", error);
    }
  }
