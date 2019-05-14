import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <section className="container-fluid resume-section p-3 p-lg-5 d-flex align-items-center" id="contact">
        <div className="w-100">
          <h2 className="mb-5">Riacup - Contact</h2>
          <div className="row">
            <div className="col-lg-3 ml-auto text-center">
              <i className="fas fa-phone fa-3x mb-3 text-muted" />
              <div>+6281319695745</div>
            </div>
            <div className="col-lg-3 ml-auto text-center">
              <i className="fab fa-github fa-3x mb-3 text-muted" /> 
              <div>Riacup</div>
            </div>
            <div className="col-lg-3 ml-auto text-center">
              <i className="fab fa-facebook-f fa-3x mb-3 text-muted" />
              <div>Cupi</div>
            </div>
          </div> <br/><br/>
          <div className="row">
            <div className="col-lg-3 ml-auto text-center">
              <i className="fab fa-instagram fa-3x mb-3 text-muted" /> 
              <div>Cupi_07</div>
            </div>
            <div className="col-lg-3 ml-auto text-center">
              <i className="fab fa-twitter fa-3x mb-3 text-muted" />
              <div>Cupi07</div>
            </div>
            <div className="col-lg-3 ml-auto text-center">
              <i className="fas fa-envelope fa-3x mb-3 text-muted" />
              <div>cupi.supriyati07@gmail.com</div>
            </div>
          </div>
        </div>
      </section>
      </div>
    )
  }
}
