import React from 'react'
import Boton_primario from '../components/Boton_primario'

export default function NotFound() {
  return (
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-9xl font-bold text-orange-600">404</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">Página no encontrada</h1>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">No podemos encontrar la página que estás buscando</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Boton_primario text="Volver a Home" link="/"/>
          </div>
        </div>
      </main>
  )
}
