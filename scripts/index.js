// Add the coffee to local storage with key "coffee"

const url = "https://masai-mock-api.herokuapp.com/coffee/menu"

async function getData() {

    let res = await fetch(url)
    let data= await res.json();
    //console.log(data.menu.data)
    appendFun(data.menu.data)
}

getData()


 function appendFun(data) {
     data.forEach(function(el,i){
         let img= document.createElement("img")
         img.src=el.image;
          img.style.height="180px"
          img.style.width="200px"
          
          let name= document.createElement("p")
          name.innerText=el.title

          let price= document.createElement("p")
          price.innerText=el.price

         let box = document.createElement("div")

      let btn =document.createElement("button")
      
          
         btn.innerText="Add to bucket"

         btn.addEventListener("click",function(){
                addToBucket(el,i)
         })
         box.append(img,name,price,btn)

    let menu = document.getElementById('menu')
    menu.append(box)
     })

 }

 let bucketArr=JSON.parse(localStorage.getItem("bucket"))||[];
 console.log(bucketArr)
 function addToBucket(el,i) {
    
  bucketArr.push(el)
  localStorage.setItem("bucket",JSON.stringify(bucketArr))

      window.location.reload()
 }


 document.getElementById('coffee_count').innerText=bucketArr.length;