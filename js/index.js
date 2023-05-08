
//Onload function
window.onload = function inicio() {

    homeModal();

}

//Scroll effects
window.addEventListener("scroll", reveal);

//Create modal
function homeModal() {


    try {
        setTimeout(() => {

            var myModal = new bootstrap.Modal(document.getElementById('myModal'), {})
            myModal.toggle();
            console.log("Modal lanzado");

        }, 5000); 

     } catch (error) {
        reject("Error, no se ha podido lanzar el modal " + error);
    }



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
  

