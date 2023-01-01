

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
  
     
  form.addEventListener("submit",function(e){
    e.preventDefault()

    formDitails.filter((a,index)=>{
        if(name1.value == a.name && mail.value == a.email && psd.value == a.password){
            window.location.href="welcome.html"
            return true
        }else if(formDitails.length == index){
            alert("your valid not found")
        }

        console.log(formDitails.length );
        console.log(index);
    })

  })
  
  
