import {useEffect, useState, useRef} from 'react';
import { dados } from '../Data/data';
import "./styles.css";


  function Carrossel() {
  const carousel = useRef(null);
  const data = dados


  
  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }


  if (!data || !data.length) return null;
  
    return (
     
        <footer id='footer'>
        <div className="container">
          <div className="logo">
          <h1>SUGESTÕES</h1>
            <img src="" alt= ""/>
            </div>
    
           <div className="carousel" ref={carousel}>
            {data.map((item) => {
              const { id, nome, precoDesconto, precoOriginal, image } = item;
              return (
            <div className="item" key={id}>
              <div className="image">
                <img src={image} alt={nome}/>
              </div>
              <div className="info">
                <span className="name">{nome}</span>
                <span className="precoDesconto"> {precoDesconto}</span>
                <span className="precoOriginal"> {precoOriginal}</span>
              </div>
              <div className="container-botao">
              <button className="Bts"> adicionar </button>
                    </div>
            </div>
              );
            })}
           </div>
           <div className='buttons'>
            <button onClick={handleLeftClick}>
              <img src='/static/media/216151_right_chevron_icon.png' alt='Scroll Left'/>
              </button>
            <button onClick={handleRightClick}>
              <img src='/static/media/216151_right_chevron_icon.png' alt='Scroll Right'/>
              </button>
           </div>
          </div>
          </footer>
    );
}
export default Carrossel;