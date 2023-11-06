import readTicketsByUser from "../../../server/mongodb/actions/readTicketsByUser.js"

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const tickets = await readTicketsByUser(req.query)
            return res.status(200).json({'tickets': tickets})
        } catch (e) {
            return res.status(500).send('failed')
        }
    }
}