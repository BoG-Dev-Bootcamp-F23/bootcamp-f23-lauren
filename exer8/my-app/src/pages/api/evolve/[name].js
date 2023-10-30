export default async function handler(req, res) {
    const name = req.query.name;
    const speciesURL = "https://pokeapi.co/api/v2/pokemon-species/";

    if (req.method === 'GET') {
        try {
            const speciesResponse = await fetch(speciesURL + name);
            const speciesData = await speciesResponse.json();

            const chainURL = speciesData.evolution_chain.url;
            const chainResponse = await fetch(chainURL);
            const chainData = await chainResponse.json();
            let chain = chainData.chain;

            while(true) {
                if (chain.species.name === name) {
                    if (chain.evolves_to.length !== 0) {
                        res.status(200).json({ next_evolution: chain.evolves_to[0].species.name });
                        break;
                    } else {
                        res.status(200).json({ next_evolution: chain.species.name });
                        break;
                    }
                } else {
                    if (chain.evolves_to.length !== 0) {
                        chain = chain.evolves_to[0];
                    } else {
                        res.status(400).json({ error: 'invalid pokemon'});
                        break;
                    }
                }
            }

        } catch(e) {
            res.status(400).json({ error: "invalid pokemon" });
        }
    }
}