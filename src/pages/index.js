import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import "../components/style.css"
// import Image from "../components/image"
// import SEO from "../components/seo"
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import pic04 from '../images/pic04.jpg'
import pic05 from '../images/pic05.jpg'
import pic06 from '../images/pic06.jpg'
import fon from '../images/fon.png'

const IndexPage = () => (
  <Layout>
    <p className='txt-title'>Акції</p>
    <div className='container'></div>
    <p className='txt-title'>Найкращі ціни</p>
    <div className='container'>
      <div className='container_list'>
      <div className='container-block'>
      <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p className='container-block_txt-max'>Мега Піца</p>
          <p className='container-block_txt-min'>Основа, томати, сир моцарелла, салямі, шинка, гриби, кукурудза, мисливські ковбаски, оливки</p>
          <div className='container-blog_bottom'>
          <p className='container-block_txt-price'>158 грн</p>
          <button className='container-block_button'>В кошик</button>
          </div>
      </div>
      <div className='container-block'>
      <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p className='container-block_txt-max'>Салямі</p>
          <p className='container-block_txt-min'>Основа, томати, сир, салямі</p>
          <div className='container-blog_bottom'>
          <p className='container-block_txt-price'>115 грн</p>
          <button className='container-block_button'>В кошик</button>
          </div>
      </div>
      <div className='container-block'>
      <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p className='container-block_txt-max'>Капрезе</p>
          <p className='container-block_txt-min'>Основа, томати, сир моцарелла, помідори, курка, шинка</p>
          <div className='container-blog_bottom'>
          <p className='container-block_txt-price'>134 грн</p>
          <button className='container-block_button'>В кошик</button>
          </div>
      </div>
      <div className='container-block'>
      <span className="image main">
            <img src={pic04} alt="" />
          </span>
          <p className='container-block_txt-max'>Мілано</p>
          <p className='container-block_txt-min'>Основа, томати, сир моцарелла, курка, мисливські ковбаски, гриби</p>
          <div className='container-blog_bottom'>
          <p className='container-block_txt-price'>127 грн</p>
          <button className='container-block_button'>В кошик</button>
          </div>
      </div>
      <div className='container-block'>
      <span className="image main">
            <img src={pic05} alt="" />
          </span>
          <p className='container-block_txt-max'>Палермо</p>
          <p className='container-block_txt-min'>Основа, томатний соус, сир моцарелла, сир фета, в’ялені помідори, чилі, курка</p>
          <div className='container-blog_bottom'>
          <p className='container-block_txt-price'>147 грн</p>
          <button className='container-block_button'>В кошик</button>
          </div>
      </div>
      <div className='container-block'><span className="image main">
            <img src={pic06} alt="" />
          </span>
          <p className='container-block_txt-max'>4 Сезони</p>
          <p className='container-block_txt-min'>Основа, томати, сир моцарелла, гриби, салямі, кукурудза, бол. перець</p>
          <div className='container-blog_bottom'>
          <p className='container-block_txt-price'>121 грн</p>
          <button className='container-block_button'>В кошик</button>
          </div>
          </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
