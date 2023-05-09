
//Onload function
window.onload = function inicio() {

    //homeModal();

}

//Scroll effects
window.addEventListener("scroll", reveal);

//Create modal
function homeModal() {


    try {
        setTimeout(() => {

            var myModal = new bootstrap.Modal(document.getElementById('myModal'), {})
            myModal.toggle();

            console.log("Modal lanzado con éxito");

        }, 7000); 

     } catch (error) {
        reject("Error, no se ha podido lanzar el modal " + error);
    }


}

//Close modal button
document.getElementById("closeModal").addEventListener("click", closeModal);

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



  

