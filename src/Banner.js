import React from 'react'
import './Banner.css'

function Banner(){
    return <header className='banner' style={{
        backgroundSize:"cover",
        backgroundImage:`url('https://assets.nflxext.com/ffe/siteui/vlv3/d54727b4-2ad9-4e71-bb48-0899f55f103a/4ce96108-1f99-4476-ba90-af8b26d471e7/IN-en-20230220-popsignuptwoweeks-perspective_alpha_website_large.jpg')`,
        backgroundPosition:"center center"
    }}> 
    <div className='banner_content'>
    <h1 className='banner_title'>Movie Name</h1> 
    <div className="banner_btns">
    <button className='banner_button'>Play</button>
    <button className='banner_button'>My List</button>
    </div>
    
    <h1 className='banner_desc'>This is a test description</h1>
    
    </div>
    <div className='banner_fadebtn' />

    </header>
}

export default Banner