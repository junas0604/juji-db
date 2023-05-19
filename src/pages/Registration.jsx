import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput
} from 'mdb-react-ui-kit';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      LicenseN:"",
      Position:"",
      FirearmSerialNumber:"",
      Email:"",
      Password:"",
      RePassword:""
    };
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { Name, LicenseN, Position, FirearmSerialNumber, Email, Password, RePassword } = this.state;
    console.log(Name, LicenseN, Position, FirearmSerialNumber, Email, Password, RePassword);
    fetch("http://ocalhost:5000/Registration",{
      method:"POST",
      crossDomain:true,
      headers:{
        "Content-Type":"application/json",
        Accept:"application.json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        Name, 
        LicenseN, 
        Position, 
        FirearmSerialNumber, 
        Email, 
        Password, 
        RePassword
      }),
    }).then((res)=>res.json())
    .then((data)=>{
      console.log(data, "userRegister");
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundColor: 'Grey' }}>
          <div className='mask gradient-custom-3'></div>
          <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
            <MDBCardBody className='px-5'>
              <h2 className="text-uppercase text-center mb-5">Jail Guard Officer Registration Form</h2>
              <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='Name' type='text' onChange={e => this.setState({ Name: e.target.value })} />

              <MDBInput wrapperClass='mb-4' label='Your License Number' size='License Number' id='License_Number' type='text' onChange={e => this.setState({ LicenseN: e.target.value })} />

              <MDBInput wrapperClass='mb-4' label='Position' size='Position' id='Position' type='text' onChange={e => this.setState({ Position: e.target.value })} />

              <MDBInput wrapperClass='mb-4' label='Service Firearm Serial Number' size='Firearm Serial Number' id='Firearm_Serial_Number' type='text' onChange={e => this.setState({ FirearmSerialNumber: e.target.value })} />

              <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='Email' type='email' onChange={e => this.setState({ Email: e.target.value })} />

              <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='Password' type='Password' onChange={e => this.setState({ Password: e.target.value })} />

              <MDBInput wrapperClass='mb-4' label='Re-enter Password' size='lg' id='RePassword' type='Password' onChange={e => this.setState({ RePassword: e.target.value })} />

              <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </form>
    );
  }
}

export default Registration;
