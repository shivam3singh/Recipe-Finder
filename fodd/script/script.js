



async function getData(url){
 try{
let res=  await fetch(url)
let data= res.json()
return data
 
}catch(err){
    console.log(err)
}
}


function append(data,cont){

data.forEach((el)=>{
let div=document.createElement("div")
let img=document.createElement("img")
img.src=el.strMealThumb
let name=document.createElement("h3")
name.innerText=el.strMeal
let rec=document.createElement("p")
rec.innerText=el.strInstructions
div.append(img,name,rec)
cont.append(div)
})
}

export{getData,append}