import React, { Component } from "react";
import "./message.css";

export class MessageBox extends Component {
   render() {
      return (
         <div>
            <div id="container">
               <aside>
                  <header>
                     <input type="text" placeholder="search" />
                  </header>
                  <ul>
                     <li>
                        <img
                           src="https://pbs.twimg.com/profile_images/654815841825878016/phkON-XW_400x400.png"
                           alt=""
                           width="75px"
                        />
                        <div>
                           <h2>Rick Sanchez</h2>
                           <h3>
                              <span className="status orange" />
                              offline
                           </h3>
                        </div>
                     </li>

                     <li>
                        <img
                           src="https://pbs.twimg.com/profile_images/3145290274/5c31f5015929a29862fff6e783da7c59.jpeg"
                           alt=""
                           width="75px"
                        />
                        <div>
                           <h2>Walter White</h2>
                           <h3>
                              <span className="status green" />
                              online
                           </h3>
                        </div>
                     </li>

                     <li>
                        <img
                           src="https://pbs.twimg.com/profile_images/425543352923066370/jTQLxjXS.jpeg"
                           alt=""
                           width="75px"
                        />
                        <div>
                           <h2>Kyle Parker</h2>
                           <h3>
                              <span className="status orange" />
                              offline
                           </h3>
                        </div>
                     </li>
                     <li>
                        <img
                           src="https://media-exp1.licdn.com/dms/image/C5603AQFoOcZqfj-yxg/profile-displayphoto-shrink_200_200/0?e=1593648000&v=beta&t=EdeZcGC1q41dVAQOl14JF4nQkP2gn-TUyJbtfYf7-gg"
                           alt=""
                           width="75px"
                        />
                        <div>
                           <h3 style={{ color: "white" }}>Nerces Kazandjian</h3>
                           <h3>
                              <span className="status green" />
                              online
                           </h3>
                        </div>
                     </li>
                     <li>
                        <img
                           src="https://cdn.metalab.csun.edu/media/faculty/steven.fitzgerald/avatar.jpg"
                           alt=""
                           width="75px"
                        />
                        <div>
                           <h3 style={{ color: "white" }}>Steve Fitzgerald</h3>
                           <h3>
                              <span className="status green" />
                              online
                           </h3>
                        </div>
                     </li>
                  </ul>
               </aside>
               <main>
                  <header>
                     <img
                        src="https://pbs.twimg.com/profile_images/654815841825878016/phkON-XW_400x400.png"
                        alt=""
                        width="75px"
                     />
                     <div>
                        <h2>Chat with Rick Sanchez</h2>
                        <h3>6 Messages</h3>
                     </div>
                     <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_star.png"
                        alt=""
                     />
                  </header>
                  <ul id="chat">
                     <li className="you">
                        <div className="entete">
                           <span className="status green" />
                           <h2>Rick</h2>
                           <h3>/10:12AM, Today</h3>
                        </div>
                        <div className="triangle" />
                        <div className="message">
                           Listen, I hate to break it to you, but what people
                           call "love" is just a chemical reaction that compels
                           animals to breed. It hits hard, then it slowly fades,
                           leaving you stranded in a failing marriage. I did it.
                           Your parents are gonna do it.
                        </div>
                     </li>
                     <li className="me">
                        <div className="entete">
                           <h3>10:12AM, Today/</h3>
                           <h2>Me</h2>
                           <span className="status blue" />
                        </div>
                        <div className="triangle" />
                        <div className="message">
                           Wow... thats kinda dark but ok...
                        </div>
                     </li>
                     <li className="me">
                        <div className="entete">
                           <h3>10:12AM, Today/</h3>
                           <h2>Me</h2>
                           <span className="status blue" />
                        </div>
                        <div className="triangle" />
                        <div className="message">
                           How do you work a plumbus again?
                        </div>
                     </li>
                     <li className="you">
                        <div className="entete">
                           <span className="status green" />
                           <h2>Rick</h2>
                           <h3>/10:12AM, Today</h3>
                        </div>
                        <div className="triangle" />
                        <div className="message">
                           First take the dinglebop, and smooth it out, with a
                           bunch of Schleem. Then save the Schleem and repurpose
                           it for later batches. Then take the dinglebop and
                           push it through the Grumbo, where the Fleeb is rubbed
                           against it.
                        </div>
                     </li>
                     <li className="me">
                        <div className="entete">
                           <h3>10:12AM, Today/</h3>
                           <h2>Me</h2>
                           <span className="status blue" />
                        </div>
                        <div className="triangle" />
                        <div className="message">
                           Why do we have to save the Schleem again?
                        </div>
                     </li>
                     <li className="me">
                        <div className="entete">
                           <h3>10:12AM, Today/</h3>
                           <h2>Me</h2>
                           <span className="status blue" />
                        </div>
                        <div className="triangle" />
                        <div className="message">
                           Nevermind, I remembered why...
                        </div>
                     </li>
                  </ul>
                  <footer>
                     <textarea
                        placeholder="Type your message"
                        defaultValue={""}
                     />
                     <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_picture.png"
                        alt=""
                     />
                     <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_file.png"
                        alt=""
                     />
                     <a href="#">Send</a>
                  </footer>
               </main>
            </div>
         </div>
      );
   }
}

export default MessageBox;
