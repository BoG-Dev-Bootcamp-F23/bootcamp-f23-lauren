export default async function handler(req, res) {
    const type = req.query.type;
    const url = "https://pokeapi.co/api/v2/type/";

    if (req.method === 'GET') {
        const response = await fetch(url + type);

        try {
            const data = await response.json();

            const pokemon = data.pokemon;
            const names = pokemon.map((poke) => {
                return poke.pokemon;
            });

            res.status(200).json({ pokemon: names });
        } catch(e) {
            res.status(400).json({ error: "invalid type" });
        }
    }
}