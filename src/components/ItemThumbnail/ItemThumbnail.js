import React from "react";
import styled from "styled-components"
import { Link } from "gatsby";
import Img from "gatsby-image";


const ItemThumbnailStyled = styled.div`
    width: 330px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px;
    background: white;
    -webkit-box-shadow: 0px 3px 13px 0px rgba(50, 50, 50, 0.5);
    -moz-box-shadow: 0px 3px 13px 0px rgba(50, 50, 50, 0.5);
    box-shadow: 0px 3px 13px 0px rgba(50, 50, 50, 0.5);
    transition: 0.3s all;
    border-radius: 5px;
    overflow: hidden;
    :hover{
        transform: scale(1.01);
    }

    @media (max-width: 930px) {
        width: 250px;
      } 
   
      @media (max-width: 710px) {
        width: 100%;
        margin: 20px 0px;
      }
`

const Heading = styled.h3`
    font-size: 1.3em;
    padding: 10px;
    font-weight: 900;
    text-align: center;
    width: 100%;
    min-height: 85px;
    margin: auto;
    
`

const LinkStyled = styled(Link)`
    width: 100%;
    box-shadow: none;
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`

const ImgStyled = styled(Img)`
    width: 100%;
    height: 350px;

    @media (max-width: 930px) {
        height: 250px;
      }
`

const Price = styled.p`
    padding-bottom: 10px;
`

const itemThumbnail = (props) => {
    return ( 
        <ItemThumbnailStyled>
            <LinkStyled to={props.link}>
                <ImgStyled fluid={props.image} />
                <Heading>{props.heading}</Heading>
            </LinkStyled>
            <Price>UAH {props.price.toFixed(2)}</Price>
        </ItemThumbnailStyled >
           
    )
}

export default itemThumbnail;