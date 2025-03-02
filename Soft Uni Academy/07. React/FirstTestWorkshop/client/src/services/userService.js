const url = "http://localhost:3030/jsonstore/users"
export default {
    async getAll(){
        const response = await fetch(url);
        const result = await response.json();
        const users = Object.values(result); 
        return users;
        // return await fetch(url).then(res => res.json())
    }
    // getAllUsers: () => fetch(url).then(res => res.json())
}