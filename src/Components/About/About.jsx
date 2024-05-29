import Button from '../Button/Button'
import Button2 from '../Button2/Button2'
import './About.css'
import About1 from './About.img/About1.png'
import About2 from './About.img/About2.png'
import About3 from './About.img/About3.png'

function About() {
 

  return (
    <>
   <div className="about">
    <h1 className="aboutTitle">About Us</h1>
    <p className="aboutText">Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
    <ul className="aboutList">
        <li className="aboutItem">
            <img src={About1} alt="" width={"200px"} height={"200px"}/>
            <h2 className="aboutSubtitle">1. Schedule online</h2>
            <p className="aboutSubtext">Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
        </li>
        <li className="aboutItem">
            <img src={About2} alt=""   width={"200px"} height={"200px"}/>
            <h2 className="aboutSubtitle">2. Pay online easily</h2>
            <p className="aboutSubtext">Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc.</p>
        </li>
        <li className="aboutItem">
            <img src={About3} alt=""   width={"200px"} height={"200px"} />
            <h2 className="aboutSubtitle">3. Get your house cleaned</h2>
            <p className="aboutSubtext">Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend.</p>
        </li>
    </ul>
    <Button/>
    <Button2/>
   </div>
    </>
  )
}

export default About
