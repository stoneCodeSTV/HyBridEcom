import React, { useRef, useEffect } from "react";

const TopShop = () => {

    const vidRef = useRef();

    useEffect(() => {
        if (vidRef.current) {
            vidRef.current.play().catch(error => console.log("Error playing video:", error));
        }
    }, []);

  return (
    <div className="top"> 
    <h2 className="hook"> ONE STOP </h2>
            <div className="btns-container">
                <a href='/'><button className="top-btns">Shop</button></a>
                <a href='/'><button className="top-btns">Deals</button></a>
            </div>
            <div className="vid-container">
                <video ref={vidRef} autoPlay loop muted playsinline className="bg-vid">
                    <source src="./vid/vidmtl720p.mp4" type="video/mp4"/>
                    Feel The Force
                </video>
            </div>
    </div>
  )
}

export default TopShop