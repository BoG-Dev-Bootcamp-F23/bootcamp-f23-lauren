import readTicketsByUser from "../../../server/mongodb/actions/readTicketsByUser.js"

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const tickets = await readTicketsByUser(req.query)
            if (!tickets) {
                return res.status(400).send('user not found')
            }
            return res.status(200).json({'tickets': tickets})
        } catch (e) {
            return res.status(500).send('failed')
        }
    }
}