import updateTicketByUser from "../../../server/mongodb/actions/updateTicketByUser";

export default async function handler(req, res) {
    if (req.method === 'PATCH') {
        try {
            await updateTicketByUser(req.body)
            return res.status(200).send('success')
        } catch (e) {
            return res.status(500).send('failed')
        }
    }
}