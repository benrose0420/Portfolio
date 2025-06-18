import React from 'react'
import Link from 'next/dist/client/link'

const Footer = () => {
  return (
    <footer className="py-4 container border-t mt-20 px-[20%]">
      <p className="text-sm text-gray-400 text-center">
        Copyright ©
        <Link href="https://footer" className="ml-1 text-primary">
          Arif Hossain
        </Link>
      </p>
    </footer>
  )
}

export default Footer

