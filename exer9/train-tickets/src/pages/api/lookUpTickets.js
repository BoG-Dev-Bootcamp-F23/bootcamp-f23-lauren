import readTicketsByUser from "../../../server/mongodb/actions/readTicketsByUser"

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            await readTicketsByUser(req.query)
            return res.status(200).send('success')
        } catch (e) {
            return res.status(500).send('failed')
        }
    }
}