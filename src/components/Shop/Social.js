import React from 'react'

export default function Social(props)  {
   

        // console.log(this.props, 'props');
        return (
            <li key={props.id}>
                <a href={props.href} target="_blank">
                    <img src={props.img} />
                </a>
            </li>
        )

}
