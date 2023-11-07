import deleteTicket from '../../../server/mongodb/actions/deleteTicket'

export default async function handler(req, res) {
    if (req.method === 'DELETE') {
        try {
            const exists = await deleteTicket(req.query)
            if (!exists) {
                return res.status(400).send('ticket not found')
            }
            return res.status(200).send('success')
        } catch (e) {
            return res.status(500).send('failed')
        }
    }
}