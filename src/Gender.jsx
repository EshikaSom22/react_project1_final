import React from 'react'

const Gender = () => {
  return (
    <div className='gender-details'>
        <span className='gender-title'>Gender</span>
        <div className='category'>
        <label>
        <input type="radio" value="male" name="gender">
           
        </input>
        <span className='option'> Male</span>
        </label>
        <label>
        <input type="radio" value="female" name="gender">
        </input>
        <span className='option'> Female</span>
        </label>
        </div>
    </div>
  )
}

export default Gender