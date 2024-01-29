import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { checkAuth } from '../../services/AuthEndPoints';

type Props = {}

const User = (props: Props) => {
  const [user, setUser]= useState<string | null>("No User");
  const [email, setEmail]= useState<string | null>("No Email");

  const getActiveUser = async () => {
    try {
      const response = await checkAuth();
      setUser(response.data.name)
      setEmail(response.data.email)
    } catch (error: any) {
      console.log(error)
    }
  }

  useEffect(() => {
    getActiveUser();
  }, [])

  return (
    <div className='px-3 py-2 flex flex-col space-y-1 text-sm'>
      <span>Active user : {user}</span>
      <span>Email : {email}</span>
    </div>
  )
}

export default User