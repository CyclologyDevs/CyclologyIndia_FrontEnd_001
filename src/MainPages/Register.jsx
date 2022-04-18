import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import '../CSS_Style/signup.css'
import closeButton from '../images/x-lg.svg'


function Register() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    // const [filename, setFilename] = useState('');
    const [password, setPassword] = useState('');
    const [about_you, setAbout_you] = useState('');
    const [phone_number, setPhone_number] = useState('');
    const [emergency_contact, setEmergency_contact] = useState('');
    const [relation_emergency_contact, setRelation_emergency_contact] = useState('')
    const [date_of_birth, setDate_of_birth] = useState('');
    const [blood_group, setBlood_group] = useState('O+');
    const [occupation, setOccupation] = useState('')
    const [gender, setGender] = useState('')
    const [facebook_link, setFacebook_link] = useState('')
    const [insta_link, setInsta_link] = useState('')
    const [twitter_link, setTwitter_link] = useState('')
    const [linkdin_link, setLinkdin_link] = useState('')
    const [accident_insurance_number, setAccident_insurance_number] = useState('') //accident insurance number
    const [userReg, setUserReg] = useState(false);

    function onChangeValue(e) {
        setGender(e.target.value);
    }

    const onSubmit = async (e) => {
        // e.preventDefault();
        const data = { fname, lname, email, password, phone_number, about_you, date_of_birth, blood_group, occupation, gender, facebook_link, insta_link, twitter_link, linkdin_link, accident_insurance_number, emergency_contact, relation_emergency_contact };

        const res = await fetch('http://153.92.5.193:3600/account/register', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(() => {
            console.log('Data Send');
            setUserReg(true);
        })

        if (res.status === 400 || !res) {
            window.alert("Already Used Details")
        } else {
            // You need to Restart the Server for Proxy Works
            // Now Try Again
            window.alert("Registered Successfully");
        }
    }


    return (
        <div className='gradient-custom'>
            {userReg ? (
                <Redirect to='/login' />
            ) : (
                <section className=" bg-transparent font-serif">
                    <div className="container py-5 h-100">
                        <div className="row justify-content-center align-items-center h-100">
                            <div className="col-12 col-lg-9 col-xl-7">
                                <div className="card shadow-2-strong card-registration">
                                    <div className="card-body rounded-lg md:pl-6 md:pr-6 p-8 text-white">
                                        <h3 className="mb-1 pb-2 pb-md-0 mb-md-3 text-5xl text-center">Registration Form</h3>
                                        <form onSubmit={handleSubmit(onSubmit)} className='md:pl-8 md:pr-8'>
                                            <div className="row">
                                                <div className="col-md-6 mb-1">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="firstName">*First Name</label>
                                                        <input type="text" id="firstName" className="form-control form-control-lg"
                                                            {...register("firstName", { required: <p className='text-red-600'>⚠ First name is required</p>, maxLength: 20 })}
                                                            onChange={(e) => setFname(e.target.value)} />
                                                        {errors.firstName?.message}
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-1">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="lastName">*Last Name</label>
                                                        <input type="text" id="lastName" className="form-control form-control-lg"
                                                            {...register("lastName", { required: <p className='text-red-600'>⚠ Last name is required</p> })}
                                                            onChange={(e) => setLname(e.target.value)} />
                                                        {errors.lastName?.message}
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="row">
                                                <div className="col-md-6 mb-1 pb-2">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="emailaddress">*Email</label>
                                                        <input type="email" id="emailaddress" className="form-control form-control-lg"
                                                            {...register("emailaddress", { required: <p className='text-red-600'>⚠ email is required</p>, pattern: { value: /^\S+@\S+$/i, message: <p className='text-red-600'>⚠ This not a valid email</p> } })}
                                                            onChange={(e) => setEmail(e.target.value)} />
                                                        {errors.emailaddress?.message}
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-1 pb-2">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="password">*Password</label>
                                                        <input type="password" id="password" className="form-control form-control-lg"
                                                            {...register("password", { required: <p className='text-red-600'>⚠ password is required</p>, minLength: { value: 4, message: <p className='text-red-600'>⚠ Password must be more than 4 characters</p> }, pattern: { value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/, message: <p className='text-red-700'>⚠ Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters</p> } })}
                                                            onChange={(e) => setPassword(e.target.value)} />
                                                        {errors.password?.message}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 mb-1 pb-2">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="phone_number">*Phone Number</label>
                                                        <input type="tel" id="phone_number" className="form-control form-control-lg"
                                                            {...register("phone_number", { required: <p className='text-red-600'>⚠ phone number is required</p>, minLength: { value: 10, message: <p className='text-red-600'>⚠ must be 10 number</p> }, maxLength: { value: 10, message: <p className='text-red-600'>⚠ must be 10 number</p> } })}
                                                            onChange={(e) => setPhone_number(e.target.value)} />
                                                        {errors.phone_number?.message}
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-1 pb-2">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="emergency_contact">*Emergency Number</label>
                                                        <input type="tel" id="emergency_contact" className="form-control form-control-lg"
                                                            {...register("emergency_contact", { required: <p className='text-red-600'>⚠ emergency number is required</p>, minLength: { value: 10, message: <p className='text-red-600'>⚠ must be 10 number</p> }, maxLength: { value: 10, message: <p className='text-red-600'>⚠ must be 10 number</p> } })}
                                                            onChange={(e) => setEmergency_contact(e.target.value)} />
                                                        {errors.emergency_contact?.message}
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="row">
                                                <div className="col-md-6 mb-1 d-flex align-items-center">
                                                    <div className="form-outline datepicker w-100">
                                                        <label className="form-label" htmlFor="text">*Emergency Contact Relation</label>
                                                        <input type="text" id="relation_emergency_contact" className="form-control form-control-lg"
                                                            {...register("relation_emergency_contact", { required: <p className='text-red-600'>⚠ Emergency Contact Relation is required</p> })}
                                                            onChange={(e) => setRelation_emergency_contact(e.target.value)} />
                                                        {errors.relation_emergency_contact?.message}
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-1" onChange={onChangeValue}>
                                                    <h6 className="mb-2 pb-1 mt-2" id='gender'>*Gender: </h6>
                                                    <div className="form-check form-check-inline">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="inlineRadioOptions"
                                                            id="femaleGender"
                                                            value="Female"
                                                            checked={gender === "Female"}
                                                        />
                                                        <label className="form-check-label" htmlFor="femaleGender">Female</label>
                                                    </div>

                                                    <div className="form-check form-check-inline">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="inlineRadioOptions"
                                                            id="maleGender"
                                                            value="Male"
                                                            checked={gender === "Male"}
                                                        />
                                                        <label className="form-check-label" htmlFor="maleGender">Male</label>
                                                    </div>

                                                    <div className="form-check form-check-inline">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="inlineRadioOptions"
                                                            id="otherGender"
                                                            value="Other"
                                                            checked={gender === "Other"}
                                                        />
                                                        <label className="form-check-label" htmlFor="otherGender">Other</label>

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 mb-1 pb-2">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="phone_number">*Blood Group</label>
                                                        <select className="form-control form-control-lg" name="form-label" id="blood_group"
                                                            onChange={(e) => setBlood_group(e.target.value)} placeholder='Choose blood group'>
                                                            <option value="A+">A+</option>
                                                            <option value="B+">B+</option>
                                                            <option value="AB+">AB+</option>
                                                            <option value="O+">O+</option>
                                                            <option value="A-">A-</option>
                                                            <option value="B-">B-</option>
                                                            <option value="AB-">AB-</option>
                                                            <option value="O-">O-</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-1 pb-2">
                                                    <div className="form-outline datepicker w-100">
                                                        <label htmlFor="birthdayDate" className="form-label">*Birthday</label>
                                                        <input
                                                            type="Date"
                                                            className="form-control form-control-lg"
                                                            id="birthdayDate"
                                                            {...register("birthdayDate", { required: <p className='text-red-600'>⚠ Date of Birth is required</p> })}
                                                            onChange={(e) => setDate_of_birth(e.target.value)}
                                                        />
                                                        {errors.birthdayDate?.message}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 mb-1 pb-2">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="emailAddress">Facebook id</label>
                                                        <input type="text" id="facebook_link" className="form-control form-control-lg"
                                                            onChange={(e) => setFacebook_link(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-1 pb-2">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="phone_number">Instagram id</label>
                                                        <input type="text" id="insta_link" className="form-control form-control-lg"
                                                            onChange={(e) => setInsta_link(e.target.value)} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 mb-1 pb-2">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="emailAddress">Twitter id</label>
                                                        <input type="text" id="facebook_link" className="form-control form-control-lg"
                                                            onChange={(e) => setTwitter_link(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-1 pb-2">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="phone_number">Linkdin id</label>
                                                        <input type="text" id="insta_link" className="form-control form-control-lg"
                                                            onChange={(e) => setLinkdin_link(e.target.value)} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 mb-1 pb-2">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="text">*Occupation</label>
                                                        <input type="text" id="occupation" className="form-control form-control-lg"
                                                            {...register("occupation", { required: <p className='text-red-600'>⚠ occupation is required</p> })}
                                                            onChange={(e) => setOccupation(e.target.value)} />
                                                        {errors.occupation?.message}
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-1 pb-2">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="emailAddress">Accident insurance number</label>
                                                        <input type="text" id="accident_insurance_number" className="form-control form-control-lg"
                                                            onChange={(e) => setAccident_insurance_number(e.target.value)} />
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="row">
                                                {/* <div className="col-md-6 mb-1 pb-2">
                                                    <div className="form-outline">
                                                        <input type="file" id="filename" className="form-control form-control-lg"
                                                            onChange={(e) => setFilename(e.target.value)} />
                                                        <label className="form-label" htmlFor="myFile">Upload your Image</label>
                                                    </div>
                                                </div> */}
                                                <div className="col-md-6 mb-1 pb-2">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="phone_number">About you</label>
                                                        <input type="text" id="about_you" className="form-control form-control-lg"
                                                            onChange={(e) => setAbout_you(e.target.value)} />
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="form-check d-flex justify-content-center mb-3">
                                                <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    value=""
                                                    id="form2Example3c"
                                                    required
                                                />
                                                <label className="form-check-label" htmlFor="form2Example3">
                                                    I read & agree all statements in <a href="#!" data-bs-toggle="modal" data-bs-target="#exampleModal"><u className='space-y-2'>Terms of service</u></a>
                                                </label>
                                                {/* <!-- Modal --> */}
                                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div className="modal-dialog modal-dialog-centered">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                                                <button type="button" style={{ float: 'right' }} data-bs-dismiss="modal" aria-label="Close"><img className='w-6' src={closeButton} alt=''></img></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                ...
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-primary text-black" data-bs-dismiss="modal">Close</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="pt-2 d-flex justify-content-center">
                                                <button className="rounded-full text-lg font-serif border-4 border-blue-800 hover:text-white py-2 px-20 bg-[#1814ff]">Submit</button>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </div>
    )
}


export default Register