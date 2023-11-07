import connectDB from '../index.js'
import Ticket from '../models/Ticket.js'
import User from '../models/User.js'

export default async function readTicketsByUser(data) {
    try {
        await connectDB()
        const { id } = data
        if (User.exists({_id: id}) === null) return false
        return await Ticket.find({ "userID": id })
    } catch (e) {
        console.log(e)
    }
}