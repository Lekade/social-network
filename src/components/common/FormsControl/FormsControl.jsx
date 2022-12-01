import React from 'react';
import style from "./FormsControl.module.css"
import {Field} from "redux-form";

export const FormControl = ({input, meta: {touched, error}, child, ...props}) => {
    const processedError = touched && error
    return <div className={style.formControl + " " + (processedError ? style.error : "")}>
        <div>
            {props.children}
        </div>
        {processedError && <span>{error}</span>}
    </div>
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export const createField = (placeholder, nameField, component, validators, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder} name={nameField}
               component={component} validate={validators}
               {...props}/>{text}
    </div>
)

