
//Onload function
//window.addEventListener("mouseout", homeModal);

//Scroll effects
window.addEventListener("scroll", reveal);

//Create modal
function homeModal() {
  
            var myModal = new bootstrap.Modal(document.getElementById('myModal'), {})
            myModal.toggle();

            console.log("Modal lanzado con éxito");
 


}

//Close modal button
//document.getElementById("closeModal").addEventListener("click", closeModal);

function closeModal() {
  let modal = document.getElementsByClassName("modal").item(0);
  modal.className = "fade";

  console.log("Modal cerrado con éxito");
}


//Create scroll effect
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 120;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

//Create function to go to an especific div
function scrollToDiv() {
  var div = document.getElementById('botones');
  div.scrollIntoView({ behavior: 'smooth' });
}

document.getElementById("btnInicio").addEventListener("click", scrollToDiv);

  

