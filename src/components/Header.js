import React from 'react'

export const Header = (props) => {
    return (
        <section className="column my-4">
            <h1 className="title is-1 has-text-center">
                {props.title}
            </h1>

            {
                props.subtitle ? 
                <h3 className="subtitle is-5 has-text-center">
                    {props.subtitle}
                </h3> :
                <></>
            }

        </section>
    )
}
