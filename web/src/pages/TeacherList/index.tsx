import React from "react"
import { Link } from "react-router-dom"

import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'

import './style.css'

function TeacherList() {
    return (
       <div className="container" id="page-teacher-list">
         <header className="page-header">
             <div className="top-bar-container">
                 <Link to="/">
                    <img src={backIcon} alt="Voltar" />
                    Voltar
                 </Link>
                 <img src={logoImg} alt="Proffy" />
             </div>

             <div className="header-content">
                 <strong>
                     Esses são os proffys disponíveis
                 </strong>
             </div>
         </header>
       </div>
    )    
}

export default TeacherList;
