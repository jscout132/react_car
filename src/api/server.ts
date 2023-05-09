let token = 'a8abb8500756'

export const server_calls = {
    get:async () => {
        const response = await fetch('https://feline-heliotrope-summer.glitch.me/api/cars',{
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
    }
}