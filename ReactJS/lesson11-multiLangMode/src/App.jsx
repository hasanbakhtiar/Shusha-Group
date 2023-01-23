import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import './style/style.css';
import { useTranslation } from 'react-i18next'
import './i18n/i18next';
import { useState } from 'react';
import { useEffect } from 'react';
import ModeInfo from './mode/ModeInfo';
import ModeBtn from './mode/ModeBtn';
import SingleCard from './components/SingleCard';
import moviesdata from './data/moviesdata';

const App = () => {

    const [mode,setMode] = useState(localStorage.getItem('mode'));
    
    useEffect(()=>{
        document.body.className = mode;
    },[mode])
    

    const {t,i18n} = useTranslation();
    const handleClick=(lang)=>{
       i18n.changeLanguage(lang);
    }

  return (
        <>

    <Container className='mt-5'>
        <ModeInfo modedata={mode}/>
        <ModeBtn modedata={mode} setColor={setMode}/>
    </Container>



    <Container className='mt-5'>
        <h1>{t('a.1')}</h1>
        <p>{t('a.2')}</p>
        <button className='btn btn-primary me-3' onClick={()=>{handleClick('az')}}>AZ</button>
        <button className='btn btn-primary me-3' onClick={()=>{handleClick('en')}}>EN</button>
        <button className='btn btn-primary me-3' onClick={()=>{handleClick('es')}}>ES</button>
    </Container>

    <Container className='mt-5'>
        <Row className='g-5'>
            {moviesdata.map(item=>(
                <SingleCard moviename={t(`movies.${item.id}`)} price={item.price} key={item.id}/>

            ))}
 
        </Row>
    </Container>
        
        
        
        </>
  )
}

export default App