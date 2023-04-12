import { Formik, useFormik } from 'formik';

function SignUp() {

    const formik = useFormik({
        initialValues:{
            name: '',
            email: '',
            password: '',
        },
        onSubmit: (values)=>{
            console.log(values);
        }
    })
    
    


    return (
        <>
            <h1 style={{ textAlign: "center" }}>Form</h1>

            <form style={{ textAlign: "center" }} onSubmit={formik.handleSubmit}>

                <input type="text" id='name' name='name' placeholder='Your Name' onChange={formik.handleChange} value={formik.values.name}/>
                <input type="email" id='name' name='email' placeholder='Your Email' onChange={formik.handleChange} value={formik.values.email}/>
                <input type="password" id='name' name='password' placeholder='Your Password' onChange={formik.handleChange} value={formik.values.password}/>

                <button type='Submit' >Submit</button>
            </form>
        </>
    )
}

export default SignUp