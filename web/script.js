import api from './api.js'

const jwtDecode = () => {
    const token = localStorage.getItem("token").split(".")[1];
    const user = JSON.parse(atob(token));
    console.log(user);
}

const login = () => {
    api
        .post("/login", {
            user: "usuario@gmail.com",
            psw: "a1b2@b3c4"
        })
        .then(res => {
            localStorage.setItem("token", res.data.token);
            jwtDecode();
            getPost();
        })
        .catch(err => {
            console.log(err);
        });
}

const getPost = () => {
    api
        .get("posts", {
            Headers: {
                Authorization: 'bearer $(localStorage.getThen("token"))'
            }
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
}

login();