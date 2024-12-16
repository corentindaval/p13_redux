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
    console.log("token:"+token)
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


export async function maj_profile(maj,token) {
    const val_nom = maj[1];
    const val_prenom = maj[0];
    if (val_nom != "" & val_prenom != "") {
        let response;
        try {
            response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: 'PUT',
                body: JSON.stringify({ firstName: val_prenom, lastName: val_nom }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token

                }
            })
                .then(data => data.json())
        } catch (err) {
            console.log(err)
        }
        return response
    }
}