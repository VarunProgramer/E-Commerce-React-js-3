import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className="description-box">
        <div className="description-box-navigator">
            <div className="description-box-nav-box">Description</div>
            <div className="description-box-nav-box fade">Review (122)</div>
        </div>
        <div className="description-box-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eum itaque voluptatibus earum soluta suscipit maxime natus vitae? Laborum aperiam similique enim error tempora blanditiis est ullam ab sit consequatur quam fuga harum minima, deleniti aut ipsam natus, officia nam?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure laboriosam at ipsa error sequi voluptates magni necessitatibus porro aut eius.</p>
        </div>
    </div>
  )
}

export default DescriptionBox