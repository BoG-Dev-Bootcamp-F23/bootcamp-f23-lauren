import connectDB from '../index.js'
import User from '../models/User.js'
import Ticket from '../models/Ticket.js'

export default async function updateTicketByUser(data) {
    try {
        await Ticket.findByIdAndUpdate(data.ticketID, { 'userID': data.userID })
    } catch (e) {
        console.log(e)
    }
}