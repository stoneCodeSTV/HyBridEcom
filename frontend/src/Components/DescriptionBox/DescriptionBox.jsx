import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionBox'>
        <div class="descriptionBox-nav">
            <div className="descriptionBox-nav-box">Description</div>
            <div className="descriptionBox-nav-box fade">Reviews(425)</div>
        </div>
        <div className="descriptionBox-content">
            <p>Our signature logo hoodie is made with 100% cotton and features a screen printed logo on the front. The hoodie has a relaxed fit and is perfect for everyday wear.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi ac nisl ultricies lacinia. Nullam auctor, nunc eget tincidunt consectetur, urna nunc luctus nunc, 
                non efficitur justo nisl id nunc. Sed auctor, mauris sit amet lacinia lacinia, nunc nunc tincidunt nunc, id tincidunt nunc nunc nec justo. Sed auctor, mauris sit amet lacinia lacinia, nunc nunc tincidunt nunc, id tincidunt nunc nunc nec justo.</p>
        </div>
    </div>
  )
}

export default DescriptionBox