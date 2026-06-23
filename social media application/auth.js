// Signup
const { createClient } = supabase

// Create a single supabase client for interacting with your database
const PROJECT_URL = 'https://qsakjdkxkicsxstnegfb.supabase.co'
const PUBLISH_URL = 'sb_publishable_XvU1Q1jm2E6f1qH4CHygtg_p4eTdiKk'
const supabaseClient = createClient(PROJECT_URL, PUBLISH_URL)
console.log(supabaseClient);

 const  signupbtn = document.querySelector('#signupbtn')
 const loginbtn = document.querySelector('#loginbtn')

 

 if(signupbtn){
signupbtn.addEventListener('click',signup)
 }
 if(loginbtn){

 loginbtn.addEventListener('click',login)
 }

function signup() {
    // let firstName = document.querySelector(#firstName)
    // let lastName = document.querySelector(#lastName)
    // let email = document.querySelector(#email)
    // let password = document.querySelector(#password)
   


    console.log('hello');


    // let users = JSON.parse(localStorage.getItem("users")) || [];

    // users.push({ user, pass });

    // localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful!");
    window.location.href = "login.html";
}

// Login
function login() {
    // let user = document.getElementById("user").value;
    // let pass = document.getElementById("pass").value;

    // let users = JSON.parse(localStorage.getItem("users")) || [];

    // let found = users.find(u => u.user === user && u.pass === pass);

  
        // localStorage.setItem("currentUser", user);
        window.location.href = "feed.html";
    // } else {
        // alert("Invalid credentials!");
    // }
}