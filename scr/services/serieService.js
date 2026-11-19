import api from "./api.js";

export async function getAll(){
    const response = await api.get('/series');
    return response.data;
}

export async function getById(id){
    const response = await api.get(`/series/${id}`);
    return response.data;
}

export async function create(serie){
    const response = await api.post('/series', serie);
    return response.data;
}

export async function update(id, serie){
    const response = await api.patch(`/series/${id}`, serie);
    return response.data;
}

export async function remove(id){
    await api.delete(`/series/${id}`);
}