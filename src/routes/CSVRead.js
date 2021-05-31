import React, { useState } from 'react'
import { Header } from '../components/Header'
import { MailerForm } from '../components/MailerForm'

export const CSVRead = () => {

    return (
        <div className="column is-half">
            <Header title={"Bulk Ticket Mailer"} subtitle={"Upload a CSV to send multiple customers emails through Zendesk"}/>
            <MailerForm />
        </div>
    )
}
