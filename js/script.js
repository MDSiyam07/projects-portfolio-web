document.addEventListener('DOMContentLoaded', (event) => {
    var modal = document.getElementById("myModal");
    var imgs = document.querySelectorAll(".portfolio-item img");
    var span = document.getElementsByClassName("close")[0];
    var modalText = document.getElementById("modal-text");

    imgs.forEach(img => {
        img.onclick = function() {
            var content = img.parentElement.getAttribute('data-content');
            modalText.innerHTML = content;
            modal.style.display = "block";
        }
    });

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});