import React from 'react'
import Image from "next/image"


export function HomePage() {
  return (
    <div className="">
      {/* <header>
        
      </header> */}
      <h1>Lớp học Piano - Guitar & English Gò Vấp</h1>
      <div>
        <div id="intro-classes">
          <div id='description-piano-class'>
            <Image src="/homePage/piano.svg" alt="Piano" width={200} height={200} />
            <div>
              <h1 className="text-2xl font-bold">Lớp học Piano</h1>
              <p className="text-sm">Học Piano từ cơ bản đến nâng cao</p>
            </div>
          </div>
          <div id='description-guitar-class'>
            <Image src="/homePage/guitar.svg" alt="Guitar" width={200} height={200} />
            <div>
              <h1 className="text-2xl font-bold">Lớp học Guitar</h1>
              <p className="text-sm">Học Guitar từ cơ bản đến nâng cao</p>
            </div>
          </div>
          <div id='description-english-class'>
            <Image src="/homePage/english.svg" alt="English" width={200} height={200} />
            <div>
              <h1 className="text-2xl font-bold">Lớp học English</h1>
              <p className="text-sm">Học English từ cơ bản đến nâng cao</p>
            </div>
          </div>
          
        </div>

        <div id="intro-teachers">
        
        </div>

        <div id="intro-students">
        </div>

      </div>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

      </footer>
    </div>
  )
}