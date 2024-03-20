import { loginUrl, logoutURL, registerUrl } from "../constants/index.js";
import page from "./../../node_modules/page/page.mjs";

export function getAuthData() {
    return JSON.parse(localStorage.getItem("auth"));
}

export function handleLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    const user = {
        email,
        password,
    };
    login(body)
        .then(() => {
            page.redirect("/products");
        })
        .catch((err) => {
            alert(err.message);
            console.log(err)
        });
}

function register(body) {
    return fetch(registerUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    })
        .then((res) => {
            if (res.status !== 200) {
                throw new Error("Invalid credentials!")
            }
            return res.json()
        })
        .then((data) => {
            setAuthData(data)
        })
}

export function login(body) {
    return fetch(loginUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    })
        .then((res) => {
            if (res.status !== 200) {
                throw new Error("Invalid credentials!")
            }
            return res.json()
        })
        .then((data) => {
            setAuthData(data)
        })
}

function setAuthData(authData) {
    localStorage.setItem("auth", JSON.stringify(authData));
}


export function handleRegister(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const rePassword = formData.get("re-password");

    if (!email || !password || !rePassword) {
        alert("All fields are required!");
        return;
    }
    if (password.length < 6) {
        alert("The password should be at least 6 characters long!")
    }
    if (password !== rePassword) {
        alert("Both passwords are different!");
    }
    const body = {
        email,
        password,
    };
    register(body)
        .then(() => {
            page.redirect("/");
        })
        .catch((err) => {
            alert(err.message);
            console.log(err)
        });
}

export function logout() {
    return fetch(logoutURL, {
        method: "GET",
        headers: {
            "X-Authorization": getAuthData().accessToken,
        },
    })
        .then(() => {
            localStorage.removeItem("auth"); 
        })  /*
    .then((res) => {
        if(res.status !== 200){
            throw new Error("Invalid Status!")
        }
    })
    .then((data) => {
        localStorage.removeItem("auth");
        page.redirect("/");
    })  */
}