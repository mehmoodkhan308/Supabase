const { createClient } = supabase

// Create a single supabase client for interacting with your database
const PROJECT_URL = 'https://qsakjdkxkicsxstnegfb.supabase.co'
const PUBLISH_URL = 'sb_publishable_XvU1Q1jm2E6f1qH4CHygtg_p4eTdiKk'
const supabaseClient = createClient(PROJECT_URL, PUBLISH_URL)
console.log(supabaseClient);

const postbtn = document.querySelector(#postbtn)


function addPost() {
    let text = document.getElementById("text").value;
    let img = document.getElementById("img").value;

    let posts = JSON.parse(localStorage.getItem("posts")) || [];

    posts.unshift({
        user: localStorage.getItem("currentUser"),
        text,
        img
    });

    localStorage.setItem("posts", JSON.stringify(posts));

    document.getElementById("text").value = "";
    document.getElementById("img").value = "";

    loadPosts();
}

function loadPosts() {
    let container = document.getElementById("posts");
    container.innerHTML = "";

    let posts = JSON.parse(localStorage.getItem("posts")) || [];

    posts.forEach(p => {
        container.innerHTML += `
            <div class="post">
                <h4>@${p.user}</h4>
                <p>${p.text}</p>
                ${p.img ? `<img src="${p.img}" />` : ""}
            </div>
        `;
    });
}

window.onload = loadPosts;