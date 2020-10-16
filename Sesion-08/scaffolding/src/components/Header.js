import React from 'react';

const Header = () => {
  return <header className="border-b py-4">
    <div className="container mx-auto max-w-screen-lg">
      <div className="flex justify-between">
        <p className="font-semibold text-center">Bedu Store</p>
        <div>
          <ul className="flex">
            <li className="mr-2">
              <a href="/signup" className="text-sm px-4 py-2 rounded bg-teal-500 text-white">Signup</a>
            </li>
            <li>
              <span className="text-sm pl-4 py-2">Bienvenido, Javier Diaz</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>;
}

export default Header;
