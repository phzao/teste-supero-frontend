export const headerJson = {
    'Accept': 'application/json',
    'content-type': 'application/json',
}

export const GetData = async (parameters = "") => {
    const res = await fetch(`http://18.217.183.126:8080/api/v1/tasks-all${parameters}`, {method: 'GET',headers: headerJson})
    const json = await res.json()
    
    return json
}

export const PostData = async (data) => {
    const res = await fetch('http://18.217.183.126:8080/api/v1/tasks', {
        method: 'POST',
        headers: headerJson,
        body: JSON.stringify(data)
    })

    const json = await res.json()

    return json
}

export const PutData = async (id, parameters = "", data = "") => {
    const res = await fetch(`http://18.217.183.126:8080/api/v1/tasks/${id}${parameters}`, {
        method: 'PUT',
        headers: headerJson,
        body: JSON.stringify(data)
    })

    return res.status
}

export const DeleteData = async (id) => {
    const res = await fetch(`http://18.217.183.126:8080/api/v1/tasks/${id}`, {
        method: 'DELETE',
        headers: headerJson,
        body: ''
    })

    return res.status
}