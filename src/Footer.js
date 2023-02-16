import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <>
    <footer className='footer'>
    <div className='footer_container'>
        <div className="footer_top">
            <div >
                <h6 className='footer_title'>Footer1</h6>
                <ul className='footer_list-item'>
                    <a href="" className='footer_list_link'> about us </a>
                </ul>
                <ul className='footer_list-item'>
                    <a href="" className='footer_list_link'> about us </a>
                </ul>
                <ul className='footer_list-item'>
                    <a href="" className='footer_list_link'> about us </a>
                </ul>
                <ul className='footer_list-item'>
                    <a href="" className='footer_list_link'> about us </a>
                </ul>
            </div>
            
        </div>

        <hr className='footer_divider'/>
        
        <div className='footer_bottom'>
            <span className='copyright'>@</span>
            <ul className='footer_list'>
                <li className='footer_list-item'>
                    <a href="" className='footer_list-link'>
                        <i className='fb'>icon</i>
                    </a>
                </li>
            </ul>
        </div>

    </div>
    </footer>
    </>
  )
}

export default Footer