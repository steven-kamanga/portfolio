import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
      <div className="pl-2">
          <div className="footer px-2 border border-t-0 border-l-2 border-r-0 border-b-0 border-yellow-600 items-center p-4 text-white">
              <div className="items-center grid-flow-col">
                  <p>Copyright © 2023 - All right reserved</p>
              </div>
              <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                  <Image
                      src="/facebook.svg"
                      alt="logo"
                      width={35}
                      height={35}
                  />
                  <Image
                      src="/twitter.svg"
                      alt="logo"
                      width={35}
                      height={35}
                  />
                  <Image
                      src="/linked.svg"
                      alt="logo"
                      width={35}
                      height={35}
                  />
              </div>
          </div>
      </div>

  )
}

export default Footer