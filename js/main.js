

let a=[1,2,3,4,5,6];


for(i=0;i<a.length;i++){
  for(j=i;j<a.length;j++){
    let b=[]
    if(i+j == 7){
      
      console.log(i,j);
    }
  }
}







let formDitails = [
  {
    name: "rajith",
    email: "rajith@gmail.com",
    password: 12345678,
    image:"url(./images/bike-1.jpg)",
  },
  {
    name: "guru",
    email: "guru@gmail.com",
    password: 12345678,
  },
  {
    name: "vel",
    email: "vel@gmail.com",
    password: 12345678,
    image:"url(./images/remove-img.png)",
  },
  {
    name: "pandian",
    email: "pandian@gmail.com",
    password: 12345678,
  },
  {
    name: "rupu",
    email: "rupu@gmail.com",
    password: 12345678,
  },
];

let name1 = document.getElementById("name");
let mail = document.getElementById("email");
let psd = document.getElementById("pass");
let form = document.getElementById("myform");
let form1 = document.getElementById("myform1");






form.addEventListener("submit", function (e) {

  e.preventDefault();

  let setname =name1.value;
let setemail =mail.value;
let setpassword =psd.value;

  if (setname === "" || setemail === "" || setpassword === "") {
    if (setname === "") {
      document.getElementById("iname3").innerHTML = "Enter Your Name"
      name1.style.borderBottomColor = "red";
    } else {
      document.getElementById("iname3").innerHTML = ""
      name1.style.borderBottomColor = "#2ECC71 ";
    }
  
    if (setemail == "") {
      document.getElementById("iname4").innerHTML = "Enter Your Email"
      mail.style.borderBottomColor = "red";
    } else {
      document.getElementById("iname4").innerHTML = ""
      mail.style.borderBottomColor = "#2ECC71";
    }
  
  
    if (setpassword == "") {
      document.getElementById("iname5").innerHTML = "Enter Your password"
      psd.style.borderBottomColor = "red";
    } else if (setpassword.length > 8) {
      document.getElementById("iname5").innerHTML = "Maximum 8 characters "
      psd.style.borderBottomColor = "red";
    }
  
    else {
      document.getElementById("iname5").innerHTML = ""
      psd.style.borderBottomColor = "#2ECC71";
    }
  }
  
  validateFun();


 });

//wellcome page

function Myfun() {
  document.getElementById("form1").style.display = "none";
  document.getElementById("form2").style.display = "block";
}

let name2 = document.getElementById("name1");
let mail2 = document.getElementById("email1");
let psd2 = document.getElementById("pass1");

let hello = document.getElementById("hello");

form1.addEventListener("submit", function (k) {
  k.preventDefault();

  var newname = name2.value;
  var newmail = mail2.value;
  var newpsd = psd2.value;

  var obj = {
    name: newname,
    email: newmail,
    password: newpsd,
  };

  formDitails.push(obj);

  // window.location.href="welcome.html"

  document.getElementById("form2").style.display = "none";
  document.getElementById("form1").style.display = "block";
});


//output 

function Newwindow(eve){

  document.getElementById("form3").style.display = "none";
  document.getElementById("wellcome").style.display = "block";

  let hole = document.getElementById("wellcome");
  let well = document.createElement("h1");
  let profileimg = document.createElement("div");
  let username = document.createElement("div");
  let userDetails= document.createElement("div")
  let log = document.createElement("h1");
   let img = document.createElement("div")


  
  well.setAttribute("class", "well-come");
  profileimg.setAttribute("class", "pro-img");
  username.setAttribute("class", "user-name");
  userDetails.setAttribute("class","user-d")
  log.setAttribute("class", "content");
  img.setAttribute("class","my-img")

  well.innerText = "BRAND MARKETING";
  log.innerText = "Hi"+" "+name1.value;
  img.style.backgroundImage="url(./images/brand.jpg)"



  let bikes=[
    {
        image:"url(./images/bike-1.jpg)",
        brand:"Bajaj",
        type:"CT 100",
        year:"2021",
        price:"100000"
    },
    {
        image:"url(./images/bike-4.jpg)",
        brand:"KTM",
        type:"Dominar",
        year:"2020",
        price:"22500"
    },
    {
        image:"url(./images/bike-3.jpg)",
        brand:"Bajaj",
        type:"Pulsar",
        year:"2019",
        price:"115000"
    }, {
        image:"url(./images/bike-2.jpg)",
        brand:"Bajaj",
        type:"Pulsar",
        year:"2021",
        price:"175000"
    },
    {
        image:"url(./images/bike-5.jpg)",
        brand:"Bajaj",
        type:"Pulsar",
        year:"2021",
        price:"100000"
    },
    {
        image:"url(./images/mt-15.jpg)",
        brand:"Bajaj",
        type:"Pulsar",
        year:"2021",
        price:"100000"
    },
    {
        image:"url(./images/s.png)",
        brand:"Bajaj",
        type:"Pulsar",
        year:"2021",
        price:"100000"
    },
    {
        image:"url(./images/bike-3.jpg)",
        brand:"Bajaj",
        type:"Pulsar",
        year:"2021",
        price:"100000"
    },
    {
        image:"url(./images/bike-3.jpg)",
        brand:"Bajaj",
        type:"Pulsar",
        year:"2021",
        price:"100000"
    },
    {
        image:"url(./images/bike-3.jpg)",
        brand:"Bajaj",
        type:"Pulsar",
        year:"2021",
        price:"100000"
    },
    {
        image:"url(./images/bike-3.jpg)",
        brand:"Bajaj",
        type:"Pulsar",
        year:"2021",
        price:"100000"
    },
    {
        image:"url(./images/bike-3.jpg)",
        brand:"Bajaj",
        type:"Pulsar",
        year:"2021",
        price:"100000"
    }
];

bikes.forEach((e)=>{
        
  // let bikehole = document.getElementById("hole")
   let bikeimg = document.createElement("div")
   let bikeitems =document.createElement("div")
   let bikedetails =document.createElement("div")
   let bikebrand= document.createElement("h3");
   let biketype =document.createElement("h4");
   let bikeyear = document.createElement("h4");
   let bikeprice =document.createElement("p");

  bikeitems.setAttribute("class","bike-items");
  bikeimg.setAttribute("class","bike-img")
  bikedetails.setAttribute("class","details")


  bikeimg.style.backgroundImage = e.image;
  bikebrand.innerText = e.brand;
  biketype.innerText = e.type;
  bikeyear.innerText = e.year;
  bikeprice    .innerText = e.price;


  bikedetails.append(bikebrand,biketype,bikeyear,bikeprice);
  bikeitems.append(bikeimg,bikedetails);
   userDetails.appendChild(bikeitems)
})

  hole.append(well);
  hole.appendChild(profileimg);
  profileimg.append(username, userDetails);
  username.append(img,log)
}

//vlidate function

function validateFun()
  {
    console.log(name1.value+' '+mail.value+' '+psd.value)
    if(name1.value == '' || mail.value == '' || psd.value ==''){
      alert('please enter all fields');
    }
    else{
      var liveUser=formDitails.filter((run)=>{
        if(run.name == name1.value && run.email == mail.value && run.password == psd.value)
        {
          return run;
        }
      });
      if(liveUser.length >0){
        Newwindow(liveUser.image)
      }
      else{
        alert('incorrect credentials');
  
      }
    }
  }


  //loop

  