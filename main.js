// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
    apiKey: "AIzaSyAcmFlhtgdtH_zGFZVEgr8FtxGZRgWIRZ0",
    authDomain: "learned-d6d0d.firebaseapp.com",
    databaseURL: "https://learned-d6d0d-default-rtdb.firebaseio.com",
    projectId: "learned-d6d0d",
    storageBucket: "learned-d6d0d.appspot.com",
    messagingSenderId: "37786706084",
    appId: "1:37786706084:web:cbc1fc971ddf9ef7b98631"
  };

firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var firstname = getInputVal('firstname');
  var lastname = getInputVal('lastname');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(firstname, lastname, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(firstname, lastname, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    firstname: firstname,
    lastname:lastname,
    email:email,
    phone:phone,
    message:message
  });
}