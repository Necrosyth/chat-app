import Chats from "./components/chats/Chats"
import Details from "./components/details/Details"
import List from "./components/list/List"
import Login from "./login/Login"
import Notification from "./notifs/Notification"

const App = () => {
  const user=false

  return (
    <div className='container'>
      {

        user?(
<>

<List/>
<Chats/>
<Details/>
</>
        ) :
        <Login/>
      }
      <Notification/>
    </div>
  )
}

export default App