import React from 'react'
import { matchRoutes, useLocation } from "react-router-dom"
        

export default function Detail() {
  const routes = [{ path: "/members/:id" }]

const useCurrentPath = () => {
  const location = useLocation()
  const [{ route }] = matchRoutes(routes, location)

  return route.path
}
  return (
    <div className='container'>
      <div className='row'>
        <div className='box-vay'></div>
        <div className='content'>

        </div>
      </div>
    </div>
  )
}
