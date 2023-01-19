import React from 'react';
import style from "./FormsControl.module.css"
import {Field} from "redux-form";
import cn from "classnames"

export const FormControl = ({input, meta: {touched, error}, child, ...props}) => {
    const processedError = touched && error
    return <div className={cn({[style.error] : processedError}, {[style.placeholderTop]: input.value.length !== 0 }, style.formControl)}>

        <div className={style.inputBlock}>
            <div className={style.placeholder}>{props.placeholder}</div>
            <div className={style.inputElement}>{props.children}</div>
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

export const createField = (placeholder, nameField, component, validators, props = {}) => (
    <>
        <Field placeholder={placeholder} name={nameField}
               component={component} validate={validators}
               {...props}/>
    </>
)

