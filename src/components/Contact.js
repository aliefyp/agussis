import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div>
      	<h1 className="agussis__h1">KONTAK</h1>
      	<h2 className="title">Agus Siswanto</h2>
      	<div className="col col6">
			<div>Jl Nusa Indah IV No.22</div>
      	</div>
      	<div className="col col6">
      		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d988.7853173718568!2d110.81858652916587!3d-7.559571899659264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a168566b5d7f5%3A0x7afdac9429e18d7b!2sGaleri+Agussis!5e0!3m2!1sid!2sid!4v1512224807707" width="400" height="200" frameborder="0" style={{border:0}} allowfullscreen></iframe>
      	</div>
      </div>
    );
  }
}

export default Contact;
