import React, { useState } from 'react'
import CSVReader from 'react-csv-reader'

export const MailerForm = () => {
    
    const [Tickets, setTickets] = useState([])
    const [readCSV, setreadCSV] = useState([])
    

    const readCSVDataToTickets = async (ticketArray) => {
        let headers = ticketArray[0]
        let data = ticketArray.slice(1)
        let newTickets = []
        
        data.forEach((ticket) => {
            let newTicket = {}
            ticket.forEach((ticketData, id) => {
                newTicket[headers[id]] = ticketData
            })
            newTickets.push(newTicket)
        })
        setTickets(newTickets)
    }

    return (
        <div className="">
            <section className="my-2">
                <CSVReader onFileLoaded={(data) => setreadCSV(data)} />
            </section>

            <section className="my-2">
                <label className="mr-2">Subject</label>
                <input type="text" name="title" id="title" size="87"/>
            </section>
            
            <section className="">
                <textarea name="message" id="msg" placeholder="Type your message in here" cols="100" rows="20"></textarea>
            </section>

            <button onClick={() => { readCSVDataToTickets(readCSV)}}>Send</button>

        </div>
    )
}
