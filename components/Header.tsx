import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className="mx-auto flex max-w-7xl justify-between p-5">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <h1 className="cursor-pointer text-lg font-bold tracking-wide">
            Globe Notes
          </h1>
        </Link>
        <div className="hidden cursor-pointer items-center space-x-4 md:inline-flex ">
          <h3 className=" hover:text-green-500 ">About</h3>
          <h3 className="hover:text-green-500">Contact</h3>
          <h3 className="rounded-full border border-gray-400 px-4 py-1 hover:text-green-500">
            Follow
          </h3>
        </div>
      </div>
      <div>
        <h3 className="cursor-pointer rounded-full border border-gray-400 px-3 py-1 hover:text-green-500">
          Sign In
        </h3>
      </div>
    </header>
  )
}

export default Header
