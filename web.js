
    
document.addEventListener('DOMContentLoaded', function() {
  const sendButton = document.getElementById('sendButton');
  const messageForm = document.getElementById('messageForm');
  const messageStatus = document.getElementById('messageStatus');

  sendButton.addEventListener('click', function() {
    const name = document.getElementById('username').value;
    const email = document.getElementById('password').value;
    const message = document.getElementById('message').value;

    
    if (name.trim() !== '' && email.trim() !== '' && message.trim() !== '') {
      
     alert(  'Message sent successfully!');
      messageForm.reset(); 
    } else {
      alert('Invalid details. Please fill in all fields.');
    }
  });
});