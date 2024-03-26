document.addEventListener("DOMContentLoaded", function() {
    var dropdownBtn = document.querySelector('.btn-cadastro');
    var dropdownContent = document.querySelector('.list-cadastro');

    dropdownBtn.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });

    window.addEventListener('click', function(event) {
        if (!event.target.matches('.btn-cadastro')) {
            var dropdowns = document.querySelectorAll('.list-cadastro');
            dropdowns.forEach(function(dropdown) {
                if (dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show');
                }
            });
        }
    });
}); 
