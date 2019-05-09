import React, { Component } from 'react'

export default class Experience extends Component {
  render() {
    return (
      <div>
        <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
        <div className="w-100">
          <h2 className="mb-5">Riacup - Experience</h2>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-3">
            <div className="resume-content">
              <h3 className="mb-0">Frontend Developer</h3>
              <div class="subheading mb-3">Maret - April 2019</div>
              <p>Proyek pembuatan Sistem Informasi Cuti Online Pengadilan Agama Wates.</p>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-3">
            <div className="resume-content">
              <h3 className="mb-0">Frontend Developer</h3>
              <div class="subheading mb-3">Oktober - November 2018</div>
              <p>Proyek pembuatan Sistem Informasi Seminar UGM.</p>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-3">
            <div className="resume-content">
              <h3 className="mb-0">Programmer</h3>
              <div class="subheading mb-3">September - Desember 2018</div>
              <p>Proyek pembuatan aplikasi platform android : Moviecation.</p>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-3">
            <div className="resume-content">
              <h3 className="mb-0">UI/UX</h3>
              <div class="subheading mb-3">April - Mei 2018</div>
              <p>Membuat tampilan aplikasi android : CupiStore.</p>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Frontend Developer</h3>
              <div class="subheading mb-3">Februari - Mei 2018</div>
              <p>Proyek pembuatan Sistem Informasi OkeAja berbasis web.</p>
            </div>
          </div>
        </div>
      </section>
      </div>
    )
  }
}
