import {Route, Routes} from 'react-router-dom'

import {Auth} from 'ui/auth'
import {User} from 'ui/user'
import {Front} from 'ui/front'

import {Header} from 'ui/header'

export const App = () => {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/auth' element={<Auth />} />
        <Route path='/user' element={<User />} />
        <Route path='/' element={<Front />} />
      </Routes>
    </div>
  )
}

