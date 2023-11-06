import connectDB from '../index.js'
import Ticket from '../models/Ticket.js'

export default async function readTicketsByUser(data) {
    try {
        await connectDB()
        const { id } = data
        return await Ticket.find({ "userID": id })
    } catch (e) {
        console.log(e)
    }
}