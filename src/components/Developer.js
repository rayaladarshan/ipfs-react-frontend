import React from 'react'

export default function Developer(props) {
  return (
    <>
        <div className="col-md-3 my-3">
            <div className="info">
              <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle">
                <i className="ni ni-atom">
                  <img src={process.env.PUBLIC_URL + props.img} className="devI" id="devImg" alt="dev logo" style={{width:'100%', aspectRatio:1.2, objectFit:'contain'}} />
                </i>
              </div>
              <h6 className="info-title text-uppercase text-success">{props.name}</h6>
              <a href={'mailto:'+props.email} target="_blank" rel="noreferrer">
                <p className="description opacity-8">{props.email}</p>
              </a>
            </div>
          </div>
    </>
  )
}
