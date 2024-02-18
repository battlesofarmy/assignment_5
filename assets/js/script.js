    // Get all elements with the class "fahim"
    var elements = document.querySelectorAll(".set");

    let count = 0;
    // Attach an event listener to each element
    elements.forEach(function(element) {
        element.addEventListener("click", function() {

        // Log the background color of the clicked button
        const bgColor = this.style.backgroundColor;
        if(bgColor != "orange"){
            count++;
            setLeft(40-count);
            totalSet(count);
            totalPrice(count);
            addItems(count);

        }
            this.style.backgroundColor = "orange";

 

            console.log(count);

            
        });
    });


function setLeft(x){
    let val = document.querySelector(".setLest");
    val.innerText = x;
}
function totalSet(x){
    let val = document.querySelector(".totalset");
    val.innerText = x;
}
function totalPrice(x){
    let val = document.querySelector(".totalsetprice");
    val.innerText = (x*550);
}
function addItems(x){
    let val = document.querySelector(".items");
    val.innerHTML += "<div class='py-2 d-flex justify-content-between'><span>c2</span><span>Economoy</span><span>550</span></div>";
}




function getValue() {
    var inputElement = document.getElementById("myInput");
    var value = inputElement.value;
    let val = document.querySelector(".discount");
    let money = (count*550);

    if(value==="NEW15"){
        let disCount = money * .15;
        val.innerHTML = "<div class='py-2 d-flex justify-content-between'><span>Discunt Price</span><span>"+ disCount +"</span></div>";

    }else if(value=="Couple 20"){
        let disCount = money * .20;
        val.innerHTML = "<div class='py-2 d-flex justify-content-between'><span>Discunt Price</span><span>"+ disCount +"</span></div>";
    }

    let grandtotal = document.querySelector(".grandTotal");
    grandtotal.innerText = money - disCount;
    // totalPrice(grandtotal);
}





