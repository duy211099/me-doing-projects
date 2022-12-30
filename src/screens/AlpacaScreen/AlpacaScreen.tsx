import React from 'react'
import { Assets } from './data'

export const AlpacaScreen = () => {
  return (
    <div className="w-screen p-8">
      <header>Alpaca Generator</header>
      <section className="flex justify-between">
        <aside>
          <div>Alpaca Image</div>
          <img id="imgHome" src="assets/alpaca/accessories/flower.png" alt=""></img>
          <div>
            <button>Random</button>
            <button>Download</button>
          </div>
        </aside>
        <aside>
          <div>
            <p>Accessorize The alpaca&#39;s</p>
            {Assets.map((_, index) => (
              <span key={index}>{_.name}</span>
            ))}
          </div>
          <div>Style</div>
        </aside>
      </section>
    </div>
  )
}
