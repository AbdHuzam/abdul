    //portfolio main menu <a>
    // Select all menus
    const menus = document.querySelectorAll('.menu');

    // Function to reset all menus
    function resetMenus() {
      menus.forEach((menu) => {
        const dropdown = menu.querySelector('.dropdown-content');
        dropdown.style.display = 'none'; // Hide all dropdowns
        menu.classList.remove('push-down'); // Remove any margin
      });
    }

    // Add event listeners to all menus
    menus.forEach((menu, index) => {
      const button = menu.querySelector('.btnmenu');
      const dropdown = menu.querySelector('.dropdown-content');

      button.addEventListener('click', function (e) {
        e.preventDefault();

        const isDropdownVisible = dropdown.style.display === 'block';

        // Reset all menus first
        resetMenus();

        // Open dropdown and apply margin based on menu clicked
        if (!isDropdownVisible) {
          dropdown.style.display = 'block';

          // If Menu 1 is clicked, push down Menu 2
          if (menu.id === 'menu1') {
            const menu2 = document.querySelector('#menu2');
            menu2.classList.add('push-down');
          }
          // If Menu 2 is clicked, push down Menu 3
          else if (menu.id === 'menu2') {
            const menu3 = document.querySelector('#menu3');
            menu3.classList.add('push-down');
          }
        } else {
          dropdown.style.display = 'none'; // Close the dropdown if it's already open
        }
      });
    });
    

    // Close all menus when clicking outside
    window.addEventListener('click', function (e) {
      if (!e.target.closest('.menu')) {
        resetMenus();
      }
    });

       

        document.addEventListener("DOMContentLoaded", function () {
          document.getElementById('sendMessage').addEventListener('click', function (event) {
              event.preventDefault(); // Prevent default form submission
      
              // Get form field values
              const name = document.getElementById('name').value.trim();
              const email = document.getElementById('email').value.trim();
              const message = document.getElementById('message').value.trim();
              const responseMessage = document.getElementById('responseMessage');
      
              // Clear previous messages
              responseMessage.textContent = '';
              responseMessage.className = '';
      
              // Validate fields
              if (name === '' || email === '' || message === '') {
                  responseMessage.textContent = 'All fields are required.';
                  responseMessage.className = 'error';
                  return;
              }
      
              // Email validation
              const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
              if (!email.match(emailPattern)) {
                  responseMessage.textContent = 'Invalid email address.';
                  responseMessage.className = 'error';
                  return;
              }
      
              // Create FormData object
              const formData = new FormData();
              formData.append('name', name);
              formData.append('email', email);
              formData.append('message', message);
      
              // Send data to server-side script
              fetch('submitform.php', {
                  method: 'POST',
                  body: formData
              })
              .then(response => response.text())
              .then(data => {
                  responseMessage.textContent = data;
                  responseMessage.className = 'success';
                  // Clear the form after successful submission
                  document.getElementById('contactform').reset();
              })
              .catch(error => {
                  responseMessage.textContent = 'Sorry, there was an error sending your message.';
                  responseMessage.className = 'error';
              });
          });
      });
        
        function toggleMenu() {
          const menu = document.querySelector(".navlinks");
          menu.classList.toggle("active");
      }

      document.addEventListener("DOMContentLoaded", function () {
    // Select all menu items with class 'menu1'
    let menus = document.querySelectorAll(".menu1");

    menus.forEach(menu => {
        menu.addEventListener("click", function () {
            // Only toggle in responsive mode (below 768px)
            if (window.innerWidth <= 768) {
                this.classList.toggle("active"); // Toggle dropdown
            }
        });
    });
});