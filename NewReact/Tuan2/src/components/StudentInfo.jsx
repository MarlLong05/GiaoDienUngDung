import React from 'react'

const StudentInfo = (props) => {
  return (
    <div className='info'
        style={{
            marginLeft: "120px"
        }}>
        <p>Ho ten : {props.name}</p>
        <p>Ma so sinh vien: {props.mssv}</p>
        <p>Lop hoc: {props.lop}</p>
    </div>
  )
}

export default StudentInfo