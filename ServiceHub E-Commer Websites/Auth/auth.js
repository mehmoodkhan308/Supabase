import supabaseClient from "../app.js";

let name = document.getElementById('name');
let email = document.getElementById('email');
let password = document.getElementById('password');
let sservicetype = document.getElementById('servicetype');


const SignUphander = async () => {
    const { data, error } = await supabaseClient.auth.signUp({
        email: email.value,
        password: password.value
    })

    // console.log(data);
        const userData = {
            name: name.value,
            email: email.value,
            servicetype: servicetype.value,
            user_id: data.user.id

        }

    // console.log(userData);


    if (error) {
        alert(error)
    } else {
        console.log(data);
        alert('user register')



        const { error } = await supabaseClient
            .from('userdata')
            .insert(userData)

        if (error) {
            alert(error);
            console.log(error);

        }

    }

}

window.SignUphander = SignUphander