const url = "http://localhost:3030/jsonstore/users"
export default {
    async getAll(){
        const response = await fetch(url);
        const result = await response.json();
        const users = Object.values(result); 
        return users;
        // return await fetch(url).then(res => res.json())
    },
    // getAllUsers: () => fetch(url).then(res => res.json())
    async create(userData){
        const { country, city, street, streetNumber, ...postData} = userData;

        postData.address = {country, city, street, streetNumber};
        postData.createdAt = new Date().toISOString();
        postData.updatedAt = new Date().toISOString();


        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        });
        return await response.json(); 
    }
}