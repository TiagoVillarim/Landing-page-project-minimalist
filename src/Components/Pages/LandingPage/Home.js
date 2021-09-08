import HomeStyle from '../Styles/Home.scss';
import {FaAngleDoubleDown} from 'react-icons/fa';
import GlobalStyle from '../../../Global.scss';
import keyframes from '../Styles/keyframes.scss';
import Responsive from '../../Pages/Styles/Responsive.scss';
import AOS from 'aos';
import "aos/dist/aos.css";

export default function Home () {

  AOS.init({
    once:true
  })

  return(
    <>
      <header className="container-header">
        <h1>Japan 日本</h1>
        <a className="signIn">Sign-in</a>
      </header>
      <body className="container">
        <section className="container-sectionOne">
          <div className="section-title">
            <h1>概念</h1>
            <p>Minimalist concept</p>
            <a href="#sectionTwo" className="arrow"><FaAngleDoubleDown/></a>
          </div>
        </section>
      </body>

      <body className="container-two">
        <section id="sectionTwo" className="container-sectionTwo">
          <div data-aos="fade-right" data-aos-duration="1200" className="block-1">
            <h1>武士</h1>
          </div>
          <div data-aos="fade-left" data-aos-duration="1500" className="samurai">
            <h1 className="samurai-title">- Samurai culture -</h1>
            <a className="button-more">More</a>
          </div> 
        </section>
      </body>

      <body className="container-Three">
        <section id="sectionThree" className="container-sectionThree">
          <div data-aos="fade-left" data-aos-duration="1200" className="block-2">
            <h1>食物</h1>
          </div> 
          <div data-aos="fade-right" data-aos-duration="1500" className="food">
            <h1 className="food-title">- Food -</h1>
            <a className="button-more">More</a>
          </div>
        </section>
      </body>

      <body className="container-Four">
        <section id="sectionFour">
          <div data-aos="fade-right" data-aos-duration="1200" className="block-3">
            <h1>音楽</h1>
          </div>
          <div data-aos="fade-left" data-aos-duration="1500" className="music">
            <h1 className="music-title">- lofi music -</h1>
            <a className="button-more">More</a>
          </div>
        </section>
      </body>

      <body className="container-Five">
        <section id="sectioFive">
          <div data-aos="fade-left" data-aos-duration="1200" className="block-4">
            <h1>アニメ</h1>
          </div>
          <div data-aos="fade-right" data-aos-duration="1500" className="anime">
            <h1 className="anime-title">- Anime -</h1>
            <a className="button-more"> More</a>
          </div>
        </section>
      </body>
    </>
  )
}