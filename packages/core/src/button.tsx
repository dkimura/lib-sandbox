import React from 'react'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => (
    <button ref={ref} type="button" {...props}>
      {props.children}
    </button>
  )
)
