import { instance } from "./api.js";

export async function getAll(){
    const response = await instance.get('/series');
    return response.data;
}

export async function getById(id){
    const response = await instance.get(`/series/${id}`);
    return response.data;
}

export async function create(serie){
    const response = await instance.post('/series', serie);
    return response.data;
}

export async function update(id, serie){
    const response = await instance.patch(`/series/${id}`, serie);
    return response.data;
}

export async function remove(id){
    await instance.delete(`/series/${id}`);
}