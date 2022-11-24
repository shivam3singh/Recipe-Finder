let arr=JSON.parse(localStorage.getItem("details"))||[]
//let arr=[]
class detail{
// #password
 constructor(){
 }

//  login(){

//     let name=  document.getElementById("name").value
//     let password= document.getElementById("password").value


//     if(this.name==name  && this.password==password){
//     alert("login succesful")
//      window.location.href="home.html"
//     }else{
//         alert("Wrong Password or Name")
//     }
 
 signup(username,password){
     this.name=username;
     this.password=password;
     alert("Signup Succesful")
     arr.push(this)
     localStorage.setItem("details",JSON.stringify(arr))
     window.location.href="login.html"
 } 
  
}


function signp(){
  let name=  document.getElementById("name").value
  let password= document.getElementById("password").value
let na=new detail()
na.signup(name,password)
}

function login(){
    let name=document.getElementById("name").value
    let pass=document.getElementById("password").value
let flag=true;
 arr.forEach((el)=>{
 if(name==el.name&&pass===el.password){
    //console.log("sahi hai baccha")
    alert("SAHi hai")
    flag=false
    window.location.href="index.html"
 }
 })
if(flag==true){
   // console.log("uguhfg bachha")
   alert("WRong detail")
}
}

   