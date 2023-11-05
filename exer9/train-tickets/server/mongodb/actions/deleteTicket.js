import connectDB from '../index.js'
import Ticket from '../models/Ticket.js'

export default async function deleteTicket(data) {
    try {
        await connectDB()
        const { identifier } = data
        await Ticket.findByIdAndDelete(identifier)
    } catch (e) {
        console.log(e)
    }
}