import React from 'react'
import './form.css'
const Form = () => {
  return (
    <div>
      <section id="contact">
  
  <h1 class="section-header">Contact</h1>
  
  <div class="contact-wrapper">

    <form id="contact-form" class="form-horizontal" role="form">
       
      <div class="form-group">
        <div class="col-sm-12">
          <input type="text" class="form-control" id="name" placeholder="NAME" name="name" value="" required/>
        </div>
      </div>

      <div class="form-group">
        <div class="col-sm-12">
          <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" value="" required/>
        </div>
      </div>

      <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>
      
      <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
        <div class="alt-send-button">
          <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
        </div>
      
      </button>
      
    </form>

    
      <div class="direct-contact-container">

        <ul class="contact-list">
          <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">Ajmer, Rajasthan</span></i></li>
          
          <li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="" title="Give me a call">xx xxxxxxxxxx</a></span></i></li>
          
          <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:#" title="Send me an email">singh28986@gmail.com</a></span></i></li>
          
        </ul>

        <hr/>
        <ul class="social-media-list">
        <a href="https://github.com/BhanuPratap0" target="_blank" class="contact-icon"><li>
            <i class="fa fa-github" aria-hidden="true"></i>
          </li></a>
          <a href="https://codepen.io/BhanuPratap0" target="_blank" class="contact-icon"><li>
            <i class="fa fa-codepen" aria-hidden="true"></i>
          </li></a>
          <a href="https://twitter.com/bunny28986" target="_blank" class="contact-icon"><li>
            <i class="fa fa-twitter" aria-hidden="true"></i>
          </li></a>
          <a href="https://www.instagram.com/_iambhanu/" target="_blank" class="contact-icon"><li>
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </li></a>
        </ul>
        <hr/>

       

      </div>
    
  </div>
  
</section>  
  
  
    </div>
  )
}

export default Form
