import { type FC, type ReactNode, useEffect, useCallback, useState, type MutableRefObject, useRef } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Portal } from '../Portal/Portal'
import cls from './Modal.module.scss'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

const ANIMATION_DELAY = 200

export const Modal: FC<ModalProps> = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen = false,
    onClose,
    lazy
  } = props

  const [isClosing, setIsClosing] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [isOpening, setIsOpening] = useState(false)
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
    }
    return () => {
      setIsMounted(false)
    }
  }, [isOpen])

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, ANIMATION_DELAY)
    }
  }, [onClose])

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler()
    }
  }, [closeHandler])

  useEffect(() => {
    if (isOpen) {
      timerRef.current = setTimeout(() => {
        setIsOpening(true)
      }, 0)
      window.addEventListener('keydown', onKeyDown)
    }
    return () => {
      clearTimeout(timerRef.current)
      setIsOpening(false)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpening,
    [cls.closed]: isClosing
  }
  console.log(mods)
  if (lazy && !isMounted) {
    return null
  }

  return (
      <Portal>
          <div className={classNames(cls.Modal, mods, [className, 'app_modal'])}>
              <div className={cls.overlay} onClick={closeHandler}>
                  <div
                      className={cls.content}
                      onClick={onContentClick}
              >
                      {children}
                  </div>
              </div>
          </div>
      </Portal>
  )
}

export default Modal
