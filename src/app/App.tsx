import './styles/index.scss'
import type { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense } from 'react'

const App: FC = () => {
  const { theme } = useTheme()
  return (
      <div className={classNames('app', {}, [theme])}>
          <Suspense fallback=''>
              <Navbar />
              <div className='content-page'>
                  <Sidebar />
                  <AppRouter />
              </div>
          </Suspense>
      </div>
  )
}

export default App
