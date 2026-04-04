 import React from 'react'
 
 const App = () => {
   return (
     <div className='parent'>
       <div className="card">
    <div className="card-top">
      <div className="top-row">
        <div className="logo-box">
          {/* Amazon SVG logo */}
          <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M33.2 30.7c-5.3 3.9-13 6-19.7 6-9.3 0-17.7-3.4-24-9.1-.5-.4 0-1 .5-.7 6.8 4 15.3 6.4 24 6.4 5.9 0 12.4-1.2 18.3-3.8 1-.4 1.7.7.9 1.2z" transform="translate(7,3) scale(0.72)"/>
            <path d="M35.4 28.1c-.7-.9-4.5-.4-6.2-.2-.5.1-.6-.4-.1-.7 3-2.1 8-1.5 8.6-.8.6.7-.2 5.5-3 7.8-.4.4-.9.2-.7-.3.7-1.7 2.1-5.1 1.4-5.8z" transform="translate(7,3) scale(0.72)"/>
            <path d="M11.4 21.6H8.8c-.3 0-.5-.2-.5-.5V7.7c0-.3.3-.5.5-.5h2.4c.3 0 .5.2.5.5v1.7c.6-1.7 1.8-2.5 3.3-2.5 1.6 0 2.5.8 3.2 2.5.6-1.7 2.1-2.5 3.5-2.5.9 0 1.9.4 2.5 1.2.7.9.5 2.3.5 3.5v9.5c0 .3-.3.5-.5.5h-2.6c-.3 0-.5-.2-.5-.5v-8c0-.5 0-1.7-.1-2.1-.2-.8-.6-1-1.2-1-.5 0-1 .3-1.2.9-.2.6-.2 1.5-.2 2.2v8c0 .3-.3.5-.5.5h-2.6c-.3 0-.5-.2-.5-.5v-8c0-1.7.3-4.2-1.3-4.2-1.6 0-1.5 2.4-1.5 4.2v8c0 .3-.3.5-.5.5z" transform="translate(7,3) scale(0.72)"/>
          </svg>
        </div>
        <button className="save-pill">
          Save
          <svg viewBox="0 0 24 24" strokeWidth="2">
            <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/>
          </svg>
        </button>
      </div>
      <p className="posted">Amazon · 5 days ago</p>
      <h2 className="job-title">Senior UI/UX<br/>Designer</h2>
      <div className="accent-line"></div>
    </div>

    <div className="card-body">
      <div className="tags">
        <span className="tag">Part-time</span>
        <span className="tag">Senior level</span>
      </div>

      <div className="info-row">
        <svg viewBox="0 0 24 24" strokeWidth="1.5">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
        <div>
          <div className="info-label">Location</div>
          <div className="info-val">San Francisco, CA</div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="footer">
        <div>
          <div className="rate-label">Hourly rate</div>
          <div className="salary">$120<span>/hr</span></div>
        </div>
        <button className="apply-btn">Apply now →</button>
      </div>
    </div>
  </div>

      

      </div>
   )
 }
 
 export default App
