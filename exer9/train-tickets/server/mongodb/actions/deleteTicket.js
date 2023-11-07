import connectDB from '../index.js'
import Ticket from '../models/Ticket.js'

export default async function deleteTicket(data) {
    try {
        await connectDB()
        const { identifier } = data
        const exists = Ticket.exists({ _id: identifier })
        if (!exists) return false
        await Ticket.findByIdAndDelete(identifier)
        return true
    } catch (e) {
        console.log(e)
    }
}