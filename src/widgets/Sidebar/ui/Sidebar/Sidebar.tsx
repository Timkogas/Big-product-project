import type { FC } from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import LangSwitcher from 'widgets/LangSwitcher/ui/LangSwitcher'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'

import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false)
  const { t } = useTranslation()

  const onToggle = (): void => {
    setCollapsed(prev => !prev)
  }

  return (
      <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [])}>
          <button onClick={onToggle}>{t('Переключить')}</button>
          <div className={cls.switchers}>
              <ThemeSwitcher />
              <LangSwitcher className={cls.lang}/>
          </div>
      </div>
  )
}

export default Sidebar
