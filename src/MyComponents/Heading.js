import React from 'react'
import './Heading.css';

export const Heading = () => {
    return (
        <div className="temp" style={{display:"flex"}}>
            <img className='image' src="https://previews.123rf.com/images/captainvector/captainvector1703/captainvector170309311/74165534-college-logo-element.jpg"
                 alt="" />
            <figure className="text-center">
                <blockquote className="blockquote">
                    <h1>Cambridge Institute Of Technology</h1>
                </blockquote>
                <figcaption className="blockquote-footer" style={{font:"status-bar"}}>
                    <b>One Of The Finest Institute Of The World</b>
                </figcaption>
            </figure>
        </div>

    )
    
}
