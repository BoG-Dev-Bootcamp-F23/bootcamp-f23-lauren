import deleteTicket from '../../../server/mongodb/actions/deleteTicket'

export default async function handler(req, res) {
    if (req.method === 'DELETE') {
        try {
            await deleteTicket(req.query)
            return res.status(200).send('success')
        } catch (e) {
            return res.status(500).send('failed')
        }
    }
}