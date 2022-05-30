// On clicking remove button the item should be removed from DOM as well as localstorage.


let bucketData =JSON.parse(localStorage.getItem("bucket"));
//console.log(bucketData)
//console.log(bucketData)

// bucketData.map(function(elem){




// })


bucketData.map(function(el,index){
   
    
    let img= document.createElement("img")
    img.src=el.image;
     img.style.height="180px"
     img.style.width="200px"

     let name= document.createElement("p")
     name.innerText=el.title

     let price= document.createElement("p")
     price.innerText=el.price

    let box = document.createElement("div")
    let btn= document.createElement("button")
    btn.innerText="remove"

    btn.addEventListener("click",function(){
           removeItem(el,index)
    })
    box.append(img,name,price,btn)

let menu = document.getElementById('add_to_bucket')
menu.append(box)

})

function removeItem(el,index) {
    
bucketData.splice(index,1)
   localStorage.setItem("bucket",JSON.stringify(bucketData))
window.location.reload()
 }