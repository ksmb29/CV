import React from 'react'
import './App.css'
import foto from './photo.jpg'

function App() {
  return (
    <div className="App">
      <div className="rcontainer">
        
        <div className="left">

            <div className="marcofoto">
              <img src={foto} alt="foto"/>
            </div>

            <div className="Nombre">
              <h1>
                <strong>Jonathan</strong>  Morales Cumbal
              </h1>
              <strong>
                <p>DATE OF BIRTH:</p>
                <p>29 May 1997</p>
              </strong>
              
            </div>

            <div className="contact">
              <h1>Contact</h1>
              <ul>
                <li>
                  <strong>Nationality: </strong>Colombian
                </li>
                <br/>
                <li>
                  <strong>Gender: </strong>Male
                </li>
                <br/>
                <li>
                  Calle 12 #3-50 B/Libertad. Ipiales, Nariño                  
                  <br/>
                  Casa 33A Aguapamba. Genoy, Nariño
                  <br/>
                  Colombia  
                </li>
                <br/>
                <li>
                  <a href="">ksmb295@gmail.com</a>
                </li>
                <br/>
                <li>
                  (+57) 0327753522
                </li>
                <br/>
                <li>
                  <strong>LinkedIn: </strong>
                  https://www.linkedin.com/in/jonathan-morales-326750172/
                </li>
                <br/>
                <li>
                  <strong>Whatsapp Messenger: </strong>
                  3163828612
                </li>
              </ul>
            </div>


            
          
        </div>
        <div className="right">

          <div className="aboutme">
            <h1>
              ABOUT ME
            </h1>
            <p>
              Entusiasta del aprendizaje continuo y con miras a construir una carrera profesional 
              en tecnología y más especificamente en el desarrollo front-end. Egresado de la 
              Universidad de Nariño con experiencia en la enseñanza de primaria y secundaria; hábil 
              en investigación, inglés, francés, y desarrollo web. Fuerte educación profesional con 
              un: Programa de conocimientos en programación de la Universidad Nacional y el MINTIC. 
              Ofrezco trabajo colaborativo, respetuoso, y eficiente.
            </p>
          </div>
          
          <div className="education">
              <h1>
                EDUCATION AND TRAINING
              </h1>
              <ul>
                <li>
                  <div>
                    <strong><p className="date">14 FEB 2015 – CURRENT – Pasto, Colombia</p></strong> 
                    <h3 className="title">LICENCIATURA EN INGLÉS - FRANCÉS</h3>
                    <p className="location">Universidad de Nariño</p>
                    <p className="link"><a href="">udenar.edu.co/</a></p>
                  </div>
                </li>

                <li>
                  <div>
                    <strong><p className="date">14 SEP 2020 – 22 DEC 2020 – Bogotá, Colombia</p></strong>
                    <h3 className="title">PROGRAMA DE CONOCIMIENTO ACADÉMICO EN HABILIDADES DE PROGRAMACIÓN DE MISIÓN TIC 2022</h3>
                    <p className="location">Universidad Nacional de Colombia</p>
                    <p className="link"><a href="">unal.edu.co/</a></p>
                  </div>
                  
                </li>

                <li>
                  <div>
                    <h3 className="title">TECHNICAL SUPPORT FUNDAMENTALS</h3>
                    <p className="location">Google and Coursera</p>
                    <p className="link"><a href="">coursera.org/</a></p>
                  </div>
                  
                </li>

                <li>
                  <div>
                    <h3 className="title">CURSOS EN TECNOLOGÍAS FRONT - END</h3>
                    <p className="location">Udemy, Platzi, SoloLearn, MakeItReal, edX, W3Schools</p>
                    <p className="link"><a href="">udemy.com/</a></p>
                  </div>
                  
                </li>
              </ul>
          </div>

          <div className="dskills">
            <h1>DIGITAL SKILLS</h1>
            <h2>Frontend</h2>
              <p>HTML CSS3 JavaScript / React / Bootstrap</p>
            <h2>Backend</h2>
              <p>Python / Java /  PostgreSQL  /   MySQL  /   MongoDB  /   REST</p>
            <h2>Development Tools</h2>
              <p>Postman  /   Visual Studio Code  /   GIT (GitHub)  /   Heroku  /   NetBeans  /   Firebase  /   Trello  /   Agile (Scrum)</p>
          </div>

          <div className="lskills">
            <h1>LANGUAGE SKILLS</h1>
              <h2>OTHER LANGUAGE(S):</h2>
              <h2>English</h2>
              <table>
                <td>
                  <h4>Listening</h4>
                  <p>C2</p>
                </td>
                <td>
                  <h4>Reading</h4>
                  <p>C2</p>
                </td>
                <td>
                  <h4>Spoken production</h4>
                  <p>C1</p>
                </td>
                <td>
                  <h4>Spoken interaction</h4>
                  <p>C1</p>
                </td>
                <td>
                  <h4>Writing</h4>
                  <p>C1</p>
                </td>
              </table>
              <hr/>
              <h2>French</h2>
              <table>
                <td>
                  <h4>Listening</h4>
                  <p>B2</p>
                </td>
                <td>
                  <h4>Reading</h4>
                  <p>B2</p>
                </td>
                <td>
                  <h4>Spoken production</h4>
                  <p>B1</p>
                </td>
                <td>
                  <h4>Spoken interaction</h4>
                  <p>B1</p>
                </td>
                <td>
                  <h4>Writing</h4>
                  <p>B1</p>
                </td>
            </table>
            <hr/>
            <br/>
          </div>            
        </div>
      </div>
    </div>
  );
}

export default App;
