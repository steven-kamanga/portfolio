import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
      <div className="pl-2 pr-5  ">
          <div className="footer px-2 border border-t-0 border-l-1 border-r-0 border-b-0 border-sky-500 items-center p-4 text-white">
              <div className="items-center grid-flow-col">
                  <p>Copyright © 2023 - All right reserved</p>
              </div>
              <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                  <a href="https://web.facebook.com/mahssive.kamanga.1/">
                      <Image
                          src="/facebook.svg"
                          alt="logo"
                          width={35}
                          height={35}
                      />
                  </a>
                  <a href="https://twitter.com/drplxrd">
                      <Image
                          src="/twitter.svg"
                          alt="logo"
                          width={35}
                          height={35}
                      />
                  </a>
                  <a href="https://www.linkedin.com/in/steven-kamanga/">
                      <Image
                          src="/linked.svg"
                          alt="logo"
                          width={35}
                          height={35}
                      />
                  </a>
                <a href='https://github.com/steven-kamanga' >
                    <Image className="pt-0.5"
                           src="/github.svg"
                           alt="logo"
                           width={28}
                           height={28}
                    />
                </a>
              </div>
          </div>
      </div>

  )
}

export default Footer