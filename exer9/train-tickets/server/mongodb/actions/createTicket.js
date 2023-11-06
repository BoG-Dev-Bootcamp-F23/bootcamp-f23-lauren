import connectDB from '../index.js'
import Ticket from '../models/Ticket.js'

export default async function createTicket(data) {
    try {
        await connectDB()
        const newTicket = new Ticket(data)
        await newTicket.save()
    } catch (e) {
        console.log(e)
        throw new Error('messed up')
    }
}