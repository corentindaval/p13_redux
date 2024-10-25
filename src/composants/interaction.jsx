import axios from "axios"

export async function login(infos) {
    let response;
    try {
        response = await fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(infos)
        })
            .then(data => data.json())
    } catch (err) {
        console.log(err)
    }
    return response
}

export async function profile(token) {
    let response;
    try {
        response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':'Bearer '+token

            }
        })
            .then(data => data.json())
    } catch (err) {
        console.log(err)
    }
    return response
}