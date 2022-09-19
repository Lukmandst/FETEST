import React, { useState } from 'react';
import './card.css';

function Card({ name, email, dob, address, phone, pass, picture }) {
  const [active, setActive] = useState('name');
  return (
    <div className='card-body'>
      {!picture ? (
        <div
          className='user-pict'
          style={{
            width: '120px',
            height: '120px',
            borderRadius: '120px',
            fontSize: '40px',
            fontWeight: '600',
            color: 'white',
          }}
        >
          {name?.charAt(0)}
        </div>
      ) : (
        <img
          src={picture}
          alt='pict'
          style={{ width: '120px', height: '120px', borderRadius: '120px' }}
        />
      )}
      {active === 'name' ? (
        <div>
          <p>Hi, My name is</p>
          <p>{name}</p>
        </div>
      ) : active === 'email' ? (
        <div>
          <p>My email address is</p>
          <p>{email}</p>
        </div>
      ) : active === 'dob' ? (
        <div>
          <p>My birthday is</p>
          <p>{dob}</p>
        </div>
      ) : active === 'address' ? (
        <div>
          <p>My address is</p>
          <p>{address}</p>
        </div>
      ) : active === 'phone' ? (
        <div>
          <p>My phone is</p>
          <p>{`(+62) ${phone}`}</p>
        </div>
      ) : (
        <div>
          <p>My password is</p>
          <p>{pass}</p>
        </div>
      )}
      <div className='d-flex' style={{ gap: '10px' }}>
        <div onMouseOver={() => setActive('name')}>name</div>
        <div onMouseOver={() => setActive('email')}>email</div>
        <div onMouseOver={() => setActive('dob')}>dob</div>
        <div onMouseOver={() => setActive('address')}>address</div>
        <div onMouseOver={() => setActive('phone')}>phone</div>
        <div onMouseOver={() => setActive('pass')}>pass</div>
      </div>
    </div>
  );
}

export default Card;
