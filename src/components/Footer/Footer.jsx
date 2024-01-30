import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <footer className="mt-auto p-4 text-center text-base md:text-2xl bg-white w-full  border-gray-200 border-t">
      {/* <div className="mb-4 inline-flex items-center">
        <Logo width="100px" />
      </div> */}
      <div>
        <p className="text-sm text-gray-600 text-center ">
          &copy; Copyright 24. All Rights Reserved by E-Journal.
        </p>
      </div>
    </footer>
  )
}

export default Footer