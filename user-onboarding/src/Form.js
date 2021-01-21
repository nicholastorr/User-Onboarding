import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as yup from 'yup'


 function Form(props) {

    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value } = evt.target
        change(name, value)
    }

    return(
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-submit'>
                <h2>Add a User</h2>

                <button disabled={disabled}>Submit</button>

                <div className='errors'>
                    <div>{errors.username}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                </div>

                <div className='form-inputs'>
                    <h4>General Information</h4>

                    <label>Username
                        <input
                            value={values.username}
                            onChange={onChange}
                            name='username'
                            type='text'
                        />
                    </label>

                    <label>Email
                        <input
                            value={values.email}
                            onChange={onChange}
                            name='email'
                            type='email'
                        />
                    </label>

                    <label>Password
                        <input
                            value={values.password}
                            onChange={onChange}
                            name='password'
                            type='text'
                        />
                    </label>

                    <label>Terms of service
                        <input
                        type="checkbox"
                        id="agreeTerms"
                        />
                    </label>

                </div>
            </div>
        </form>
    )
 }


 export default Form
