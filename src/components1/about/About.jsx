import React from 'react'
import "./About.css"
import ME2 from "../../assist/ME2.jpg";
import Card from './Card';
import { ThemeContext } from '../../Context';
import { useContext } from 'react';
const About = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>


      <div className="container-fluid a">
        <div class="row">
          <div class="col">
            <div className="a-card bg"></div>
            <div className="a-card mt-5">
              <img src={ME2} alt="ME" className="a-img" />
            </div>
          </div>

          <div class="col">
            <div class="row">
              <h1 className='text-center mt-5'>𝙼𝚢 𝙿𝚛𝚘𝚓𝚎𝚌𝚝𝚜</h1>
              <div class="col">
                <div class="card" style={{backgroundColor:"#E05656",color: "#000000"}}  >

                  <div class="card-body">
                    <h5 class="card-title text-center">𝐐𝐮𝐢𝐳 𝐀𝐩𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div>
                      <button className='btn btn-outline-warning'>View Project</button>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div class="col">
                 <div class="card"   style={{backgroundColor:"#E05656",color: "#000000"}}>

                  <div class="card-body">
                    <h5 class="card-title text-center">𝐌𝐲 𝐏𝐞𝐫𝐬𝐨𝐧𝐚𝐥 𝐁𝐨𝐨𝐤 𝐂𝐨𝐥𝐥𝐞𝐜𝐭𝐢𝐨𝐧</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div>
                      <button className='btn btn-outline-warning'>View Project</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-100"></div>
              <br></br>
              <div class="col">
                 <div class="card"   style={{backgroundColor:"#E05656",color: "#000000"}}>

                  <div class="card-body">
                    <h5 class="card-title text-center">𝐍𝐨𝐝𝐞 𝐣𝐬 𝐀𝐏𝐈</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div>
                      <button className='btn btn-outline-warning'>View Project</button>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div class="col">
                 <div class="card"   style={{backgroundColor:"#E05656",color: "#000000"}}>

                  <div class="card-body">
                    <h5 class="card-title text-center">𝐌𝐲 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐥 𝐏𝐨𝐫𝐭𝐟𝐨𝐥𝐢𝐨</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div>
                      <button className='btn btn-outline-warning'>View Project</button>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}


export default About;