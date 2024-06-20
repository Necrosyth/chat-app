import { useState,useEffect,useRef } from "react";
import "./chats.css"
import EmojiPicker from "emoji-picker-react";
const Chats = () => {
  const [open,setOpen]=useState(false);
  const [text,setText]=useState("");
  const handleEmoji=e=>{
setText((prev)=>prev+e.emoji);
setOpen(false)
  }

  const endRef=useRef(null)
  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  









  
 

  return (
 <div className="chat">
  <div className="top">
    <div className="user">
      <img src="./avatar.png" alt="" />
      <div className="texts">
        <span>Jane</span>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
    </div>
    <div className="icons">
      <img src="./phone.png" alt="" />
      <img src="./video.png" alt="" />
      <img src="./info.png" alt="" />
    </div>
  </div>
  <div className="center">


<div className="message">
  <img src="avatar.png" alt="" />
  <div className="texts">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, rerum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, doloribus? </p>
    <span>1 min ago</span>
  </div>
</div>

<div className="message own">

  <div className="texts">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, rerum Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sed quidem maxime voluptatum debitis, nihil nesciunt tempore libero dicta quisquam.</p>
    <span>1 min ago</span>
  </div>
</div>

<div className="message">
<img src="avatar.png" alt="" />
  <div className="texts">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, rerum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, beatae.</p>
    <span>1 min ago</span>
  </div>
</div>

<div className="message own">

  <div className="texts">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, rerum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis exercitationem nemo molestiae? Praesentium placeat possimus nemo cumque rem cum facere.</p>
    <span>2 min ago</span>
  </div>
</div>


<div className="message ">
<img src="avatar.png" alt="" />
  <div className="texts">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, rerum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto omnis ad nemo odio sed quas, quia delectus sint illum quo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, natus.
    </p>
    <span>1 min ago</span>
  </div>
</div>

<div className="message own">

  <div className="texts">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, rerum! Lorem ipsum, dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quod. sit amet consectetur adipisicing elit. Sed nesciunt, sequi veritatis illum inventore quae corporis eius quos ex quisquam?</p>
    <span>1 min ago</span>
  </div>
</div>


<div className="message ">
<img src="avatar.png" alt="" />
  <div className="texts">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, rerum! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quibusdam necessitatibus laboriosam voluptatum consequuntur minima maxime quos tempore tenetur perspiciatis!</p>
    <span>1 min ago</span>
  </div>
</div>

<div className="message own">

  <div className="texts">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, rerum! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis atque qui quibusdam? Deserunt tenetur, impedit repellat similique animi laboriosam at!</p>
    <span>1 min ago</span>
  </div>
</div>



<div className="message ">
<img src="avatar.png" alt="" />
  <div className="texts">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, rerum  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatibus cupiditate dolore consequuntur expedita deleniti. </p>
    <span>1 min ago</span>
  </div>
</div>

<div className="message own">

  <div className="texts">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, rerum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore explicabo sequi debitis laborum! Id, cupiditate alias aspernatur illo dignissimos rerum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eaque consequuntur praesentium ab impedit cupiditate molestias dolor nulla. Aspernatur, commodi! </p>
    <span>1 min ago</span>
  </div>
</div>

<div className="message own">
  <img src="https://images.pexels.com/photos/20780455/pexels-photo-20780455/free-photo-of-storm-cloud-and-fog-over-countryside-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
{/* <img src="avatar.png" alt="" /> */}
  <div className="texts">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, rerum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum debitis nobis autem sint.</p>
    <span>1 min ago</span>
  </div>
</div>
<div ref={endRef}></div>
  </div>

  <div className="bottom">
    <div className="icons">
      <img src="./camera.png" alt="" />
      <img src="./img.png" alt="" />
      <img src="./mic.png" alt="" />
    </div>
    <input type="text" value={text} placeholder='Type a message' onChange={e=>setText(e.target.value)}/>
    <div className="emoji">
      <img src="./emoji.png" alt="" onClick={()=>setOpen((prev)=>!prev)} />
      <div className="picker">

      <EmojiPicker open={open} onEmojiClick={handleEmoji} />

      </div>
    </div>
    <button className='sendButton'>Send</button>
  </div>
 </div>
  )
}

export default Chats
