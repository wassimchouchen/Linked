import { useField, Formiz, useForm } from '@formiz/core';
import React from 'react';
import { useState, useMemo, useId } from 'react'
import { Button } from './Button'
import messages from './validators'

// interface Props extends FieldProps {
//   name: string
//   label: string
//   type?: HTMLInputTypeAttribute
//   required?: boolean
//   placeholder?: string
//   validations?: any[]
// }

export function Input(props) {
  const id = useId()
  const { errorMessage, isValid, isSubmitted, setValue, value } =
    useField(props)

  const { label, type, placeholder } = props

  const [isTouched, setIsTouched] = useState(false)
  const showError = !isValid && (isTouched || isSubmitted)
  const required = useMemo(
    () => props.validations?.some(v => v.message === messages.REQUIRED),
    [props.validations]
  )

  return (
    <div className="flex flex-col space-y-1">
      <label className="text-sm font-semibold" htmlFor={id}>
        {label}: {required ? ' *' : ''}
      </label>
      <input
        className="rounded-md border focus:outline-none focus:ring p-2 duration-200 focus:ring-dark-1 focus:ring-opacity-30"
        id={id}
        type={type || 'text'}
        value={value ?? ''}
        onChange={e => setValue(e.target.value)}
        onBlur={() => setIsTouched(true)}
        placeholder={placeholder}
      />
      {showError && (
        <div id={`${id}-error`} className="text-xs text-red-600">
          {errorMessage}
        </div>
      )}
    </div>
  )
}

// interface FormProps {
//   children: React.ReactNode
//   onSubmit: (values: any) => void
//   className?: string
// }

export function Form(props) {
  const form = useForm()

  return (
    <Formiz connect={form} onValidSubmit={props.onSubmit}>
      <form noValidate onSubmit={form.submit} className={props.className}>
        {props.children}
        <div className="flex justify-end">
          <Button disabled={!form.isValid}>Login</Button>
        </div>
      </form>
    </Formiz>
  )
}
