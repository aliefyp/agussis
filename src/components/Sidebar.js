import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
      <div className="agussis__sidebar">
      	<div className="image" />
      	{/*<div className="logo" />*/}
        <div className="menu">
        	<div className="item">TENTANG</div>
        	<div className="item">RIWAYAT</div>
        	<div className="item">GALERI</div>
        	<div className="item">KONTAK</div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
