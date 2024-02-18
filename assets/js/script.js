    // Get all elements with the class "fahim"
    var elements = document.querySelectorAll(".set");

    let count = 0;
    // Attach an event listener to each element
    elements.forEach(function(element) {
        element.addEventListener("click", function() {

        // Log the background color of the clicked button
        const bgColor = this.style.backgroundColor;
        if(bgColor != "rgb(29, 209, 0)" && count<4){
            count++;
            setLeft(40-count);
            totalSet(count);
            totalPrice(count);
            grandtotal(count*550);
            addItems(count, element.innerText);
            getTickets();
            if(count==4){
                enableCupon();
            }

            this.style.backgroundColor = "#1DD100";
            this.style.color = "white";
        }


        
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
function addItems(x, setName){
    let val = document.querySelector(".items");
    val.innerHTML += "<div class='py-2 d-flex justify-content-between'><span>Seat "+ setName +"</span><span>Economoy</span><span>550</span></div>";
}
function enableCupon(){
    var inputElement = document.getElementById("myInputButon");
    inputElement.disabled = false;
}

function grandtotal(x){
    let grandtotal = document.querySelector(".grandTotal");
    grandtotal.innerText = x;
}
function getTickets(){
    let grandtotal = document.getElementById("submit");
    let checkNum = document.querySelector(".number");
    if(checkNum.value!="" && count>0){
        grandtotal.disabled = false;
    }
}
function successMess(){
    // alert("hi");
}




function getValue() {
    var inputElement = document.getElementById("myInput");
    var value = inputElement.value;
    let val = document.querySelector(".discount");
    let money = (count*550);
    let disCount;

    if(value==="NEW15"){
        disCount = money * .15;
        val.innerHTML = "<div class='py-2 d-flex justify-content-between'><span>Discunt Price</span><span>"+ disCount +"</span></div>";
        document.querySelector(".cupon").style.display = "none";
        grandtotal(money-disCount);
    }else if(value==="Couple 20"){
        disCount = money * .20;
        val.innerHTML = "<div class='py-2 d-flex justify-content-between'><span>Discunt Price</span><span>"+ disCount +"</span></div>";
        document.querySelector(".cupon").style.display = "none";
        grandtotal(money-disCount);
    }else{
        alert("Brother This is not Valid Cupon");
    }

    // let grandtotal = document.querySelector(".grandTotal");
    // grandtotal.innerText = money - disCount;
    // grandtotal(money-disCount);
}







