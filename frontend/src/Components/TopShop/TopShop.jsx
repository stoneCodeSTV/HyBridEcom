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
    <h2 className="hook"> ONE CLICK </h2>
            <div className="btns-container">
                <a href='#shop'><button className="top-btns">Shop</button></a>
                <a href='#deals'><button className="top-btns">Deals</button></a>
            </div>
            <div className="vid-container">
                <video ref={vidRef} autoPlay loop muted playsInline className="bg-vid">
                    <source src="./vid/vidmtl720p.mp4" type="video/mp4"/>
                </video>
            </div>
    </div>
  )
}

export default TopShop