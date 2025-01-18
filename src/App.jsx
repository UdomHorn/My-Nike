import React from 'react'
import {Navbar, Thumnail,Newarival, Footer} from "./sections"
const App = () => {
  return (
    <main>
      <section><Navbar /></section>
      <section> <Thumnail /> </section>
      <section> <Newarival /></section>
      <section><Footer /></section>

    </main>
  )
}

export default App