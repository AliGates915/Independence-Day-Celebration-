/* eslint-disable jsx-a11y/no-distracting-elements */
/* eslint-disable jsx-a11y/img-redundant-alt */
    // eslint-disable-next-line no-unused-vars
    import React,{useState, useEffect} from 'react'
    import ReactConfetti from 'react-confetti';
    // import Text from './Text';
    import gif from './pakgif.webp';
    const Confetti = () => {
        const [windowDimension, setDimension] = useState(
            {width: window.innerWidth, height: window.innerHeight}
        );
        const dectectSize = () => {
            setDimension({width: window.innerWidth, height: window.innerHeight});
        }

        const [btn, setBtn] = useState(false)

        useEffect = (() => { 
            window.addEventListener("resize", dectectSize);
            return () =>{
                window.removeEventListener("resize", dectectSize);
            }
        }, [windowDimension])

        return (
            <div className='container'>
                
              <img src={gif} alt='image is not' className='backgroundImage' />
                
          
              <button className='btn' onClick={() => setBtn(!btn)}>
              🎉 Independence Day Celebration 🎉
              </button>
              
              {btn && (
                
                <div className='confettiWrapper'>
                    <marquee class="marquee" behavior="scroll" direction="left">
                    ✨ Let's pray to Al-Mighty Allah 🙏 that He makes Pakistan 🇵🇰 a cradle of knowledge 📚 and peace 🕊️, protects its people 👥 and their freedom 🗽, and helps them achieve the noble goals for which this separate homeland was created. 🌟    
                    </marquee>
                  <ReactConfetti
                    height={windowDimension.height}
                    width={windowDimension.width}
                    tweenDuration={600}
                  />
                  <h1 className='textHero'>14th August</h1>
                  <h1 className='textComponent'>Happy Independence Day!</h1>
                  <p>Develop by: Ali Gates✨</p>
                </div>
              )}
            </div>
          )
          
    }
    
    export default Confetti