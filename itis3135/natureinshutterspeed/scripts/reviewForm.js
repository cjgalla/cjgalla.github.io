document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("reviewForm");
    const messageOutput = document.getElementById("message-output");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = document.getElementById("name").value;
      const review = document.getElementById("reviewMessage").value;
  
      if (name.trim() && review.trim()) {
        messageOutput.textContent = `Thank you for your review, ${name}!`;
        form.reset();
      } else {
        messageOutput.textContent = "Please fill out all fields.";
      }
    });
  });
  