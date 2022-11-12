import React from 'react';

export const About = (props) => {
  return (
    <div>
      <br/><br/><br/>
      <div className="card" style={{width:"96rem",borderRadius:"40px", height:"400px", textAlign:"center", fontSize:"20px"}}>
        <div className="card-body">
          <br/><br/>
          <p className="card-text">This College has been established to provide the very best practical Career Training in market place oriented skills within a pleasant professional environment. It is our desire to continually strive for a level of excellence that will improve the quality of life of all our members. Students should feel that we are caring for their needs all of the time and that the training provided will improve their career prospects and provide a more secure future.
                The college members adopted the following mission statement since March 1999.</p>
  
        </div>
      </div>
      <br/><br/><br/>
      <div style={{textAlign:"center"}}>
       <b><u><h1>Current Board:</h1></u></b> 
       <h2>Trustee: {props.Greet}</h2>
       <h2>Principal: {props.Principal}</h2>
       <h2>HOD: {props.HOD}</h2>
       <h2>Chairman: {props.Chairman}</h2>
       </div>
    </div>
  )
}
