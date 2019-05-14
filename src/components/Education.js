import React, { Component } from 'react'

export default class Education extends Component {
  render() {
    return (
      <div>
        <section className="container-fluid resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
        <div className="w-100">
          <h2 className="mb-5">Riacup - Education</h2>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-2">
            <div className="resume-content">
              <h3 className="mb-0">Universitas Gadjah Mada</h3>
              <div className="subheading mb-3">D3 Komputer dan Sistem Informasi</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2017 - Sekarang</span>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-2">
            <div className="resume-content">
              <h3 className="mb-0">SMA Negeri 2 Pati</h3>
              <div className="subheading mb-3">Matematika dan Ilmu Pengetahuan Alam</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2014 - 2017</span>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">SMP Negeri 1 Pati</h3>
              <div className="subheading mb-3">Kelas Bilingual</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2011 - 2014</span>
            </div>
          </div>
        </div>
      </section>
      </div>
    )
  }
}
