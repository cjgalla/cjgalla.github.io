// Preload current courses
const courses = [
    "ITIS 3200 - Intro to Info Security and Privacy - Major required course for me in cybersecurity but it's also the starting point for most of the concepts of cybersecurity as the security and privacy of information is one of the key concepts and points of cybersecurity.",
    "ITIS 3135 - Web-based application design - I've taken a few classes on stuff similar to this class but I also enjoy the graphic design side of things and have always enjoyed being able to have a physical embodiment of my code and work.",
    "ITSC 3146 - Intro to Operating Systems and Networking - Required class for my major but also I've been fascinated to learn about how a lot of the systems and networks I interact with on the daily run and are operated.",
    "Math 1242 - Calculus 2 - Required class for my major and I just simply feel like getting it out of the way so that I only have easier math classes remaining."
  ];
  
  
  window.onload = function() {
    const courseList = document.getElementById('courseList');
    courses.forEach(course => {
      const div = document.createElement('div');
      div.innerHTML = `
        <input type="text" name="courses[]" value="${course}" required>
        <button type="button" onclick="this.parentElement.remove()">Remove</button>
      `;
      courseList.appendChild(div);
    });
  };
  
  function addCourse() {
    const courseList = document.getElementById('courseList');
    const div = document.createElement('div');
    div.innerHTML = `
      <input type="text" name="courses[]" placeholder="Enter course" required>
      <button type="button" onclick="this.parentElement.remove()">Remove</button>
    `;
    courseList.appendChild(div);
  }
  
  document.getElementById('image').addEventListener('change', function(event) {
    const preview = document.getElementById('preview');
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        preview.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
  
  document.getElementById('introForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (!validateForm()) {
      alert('Please fill out all required fields.');
      return;
    }
    showResult();
  });
  
  function validateForm() {
    const requiredFields = document.querySelectorAll('#introForm [required]');
    for (let field of requiredFields) {
      if (!field.value.trim()) {
        return false;
      }
    }
    return true;
  }
  
  function showResult() {
    const form = document.getElementById('introForm');
    const submittedContent = document.getElementById('submittedContent');
    const formData = new FormData(form);
  
    let courses = '';
    formData.getAll('courses[]').forEach(course => {
      courses += `<li>${course}</li>`;
    });
  
    submittedContent.innerHTML = `
      <img src="${document.getElementById('preview').src}" alt="${formData.get('altText')}" style="max-width:200px;">
      <p><em>${formData.get('caption')}</em></p>
      <ul>
        <li><strong>Personal Background:</strong> ${formData.get('personal')}</li>
        <li><strong>Professional Background:</strong> ${formData.get('professional')}</li>
        <li><strong>Academic Background:</strong> ${formData.get('academic')}</li>
        <li><strong>Background in this subject:</strong> ${formData.get('webDev')}</li>
        <li><strong>Primary Computer Platform:</strong> ${formData.get('platform')}</li>
        <li><strong>Courses:</strong>
          <ul>${courses}</ul>
        </li>
        <li><strong>Funny/Interesting item about yourself:</strong> ${formData.get('funnyThing')}</li>
      </ul>
      <button onclick="location.reload()">Reset</button>
    `;
  
    form.style.display = 'none';
  }
  
  