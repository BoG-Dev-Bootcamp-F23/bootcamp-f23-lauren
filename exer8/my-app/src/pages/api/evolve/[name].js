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
            const queue = [chainData.chain];
            let next = [];
            let found = false;

            while(queue.length !== 0) {
                const currChain = queue.shift();

                if (currChain.species.name === name) {
                    found = true;
                    if (currChain.evolves_to.length !== 0) {
                        next = currChain.evolves_to.map((curr) => {
                            return curr.species.name;
                        });
                        break;
                    } else {
                        next.push(currChain.species.name);
                        break;
                    }
                } else if (currChain.evolves_to.length !== 0) {
                    for (let i = 0; i < currChain.evolves_to.length; i++) {
                        queue.push(currChain.evolves_to[i]);
                    }
                }
            }

            if (!found) {
                res.status(400).json({ error: "invalid pokemon!" });
            } else {
                res.status(200).json({ next_evolution: next });
            }

        } catch(e) {
            res.status(400).json({ error: "invalid pokemon" });
        }
    }
}