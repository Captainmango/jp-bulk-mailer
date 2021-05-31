import React, { useState } from 'react'
import { MailerForm } from '../components/MailerForm'

export const CSVRead = () => {

    const [Tickets, setTickets] = useState({tickets:[]})

    return (
        <div className="columns">
            <MailerForm />
        </div>
    )
}
