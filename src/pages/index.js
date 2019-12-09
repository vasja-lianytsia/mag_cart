// This is the homepage.

import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import ItemThumbnail from '../components/ItemThumbnail/ItemThumbnail';
import Layout from "../components/layout"
import SEO from "../components/seo"
import fon from '../images/fon.png'
import icons01 from '../icons/icons01.svg'
import icons02 from '../icons/icons02.svg'
import icons03 from '../icons/icons03.svg'
import icons04 from '../icons/icons04.svg'
import icons05 from '../icons/icons05.svg'

const ThumbnailsWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px;
    margin-top: 70px;
    @media (max-width: 710px) {
        
      padding: 0px;
    }
`

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const items = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All items" />
    
      <section className='page-image'>
            <img className="firs-img"  src={fon} alt="fon" />
            <div className='startup-opasiti'>
              
              <div className='startup-cont'>
                <div className='container'>
                <h1 className='startup-title'>
                Піцерія у Львові, швидка доставка додому і в офіс
                  <br></br>
                  <span className='agenzi'>
                  Піца давно і впевнено завоювала кулінарний світ. Кафе, ресторани, бістро в усьому світі пропонують відкритий корж з томатами, розплавленим сиром, збагачуючи рецепт новими продуктами.
                  Незвичайні смакові поєднання здатні задовольнити найвишуканіший запит. Для зручності гостей багато компаній організували службу доставки, щоб кулінарні новинки стали доступні кожному. 
                  </span>
                </h1>
                <button className='startup-btn'>
                  <span className='btn-txt'>Get started</span>
                </button>
              </div>
              </div>
            </div>
    </section>
    <section className='container-about'>
      <div className='container'>
        <div className='about-title'>
        <div className='about-line bout-line-1'></div>
        <div className='about-line about-line-color'>
        <p className='about-txt_title'>Чому ми?</p>
        </div>
        <div className='about-line bout-line-1'></div>
        </div>
        <div className='container-about_icons'>
        <div className='container_list'>
          <div className='container-about_block'>
          <div className='about-img'><img src={icons01} alt="" /></div>
          <p className='container-about_block_txt'>Акція на будь-який смак</p>
          </div>
          <div className='container-about_block'>
          <div className='about-img'><img src={icons02} alt="" /></div>
          <p className='container-about_block_txt'>Швидка доставка</p>
          </div>
          <div className='container-about_block'>
          <div className='about-img'><img src={icons03} alt="" /></div>
          <p className='container-about_block_txt'>Контроль за виконанням
стандарту якості</p>
          </div>
          <div className='container-about_block'>
          <div className='about-img'><img src={icons04} alt="" /></div>
          <p className='container-about_block_txt'>Цілодобова робота</p>
          </div>
          <div className='container-about_block'>
          <div className='about-img'><img src={icons05} alt="" /></div>
          <p className='container-about_block_txt'>Любимо те, що робимо, а найголовніше
неймовірно швидко</p>
          </div>
        </div>
        </div>
        <p className='about-txt_max_max'>Піцерія у Львові, швидка доставка додому і в офіс</p>
        <p className='about-txt_min'>
        Піца давно і впевнено завоювала кулінарний світ. Кафе, ресторани, бістро в усьому світі пропонують відкритий корж з томатами, розплавленим сиром, збагачуючи рецепт новими продуктами. Незвичайні смакові поєднання здатні задовольнити найвишуканіший запит. Для зручності гостей багато компаній організували службу доставки, щоб кулінарні новинки стали доступні кожному. Мережа «Pizza King» — це піцерія Львова формату Take away & Delivery, що надає доставку для більшості районів Львова.

Червоний, білий, зелений - кольори прапора Італії та основних складових національної страви. Справжні італійські томати і смачний сир моцарела складають основу піци, яку ми продаємо клієнтам. Гарантуємо якість кожної одиниці товару, цілодобове обслуговування, бонусні пропозиції.
        </p>
        <p className='about-txt_max'>Обслуговування клієнтів</p>
        <p className='about-txt_min'>
        Компанія прагне зробити сервіс комфортним, доступним, універсальним. Замовник самостійно вирішує, якою буде піца, вибираючи окремі товари або «комбо-меню». Безкоштовна доставка лише за півгодини з моменту приготування замовлення на Академмістечко, Новобіличі, Святошинський район, Нивки, Сирець, а також центр, Печерський і Шевченківський райони, Поділ. Доповніть замовлення десертними стравами, напоями. Водій піцерії передасть покупку особисто в руки, побажає приємного апетиту, вислухає ваші побажання.

Менеджери розробили акційні пропозиції, які роблять співпрацю з нами максимально вигідною. У понеділок піцерія дає -80% на другу страву, середа - день знижок на самовивіз. Промо-коди також знижують вартість піци з доставкою додому.
        </p>
        <p className='about-txt_max'>Переваги оформлення покупки через сайт</p>
        <p className='about-txt_min'>
        Краща піца в Києві доступна 24 години, замовити їжу простіше простого. Виділіть варіанти які сподобалися, покладіть в «коробку», оформіть придбання. Оплата приймається готівкою, карткою. Постійним клієнтам доступні кінги - внутрішня валюта, яка накопичується. Збирайте кінги, купуйте, економте, отримуйте знижки. Піца через сайт - це оперативно, вигідно, безпечно. Переваги очевидні:

ви робите замовлення, не виходячи з дому - кур'єр доставить продукти менш, ніж за годину;

піцерія не знає перерв, вихідних, пауз;

рецепти відточені, інгредієнти відібрані, якість перевірена;

комплексне харчування: даємо можливість купити картоплю, курку, кальцоне, пиво, газовану воду;

економія часу, зусиль, ресурсів. Ніяких довгих приготувань, метушні з тістом, випіканням.

Ми пишаємося рівнем сервісу, постійно підвищуємо стандарти обслуговування. Вивчіть рейтинги - переконайтеся, що наша піцерія займає перші позиції. Вважаємо, зворотний зв'язок запорукою успішного бізнесу. Обов'язково залиште коментар. Відгуки допомагають вдосконалюватися, рости, ставити амбітні цілі.

Якщо вам хочеться прогулятися, на сайті розписані адреси найближчих піцерій. На Саксаганського, перехресті Драгоманова та Здолбунівської, по вулиці Берковецька вас радо зустрінуть, нагодують, напоять.

Є питання? Зверніться за консультацією, оформивши зворотний дзвінок. Передзвонимо самі, відповімо, уточнимо, розповімо свіжу інформацію. Оператор чекає, звертайтеся!
        </p>
      </div>
    </section>
      
        

      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            price
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
