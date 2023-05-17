let token = 'a8abb8500756'

export const server_calls = {
    get:async () => {
        const response = await fetch(`https://feline-heliotrope-summer.glitch.me/api/cars`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer: ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }
        return await response.json()
    },
    create: async (data: any={}) => {
        console.log('in server')
        const response = await fetch(`https://feline-heliotrope-summer.glitch.me/api/car`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer: ${token}`,
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(data)//read more about this
        });

        if (!response.ok){
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },
    update: async (id:string, data:any={}) => {
        const response = await fetch(`https://feline-heliotrope-summer.glitch.me/api/car/${id}`,{
            method: 'POST',
            headers: {
                'x-access-token': `Bearer: ${token}`,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(data)
    });
        if (!response.ok){
            throw new Error('Failed to update data on server in the update function')
        }

        return await response.json()
    },
    delete: async (id: string) => {
        const response = await fetch(`https://feline-heliotrope-summer.glitch.me/api/car/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer: ${token}`
            },
    });
        if (!response.ok){
            throw new Error('Failed to delete data on server')
        }

        return;
    },
}