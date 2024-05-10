document.addEventListener('DOMContentLoaded', function() {
    var modalHTML = `
        <!-- Trigger/Open The Modal -->
        <button id="myBtn">Register Now</button>

        <!-- The Modal -->
        <div id="myModal" class="modal">

          <!-- Modal content -->
          <div class="modal-content">
            <span class="close">&times;</span>
            <p>Join us for a transformative event!</p>
            <a href="https://forms.gle/n6NshMF7EBPTHf6s9" class="button" target="_blank">Register Now</a>
            <p>Please share this site with anyone interested in a week of spirituality and community!</p>
          </div>
        </div>`;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Modal functionality
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
