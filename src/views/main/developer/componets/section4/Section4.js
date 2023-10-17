import React from 'react'
import { Col, Row } from 'reactstrap'

export const Section4 = () => {
  return (
    <>
        <Row style={{background: "#cfcccc", marginLeft: "98px", marginRight: "98px"}}>
            <div className='d-flex justify-content-end'>
            <Col>
                <div>
                    <div className='section4-heading'>
                        <h1>Stop building from scratch !</h1>
                    </div>
                    <div className='section4-info'>
                        <p>Our developer-friendly APIs are
easy to understand, implement & iterate.
Build on top of core features such as forms,
shopping cart, user profile, wishlist & more</p>
                    </div>
                    <div className='section4-button'>
                        <button>Get Started</button>
                    </div>
                </div>
            </Col>

            <Col>
                <div className='section4-img'>
                    
                </div>
            </Col>
            </div>
        </Row>
    </>
  )
}
