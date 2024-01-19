import React from 'react'
import Cards from '../compannets/Cards'
import Section1 from '../compannets/Section1'
import Section2 from '../compannets/Section2'
import Section3 from '../compannets/Section3'
import Section4 from '../compannets/Section4'
import {Helmet} from "react-helmet";
function Home() {
  return (
    <div>
          <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Allahverdi</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            ...
        </div>


        <Section1/>
      <Cards/>
      <Section2/>
      <Section3/>
      <Section4/>
    </div>
  )
}

export default Home
