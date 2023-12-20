import React from 'react'
import { css } from '../../styled-system/css'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => (
    <button
      ref={ref}
      type="button"
      className={css({
        bg: 'red.600',
        color: 'white',
        fontFamily: 'Inter',
        px: '4',
        py: '3',
        borderRadius: 'md',
        _hover: { bg: 'red.400' },
      })}
      {...props}
    >
      {props.children}
    </button>
  )
)
