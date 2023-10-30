export default async function handler(req, res) {
    const qname = req.query.name;
    const url = "https://pokeapi.co/api/v2/pokemon/";
    
    if (req.method === 'GET') {
        const response = await fetch(url + qname);

        try {
            const data = await response.json();
            
            const name = data.name;
            const sprite = data.sprites.front_default;
            const types = data.types.map((type) => {
                return type.type.name;
            });

            res.status(200).json({ name: name, sprite: sprite, types: types });
        } catch(e) {
            res.status(400).json({error: "invalid pokemon"});
        }
    }

}