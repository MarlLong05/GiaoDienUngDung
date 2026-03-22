import {React , useState }from 'react'

const Form = () => {
    const [form, setForm] = useState({
        name : "", 
        email: "", 
        age : "" 
    })

    const handleChange = (e) =>{ 
        const [name, value] = e.target ; 

        setForm({
            ...form , 
            [name] : value
        }
        )
    }
  return (
    <div style={{
        display: "flex",  
        flexDirection: "column" , 
        padding: "10px",
        margin: "50px auto",
        gap: "2px",
        backgroundColor: "white",
        width:"200px",
        borderRadius: "2px"
        
    }}>
        <input style={{margin: "5px"}} type="text" name='name' value={form.name} onChange={handleChange} placeholder='Nhap name' />
        <input style={{margin: "5px"}} type="text" name='email' value={form.email} onChange={handleChange} placeholder='Nhap email' />
        <input style={{margin: "5px"}} type="text" name='age' value={form.age} onChange={handleChange} placeholder='Nhap age' />


      
    </div>
  )
}

export default Form
