import React, {use} from 'react'
import Header_NoSession from '../components/Header_NoSession'
import { UserContext } from '../components/User_Context'

function Home() {

  const contextUser = use(UserContext)

  const {user, setUser} = contextUser

  console.log(user)
  return (
      <div className='container'>
        <Header_NoSession/>

        
      </div>
  )
}

export default Home
