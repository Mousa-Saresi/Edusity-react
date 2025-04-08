import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
    const slider = useRef();
     let tx = 0;
const slaideForward = () => {
    if (tx > -50){
        tx -= 25;
    }
slider.current.style.transform = `translateX(${tx}%)`;
}
const slaideBackward = () => {
    if (tx < 0){
        tx += 25;
    }
slider.current.style.transform = `translateX(${tx}%)`;
}


  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slaideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slaideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className='user-info'>
                    <img src={user_1} alt="" />
                    <div>
                        <h3>Anna JacKson</h3>
                        <span>EdusIty, Jordan</span>
                    </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community,state-of-the-art faclities,and commitment to academic excellnce have truly exceeded my expectations. </p>
                </div>
                
            </li>
            <li>
                <div className="slide">
                    <div className='user-info'>
                    <img src={user_2} alt="" />
                    <div>
                        <h3>Abd-alhadi</h3>
                        <span>EdusIty, Jordan</span>
                    </div>
                    </div>
                    <p>Im really happy I chose to study at Edusity. Everything  from the people to the learning environment helped me grow and move forward." </p>
                </div>
                
            </li>
            <li>
                <div className="slide">
                    <div className='user-info'>
                    <img src={user_3} alt="" />
                    <div>
                        <h3>lisa William</h3>
                        <span>EdusIty, Jordan</span>
                    </div>
                    </div>
                    <p>Honestly, Edusity was more than I expected! The amazing support, great facilities, and real focus on education made my experience truly special.

</p>
                </div>
                
            </li>
            <li>
                <div className="slide">
                    <div className='user-info'>
                    <img src={user_4} alt="" />
                    <div>
                        <h3>Mousa odeh</h3>
                        <span>EdusIty, Jordan</span>
                    </div>
                    </div>
                    <p>Joining Edusity was a truly wise decision. I found a supportive community, advanced facilities, and a strong commitment to academic excellence that exceeded all my expectations. </p>


                </div>
                
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
