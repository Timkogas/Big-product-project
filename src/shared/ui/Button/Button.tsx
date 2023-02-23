import { type ButtonHTMLAttributes, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ThemeButton {
  CLEAR = 'clear',
}

type ButtonProps = {
  className?: string
  theme?: ThemeButton
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonProps> = props => {
  const {
    className,
    children,
    theme = ThemeButton.CLEAR,
    ...otherProps
  } = props
  return (
      <button
          className={classNames(cls.Button, {}, [cls[theme]])}
          {...otherProps}
        >
          {children}
      </button>
  )
}

export default Button
