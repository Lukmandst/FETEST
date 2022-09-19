import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Card from './components/card';
import { SET_STORE_DATA } from './redux/action';

function App() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    dob: '',
    address: '',
    phone: '',
    pass: '',
  });
  const [random, setRandom] = useState(false);
  const [data, setData] = useState([]);

  const reset = () => {
    setForm({
      name: '',
      email: '',
      dob: '',
      address: '',
      phone: '',
      pass: '',
    });
  };

  const submit = () => {
    setData([...data, form]);
    setForm({
      name: '',
      email: '',
      dob: '',
      address: '',
      phone: '',
      pass: '',
    });
  };

  useEffect(() => {
    const getRandom = async () => {
      try {
        const result = await axios.get('https://randomuser.me/api');
        console.log(result.data.results[0]);
        let fullname = `${result.data.results[0].name.title}. ${result.data.results[0].name.first} ${result.data.results[0].name.last}`;
        let email = result.data.results[0].email;
        let dob = result.data.results[0].dob.date;
        let address = result.data.results[0].location.city;
        let phone = result.data.results[0].phone;
        let password = result.data.results[0].login.password;
        let picture = result.data.results[0].picture.medium;
        let randomData = {
          name: fullname,
          email: email,
          dob: dob,
          address: address,
          phone: phone,
          pass: password,
          picture: picture,
        };
        // dispatch(SET_STORE_DATA(randomData))
        setData([...data, randomData]);
      } catch (error) {
        console.log(error);
      }
    };
    if (random) {
      getRandom();
    }
  }, [random]);

  return (
    <div>
      <div className='form-wrapper'>
        <h1>Personal Information</h1>
        <p className='gray'>
          This information will be displayed publicly so be careful what you
          share.{' '}
        </p>
        <form>
          <div className='form-group'>
            <label>Full Name</label> <br />
            <input
              type={'text'}
              placeholder='Your Name'
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={50}
            />
          </div>
          <br />
          <div className='form-group'>
            <label>Email address</label>
            <br />
            <input
              type={'email'}
              placeholder='yourmail@mail.com'
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <br />
          <div className='form-group'>
            <label>Date of Birth</label>
            <br />
            <input
              type={'date'}
              placeholder='dd/mm/yy'
              value={form.dob}
              onChange={(e) => setForm({ ...form, dob: e.target.value })}
            />
          </div>
          <br />

          <div className='form-group'>
            <label>Address</label>
            <br />
            <input
              type={'text'}
              placeholder='Street Address'
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              maxLength={255}
            />
          </div>
          <br />
          <div className='form-group' style={{ position: 'relative' }}>
            <label>Phone Number</label>
            <br />
            <span
              style={{
                position: 'absolute',
                top: '40px',
                color: '#6B7280',
                left: '5px',
              }}
            >
              +62
            </span>
            <input
              type={'phone'}
              placeholder='e.g 813 2811 2993'
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              maxLength={13}
              style={{ paddingLeft: '40px' }}
            />
          </div>
          <br />
          <div className='form-group'>
            <label>Password</label>
            <br />
            <input
              type={'password'}
              placeholder='*******'
              value={form.pass}
              onChange={(e) => setForm({ ...form, pass: e.target.value })}
            />
          </div>
          <br />
          <p className='gray'>
            Minimum of 6 characters, with upper & lower case, a number and a
            symbol.
          </p>
        </form>
        <div className='button-section'>
          <div className='d-flex' style={{ gap: '10px' }}>
            <div className='btn btn-cancel' onClick={reset}>
              Cancel
            </div>
            <div className='btn btn-submit' onClick={submit}>
              Submit
            </div>
          </div>

          <div
            className='btn btn-generate'
            onClick={() => {
              setRandom(true);
              setTimeout(() => {
                setRandom(false);
              }, 500);
            }}
          >
            Auto Generate
          </div>
        </div>
        <div
          className='d-flex'
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          <div className='line'></div>
          <div className='clear-user' onClick={() => setData([])}>
            Clear All List User
          </div>
          <div className='line'></div>
        </div>
      </div>
      <div
        className='d-flex'
        style={{
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '10px',
          paddingLeft: 'auto',
          paddingRight: 'auto',
        }}
      >
        {Array.isArray(data) &&
          data.map((item, i) => (
            <Card
              key={i}
              name={item.name}
              email={item.email}
              dob={item.dob}
              address={item.address}
              phone={item.phone}
              pass={item.pass}
              picture={item.picture}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
