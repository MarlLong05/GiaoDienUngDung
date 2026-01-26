import React from 'react'
import './StudentInf.css'
const StudentInf = (props) => {
  return (
    <div className='Thongtin'>
        <h4>Thong tin</h4>
        <p>Ho va ten: {props.name} </p>
        <p>Ma so sinh vien: {props.mssv}</p>
        <p>Lop: {props.classNameSV}</p>
    </div>
  )
}

export default StudentInf