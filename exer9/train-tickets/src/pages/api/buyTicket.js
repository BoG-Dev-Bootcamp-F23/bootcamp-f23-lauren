import createTicket from '../../../server/mongodb/actions/createTicket'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            await createTicket(req.body)
            return res.status(200).send('success')
        } catch (e) {
            return res.status(500).send('failed')
        }
    }
}