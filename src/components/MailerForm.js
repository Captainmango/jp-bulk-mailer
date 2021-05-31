import React from 'react'

export const MailerForm = ({props}) => {
    return (
        <div className="">
            <section className="my-2">
                <label for="csv" className="mr-2">File</label>
                <input type="file" name="csv" id="csv" />
            </section>

            <section className="my-2">
                <label className="mr-2">Subject</label>
                <input type="text" name="title" id="title" size="87"/>
            </section>
            
            <section classname="">
                <textarea name="message" id="msg" placeholder="Type your message in here" cols="100" rows="20"></textarea>
            </section>

            <button>Send</button>
        </div>
    )
}
