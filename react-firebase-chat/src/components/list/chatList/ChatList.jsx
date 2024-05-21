import React, { useState } from 'react'
import "./chatlist.css"

const ChatList = () => {
  const [addMode,setAddMode]=useState(true);

  return (


    <div className='chatlist'>
      <div className="search">
        <div className="searchbar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder='Search'/>

        </div>
        <img src={addMode?"./plus.png" : "./minus.png"} className="add" alt="" onClick={()=>setAddMode((prev)=>!prev)}/>

      </div>
      
      <div className="item">
        <img src="./avatar.png" alt=" " />
        <div className="texts">
          <span>Jane Doe  </span>
          <p>Hello</p>
        </div>
      </div>

      <div className="item">
        <img src="./avatar.png" alt=" " />
        <div className="texts">
          <span>Jane Doe  </span>
          <p>Hello</p>
        </div>
      </div>

      <div className="item">
        <img src="./avatar.png" alt=" " />
        <div className="texts">
          <span>Jane Doe  </span>
          <p>Hello</p>
        </div>
      </div>

      <div className="item">
        <img src="./avatar.png" alt=" " />
        <div className="texts">
          <span>Jane Doe  </span>
          <p>Hello</p>
        </div>
      </div>

      <div className="item">
        <img src="./avatar.png" alt=" " />
        <div className="texts">
          <span>Jane Doe  </span>
          <p>Hello</p>
        </div>
      </div>

      <div className="item">
        <img src="./avatar.png" alt=" " />
        <div className="texts">
          <span>Jane Doe  </span>
          <p>Hello</p>
        </div>
      </div>

      <div className="item">
        <img src="./avatar.png" alt=" " />
        <div className="texts">
          <span>Jane Doe  </span>
          <p>Hello</p>
        </div>
      </div>

      <div className="item">
        <img src="./avatar.png" alt=" " />
        <div className="texts">
          <span>Jane Doe  </span>
          <p>Hello</p>
        </div>
      </div>

      <div className="item">
        <img src="./avatar.png" alt=" " />
        <div className="texts">
          <span>Jane Doe  </span>
          <p>Hello</p>
        </div>
      </div>

      <div className="item">
        <img src="./avatar.png" alt=" " />
        <div className="texts">
          <span>Jane Doe  </span>
          <p>Hello</p>
        </div>
      </div>

      <div className="item">
        <img src="./avatar.png" alt=" " />
        <div className="texts">
          <span>Jane Doe  </span>
          <p>Hello</p>
        </div>
      </div>
     
     
    </div>
  )
}

export default ChatList
