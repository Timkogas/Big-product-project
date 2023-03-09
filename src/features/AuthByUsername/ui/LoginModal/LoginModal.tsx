import type { FC } from 'react'
import { Modal } from 'shared/ui/Modal/Modal'

import LoginForm from '../LoginForm/LoginForm'

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal: FC<LoginModalProps> = ({ className, isOpen, onClose }: LoginModalProps) => {
  return (
      <Modal
          className={className}
          onClose={onClose}
          isOpen={isOpen}
          lazy={true}
      >
          <LoginForm/>
      </Modal>
  )
}

export default LoginModal
