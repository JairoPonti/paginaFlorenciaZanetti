import './App.css';
import flor1 from './img/portfolio/flor.jpg'



function App() {
  return (
    <div>
   <div className="container">


 {/* section start-page */}

  <section className="start-page parallax-background" id="home">
  
    <div className="opacity"></div>
      <div className="content">
        <div className="text">
        
          <h1 style={{"fontWeight":800, "fontSize":75,"width":200}}>
            Florencia Zanetti
          </h1>
          <br/>
          <p style={{"fontWeight":300, "fontSize":40,"width":200, display:'inline'}}>Cantante y Vocal Coach</p>
          
          <a href="#about-us"><div className="read-more">Más</div></a>
          
        </div>
        <div className="arrow-down"></div>
      </div>
  
  </section>

   {/* section menu mobile  */}
  
  <section className="menu-media">
  
    <div className="menu-content">
    
      <div className="logo">FZ</div>
      
      <div className="icon"><a href="#"><img src="img/icons/menu-media.png"/></a></div>
    
    </div>
   
  </section>
  
    <ul className="menu-click">
        <a href="#home"><li href="#home">HOME</li></a>
        <a href="#about-us"><li href="#about-us">Rompiendo estructuras</li></a>
        <a href="#portfolio"><li href="#portfolio">Presentaciones</li></a>
        <a href="#contact"><li href="#contact">Contactame</li></a>
        
    </ul>
   
   
 {/* section menu  */}
  
  <section className="menu">

    <div className="menu-content">
    
    <div className="logo">FZ</div>
    
      <ul id="menu">
        <li><a href="#home">HOME</a></li>
        <li><a href="#about-us">Clases</a></li>
        <li><a href="#portfolio">Experiencia</a></li>
        <li><a href="#contact">Contactame</a></li>
      </ul>
    </div>
  
  
  </section>


 {/* section about us  */}
  
  <section className="about-us" id="about-us">
  
    <h1>Clases</h1>
    <hr/>
    <p className="title">¿Estás listo para hacer lo que tanto te gusta?</p>
  
      <div className="column-one">
  
        <div className="circle-one"></div>
    
          <h2>Clases<br/>Personalizadas</h2>
          <p style={{"fontSize":16}}>Cada alumno accede a un programa de entrenamiento vocal a medida </p>
    
      </div>
  
      <div className="column-two">
  
        <div className="circle-two"></div>
    
          <h2>Canto<br/>Popular</h2>
          <p style={{"fontSize":16}}>Aprenderás o ampliarás tus habilidades, aplicando técnicas contemporáneas</p>
    
      </div>
  
  
      <div className="column-three">
  
        <div className="circle-three"></div>
    
        <h2>Canto<br/>Lírico</h2>
        <p style={{"fontSize":16}}>Podrás abordar las obras que siempre quisite cantar!</p>
    
    </div>  
    

  </section>
  
  <div className="clear"></div>  

   {/* portoflio */}

  <section className="portfolio" id="portfolio">


    <div className="portfolio-margin">
    
      <h1>Experiencia</h1>
      <hr/> 
    
     {/* 1 item portoflio */}
    
        <ul className="grid">
        
          <li>
            <a href="#">
              <img src={flor1} alt="Portfolio item" />
                <div className="text">
                  <p>PORTFOLIO 1</p>
                  <p className="description">Your text here...</p>   
              </div>
            </a>
          </li>
          
          {/* item portoflio */}
          
          <li>
            <a href="#">
              <img src="" alt="Portfolio item" />
                <div className="text">
                  <p>PORTFOLIO 2</p>
                  <p className="description">Your text here...</p>               
              </div>
            </a>
          </li>      

          {/* item portoflio */}
          
          <li>
            <a href="#">
              <img src="img/portfolio/3.png" alt="Portfolio item" />
                <div className="text">
                  <p>PORTFOLIO 3</p> 
                  <p className="description">Your text here...</p>           
              </div>
            </a>
          </li>      


           {/* 4 item portoflio */}
          
          <li>
            <a href="#">
              <img src="img/portfolio/4.png" alt="Portfolio item" />
                <div className="text">
                  <p>PORTFOLIO 4</p> 
                  <p className="description">Your text here...</p>           
              </div>
            </a>
          </li>    

          {/* 5 item portoflio */}
          
          <li>
            <a href="#">
              <img src="img/portfolio/5.png" alt="Portfolio item" />
                <div className="text">
                  <p>PORTFOLIO 5</p> 
                  <p className="description">Your text here...</p>           
              </div>
            </a>
          </li>    
          

           {/* 6 item portoflio */}
          
          <li>
            <a href="#">
              <img src="img/portfolio/6.png" alt="Portfolio item" />
                <div className="text">
                  <p>PORTFOLIO 6</p> 
                  <p className="description">Your text here...</p>           
              </div>
            </a>
          </li>         
           
         {/* 7 item portoflio */}
          
          <li>
            <a href="#">
              <img src="img/portfolio/7.png" alt="Portfolio item" />
                <div className="text">
                  <p>PORTFOLIO 7</p> 
                  <p className="description">Your text here...</p>           
              </div>
            </a>
          </li>    
          
           {/* 8 item portoflio */}
          
          <li>
            <a href="#">
              <img src="img/portfolio/8.png" alt="Portfolio item" />
                <div className="text">
                  <p>PORTFOLIO 8</p> 
                  <p className="description">Your text here...</p>           
              </div>
            </a>
          </li>          
          
           {/* 9 item portoflio */}
          
          <li>
            <a href="#">
              <img src="img/portfolio/9.png" alt="Portfolio item" />
                <div className="text">
                  <p>PORTFOLIO 9</p> 
                  <p className="description">Your text here...</p>           
              </div>
            </a>
          </li>          

          
        </ul>  
   
   <a href="#"><div className="read-more">Volver Arriba</div></a>
   
   </div>   
         
   </section>

  
   <div className="clear"></div>  
  
  
  
  
     {/* partners */}

    <section className="partners parallax-background-partners" id="partners">
    
    <div className="opacity"></div>
    
      <div className="content">
      
        <h2 style={{"fontWeight":600, "fontSize":60,"width":200, "color": "black", "display": "inline", "position":"center"}}>Liberá tu voz</h2>
        
            <div className="logo">
{/*           
                <a href="#"><img src="img/logos/alex1.png"></a>
                <a href="#"><img src="img/logos/archiq.png"></a>
                <a href="#"><img src="img/logos/thomsoon.png"></a>
                <a href="#"><img src="img/logos/alex2.png"></a> */}
              
            </div>
      
      </div>

    </section>


    {/* Contact */}

    <section className="contact" id="contact">
        <h1>Contactame</h1>
        <hr/>       
      
        <div className="content">
          
          <div className="form">
          
            <form action="#" method="post" enctype="text/plain">
          
            <input name="your-name" id="your-name" value="YOUR NAME" />
            <input name="your-email" id="your-email" value="YOUR E-MAIL" />
          
            <textarea id="message" name="message" >MESSAGE</textarea>
 
            <a href="#">
              <div className="button">
                <span>Enviar</span>
              </div>
            </a> 
 
            </form>
          
          </div>
          
          
          <div className="contact-text">
          
          Utiliza este formulario para contactarme<br/><br/>

          O envíame un e-mail<br/>
          Estaré encantada de saber más de vos<br/><br/>

          <strong>Florencia Zanetti</strong><br/><br/>

          e-mail: <strong>florenciamzanetti@gmail.com</strong>
          
          </div>
        
        
        </div>
      
    </section>


    <section className="footer">
    
      <div className="margin">
      
        <div className="menu-footer">
        
        <a href="#home">Home</a>
        <a href="#">Privacy policy</a>
        <a href="#">RSS</a>
        <a href="#">Facebook</a>
        
        </div>
{/*         
          <div className="copyright">© 2014. All Rights Reserved </div>         */}

      </div>
    
    
    </section>    
    

</div>
    </div>
  );
}

export default App;
