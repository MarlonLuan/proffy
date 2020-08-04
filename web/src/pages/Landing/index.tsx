import React from 'react';

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHearthIcon from '../../assets/images/icons/purple-heart.svg'

function Landing() {
  return (
    <div id="page-landing">
        <div id="page-landing-content" className="container">
            <div className="logo-container">
                <img src={logoImg} alt="Proffy"/>
                <h2>Sua plataforma de estudos online.</h2>
            </div>

            <img
                src={landingImg}
                alt="Plataforma de Estudos"
                className="hero-image"
            />

            <div className="buttons-container">
                <a href="" className="study">
                    <img src={studyIcon} alt="Estudar" />
                    Estudar
                </a>
            </div>

            <div className="give-classes">
                <a href="" className="study">
                    <img src={giveClassesIcon} alt="Dar aulas" />
                    Dar aulas
                </a>
            </div>

            <span className="total-connections">
                Total de 200 conexões já realizadas
                <img src={purpleHearthIcon} alt="Coração Roxo" />
            </span>
        </div>
    </div>
  )
}

export default Landing;