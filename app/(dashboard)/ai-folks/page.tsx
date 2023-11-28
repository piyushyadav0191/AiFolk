import { auth } from '@clerk/nextjs'
import React from 'react'

const AiFolksPage = async () => {
  const {userId} = auth()
  if(!userId) return <div>No user Found</div>
  const AiFolkRequest = getAiFolks(userId)
  const folksRequest = getFolks(userId)

  const [AiFolks, folks] = await Promise.all({
    AiFolkRequest,
    folksRequest
  });
  
  return (
    <div>AiFolksPage</div>
  )
}

export default AiFolksPage