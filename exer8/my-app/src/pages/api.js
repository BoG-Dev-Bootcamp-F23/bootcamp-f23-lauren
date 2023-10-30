export default async function handler(req, res) {
    const url = "https://pokeapi.co/api/v2/pokemon/";

    if (req.method === 'GET') {
        try {
            const id = Math.floor(Math.random() * 1000) + 1;
            const response = await fetch(url + id);
            const data = await response.json();
            
            res.status(200).json(data);

        } catch(e) {

        }
    }
}