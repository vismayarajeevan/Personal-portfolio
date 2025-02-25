document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("service_wcqnrs3"); // Replace with your EmailJS user ID
  
    document.getElementById("contact-form").addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Show loading message
      document.querySelector(".loading").style.display = "block";
  
      // Collect form data
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
      };
  
      // Send email using EmailJS
      emailjs.send("your_service_id", "your_template_id", formData)
        .then(function (response) {
          console.log("Email sent successfully:", response);
          
          // Hide loading and show success message
          document.querySelector(".loading").style.display = "none";
          document.querySelector(".sent-message").style.display = "block";
        }, function (error) {
          console.log("Failed to send email:", error);
          
          // Hide loading and show error message
          document.querySelector(".loading").style.display = "none";
          document.querySelector(".error-message").textContent = "Failed to send message. Please try again!";
          document.querySelector(".error-message").style.display = "block";
        });
  
      // Clear form fields
      document.getElementById("contact-form").reset();
    });
  });
  