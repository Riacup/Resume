import React, { Component } from 'react'

export default class Hobi extends Component {
  render() {
    return (
      <div>
        <section className="container-fluid resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
        <div className="w-100">
          <h2 className="mb-5">Hobbies - Riacup</h2>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
            <i class="fal fa-music" />
              <span>Music</span>
            </li> <br />
            <li className="list-inline-item">
              <i className="fab fa-css3-alt" />
            </li>
            
          </ul>
        </div>
      </section>
      </div>
    )
  }
}
