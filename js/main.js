

let formDitails=[
    {
      name:"rajith",
      email:"rajith@gmail.com",
      password:12345678
    },
    {
      name:"guru",
      email:"guru@gmail.com",
      password:12345678
    },
    {
      name:"vel",
      email:"vel@gmail.com",
      password:12345678
    },
    {
      name:"pandian",
      email:"pandian@gmail.com",
      password:12345678
    },
    {
      name:"rupu",
      email:"rupu@gmail.com",
      password:12345678
    },
   
    
  ];

  let name1=document.getElementById("name");
  let mail=document.getElementById("email");
  let psd=document.getElementById("pass");
  let form=document.getElementById("myform");
  let form1=document.getElementById("myform1");
  
     
  form.addEventListener("submit",function(e){
    e.preventDefault()

    formDitails.filter((a)=>{
        if(name1.value == a.name && mail.value == a.email && psd.value == a.password){
            window.location.href="welcome.html"

        }else{
          document.getElementById("form1").style.display="none";
          document.getElementById("form2").style.display="block";
        }

       
    })

  });


  
  let name2=document.getElementById("name1");
  let mail2=document.getElementById("email1");
  let psd2=document.getElementById("pass1");

  form1.addEventListener("submit",function(k){
         k.preventDefault();

      var newname= name2.value;
      var newmail=mail2.value;
      var newpsd= psd2.value;


      var obj={
      name:newname,
      email:newmail,
      password:newpsd
      }

      formDitails.push(obj)
      
      document.getElementById("form1").style.display="block";
      document.getElementById("form2").style.display="none";

  })
  
  
