import Aos from 'aos'
import React, { useEffect } from 'react'

const AnimationScroll = () => {


useEffect(() => {
Aos.init();
},[])

  return (
    <div>



<div style={{backgroundColor:"red",height:"600px",width:"400px"}} data-aos="fade-down" data-aos-duration="3000" >abc</div><br />
<div style={{backgroundColor:"blue",height:"400px",width:"400px"}} data-aos="fade-right">def</div><br />
<div style={{backgroundColor:"aqua",height:"400px",width:"400px"}} data-aos="fade-left">gysftsfd</div><br />
<div style={{backgroundColor:"pink",height:"400px",width:"400px"}} data-aos="fade-up-right">hjghdfg</div><br />
<div style={{backgroundColor:"green",height:"400px",width:"400px"}} data-aos="fade-up-left">sjhdhgf </div><br />





    </div>
  )
}

export default AnimationScroll