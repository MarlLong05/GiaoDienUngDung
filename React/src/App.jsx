import './App.css'
import Header from './components/Header'
import StudentInf from './components/StudentInf'
import Footer from './components/Footer'
function App() {
  const student = { 
    name: "Nguyen Thanh Long", 
    mssv: "23723141", 
    classNameSV: "KTP19ATT"
  }

  return (
    <div className="products">
      <Header className="header" />

      <StudentInf
        className="Info"
        name={student.name}
        mssv={student.mssv}
        classNameSV={student.classNameSV}
      />

      <Footer className="footer" />



      {/* <ProductCard /> <br />
      <Button type="primary">Primary</Button>
      <Button type="danger">Danger</Button>
      <Button type="success">Success</Button> 
      <Login></Login> 
      <ProductList></ProductList>
      <Alert></Alert>
      <Header></Header> */}



        
    </div>
  )



}


export default App


