const login = () => {
    // console.log("njkakjscndkjcndkcndkcn")
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    console.log(email)
    fetch("http://localhost:3000/login", {
        method: "POST",

        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        mode: "no-cors",
        body: JSON.stringify({
            "email": email,
            "password": password
        })
    })
        .then(res => {
            res.json()
            console.log(res)
        }).catch(err => { console.log(err) })
}