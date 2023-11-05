import connectDB from '../index.js'
import Ticket from '../models/Ticket.js'

export default async function updateTicketByUser(data) {
    try {
        await connectDB();
        const { ticketID, userID } = data;
        await Ticket.findByIdAndUpdate(ticketID, { userId: userID })
    } catch (e) {
        console.log(e);
    }
}