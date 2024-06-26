import React from 'react'
import Navbar from '@/components/Navbar'
import '@/assets/styles/globals.css'

export const metadata = {
    title: 'PushThought | Create Political Change',
    description: 'Take action for the causes you care about',
    keyword: 'politics, cause, social change, petition',
}

const MainLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
          <Navbar />
          <main>
              {children}
          </main>
        </body>
    </html>
  )
}

export default MainLayout
