export default async function handler(req, res) {
    const p1 = req.body.pokemon1;
    const p2 = req.body.pokemon2;
    const url = "https://pokeapi.co/api/v2/pokemon/";

    if (req.method === 'POST') {
        const response1 = await fetch(url + p1);
        const response2 = await fetch(url + p2);

        try {
            const data1 = await response1.json();
            const data2 = await response2.json();

            const stat1 = parseInt(data1.stats[0].base_stat);
            const stat2 = parseInt(data2.stats[0].base_stat);

            if (stat1 > stat2) {
                res.status(200).json({ winner: data1.name });
            } else if (stat2 > stat1) {
                res.status(200).json({ winner: data2.name });
            } else {
                res.status(200).json({winner: "tie"});
            }

        } catch(e) {
            res.status(400).json({ error: "invalid pokemon" });
        }

    }
}