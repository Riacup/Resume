import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="container-fluid p-0 resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-100">
          <h1 className="mb-0">Supriyati
            <span className="text-primary">  (Riacup)</span>
          </h1>
          <div className="subheading mb-5">Sleman, Yogyakarta ·
            <a href="mailto:name@email.com">  +6281319595745</a>
          </div>
          <p className="lead mb-5">
            Saya adalah mahasiswa D3 Komputer dan Sistem Informasi, Sekolah Vokasi, Universitas Gadjah Mada. Saya tertarik untuk menjadi seorang Web Developer. Pada dasarnya saya adalah orang yang siap untuk bekerja keras, bertanggung jawab, tekun, dan amanah dalam mengemban tugas.
          </p>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="https://github.com/Riacup">
              <i className="fab fa-github" />
            </a>
            <a href="https://www.twitter.com/">
              <i className="fab fa-twitter" />
            </a>
            <a href="https://www.facebook.com/">
              <i className="fab fa-facebook-f" />
            </a>
          </div>
        </div>
      </section>
      </div>
    )
  }
}