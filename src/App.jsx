import { useState } from 'react';
import Head from "./Head";
import Button from './Button';
import Gender from './Gender';

const App=()=>{
return (<>
<div className='container'>
  <div className='main'>
  <div className='user'>
    <Head />
    <div className='me'>
    <div className='inputs'>
      <span className='first'>First Name</span>
      <span className='last'>Last Name</span>
    </div>
<input type="text" placeholder='Enter your first name' className='name1'></input>
<input type="text" placeholder='Enter your last name' className='name2'></input>
<br></br>
<span className='input'>Email Address</span>
<br></br>
<input type='text' placeholder='Enter your email' className='user-detail'></input>
<br></br>
<Gender />
<span className='input'>City</span>
<br></br>
<input type='text' placeholder='Enter your City' className='user-detail'></input>
<br></br>
<span className='input'>Country</span>
<br></br>
<input type='text' placeholder='Enter your Country' className='user-detail'></input>
<br></br>
<div className='but'>
    <Button />
    </div>
    </div>
    </div>
  </div>
</div>
</>
)
}

export default App
