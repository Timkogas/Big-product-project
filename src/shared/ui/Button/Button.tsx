import { type ButtonHTMLAttributes, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ButtonTheme {
  DEFAULT = 'default',
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

type ButtonProps = {
  className?: string
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonProps> = props => {
  const {
    className,
    children,
    theme = ButtonTheme.DEFAULT,
    square,
    size = ButtonSize.M,
    ...otherProps
  } = props

  const mods: Record<string, boolean> = {
    [cls.square]: !!square
  }

  return (
      <button
          className={classNames(cls.Button, mods, [cls[theme], className, cls[size]])}
          {...otherProps}
        >
          {children}
      </button>
  )
}

export default Button
