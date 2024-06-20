import Chats from "./components/chats/Chats"
import Details from "./components/details/Details"
import List from "./components/list/List"
import Login from "./login/Login"

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
    </div>
  )
}

export default App