import gsap from 'gsap'
import React , {useLayoutEffect} from 'react'

const Clippatheffect = () => {
    useLayoutEffect(() => {
        const elements = gsap.utils.toArray('.ex')
        const tl = gsap.timeline(

            {"ease":"power3.inOut",
            delay:2.2,
            "duration":3,
            }
        )
    
        tl.fromTo(elements, {
             // Initial animation state
            opacity: 1, // Fully visible
            'clip-path': 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)' // CSS clip-path shape
        }, { // Animation target state
            stagger: 0.4,
            'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', // Target shape of the clip-path
        }, 0)
        // .to(elements, { // Animation target state
        //     ease: 'power3',
        //     stagger: 0.3,
        //     'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', // Target shape of the clip-path
        // }, '>')
        .to(elements,{
            'clip-path': 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
            stagger: 0.3,
        },'>'
        )
    
        tl.play()
    
    
    
      }, [])
  return (
    <>
    <img className='absolute top-0 left-0 w-full h-full object-cover ex' src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <img className='absolute top-0 left-0 w-full h-full object-cover ex' src="https://images.unsplash.com/photo-1515104882246-521e5ba18f5e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <img className='absolute top-0 left-0 w-full h-full object-cover ex' src="https://images.unsplash.com/photo-1648495754619-885ca69c1665?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <img className='absolute top-0 left-0 w-full h-full object-cover ex' src="https://images.unsplash.com/photo-1625240752293-00b16d38c512?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </>

  )
}

export default Clippatheffect