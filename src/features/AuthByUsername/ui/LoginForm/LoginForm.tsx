import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { loginActions } from '../../model/slice/loginSlice'
import { type FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import Button from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import cls from './LoginForm.module.scss'
import { Text, TextTheme } from 'shared/ui/Text/Text'

interface LoginFormProps {
  className?: string
}

export const LoginForm: FC<LoginFormProps> = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation('')
  const dispatch = useDispatch()
  const { username, password, isLoading, error } = useSelector(getLoginState)

  const onChangeUsername = useCallback((value) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }))
  }, [dispatch, password, username])

  return (
      <div className={classNames(cls.LoginForm, {}, [className])}>
          <Text title={t('Форма авторизации')}/>
          {error && <Text title={t('Вы ввели неверный пароль или логин')} theme={TextTheme.ERROR}/>}
          <Input
              type='text'
              className={cls.input}
              autofocus={true}
              placeholder={t('Юзернейм')}
              onChange={onChangeUsername}
              value={username}
          />
          <Input
              type='text'
              className={cls.input}
              placeholder={t('Пароль')}
              onChange={onChangePassword}
              value={password}
          />
          <Button className={cls.loginBtn} onClick={onLoginClick} disabled={isLoading}>
              {t('Войти')}
          </Button>
      </div>
  )
})

export default LoginForm
