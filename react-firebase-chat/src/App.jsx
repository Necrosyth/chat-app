import Chats from "./components/chats/Chats"
import Details from "./components/details/Details"
import List from "./components/list/List"

const App = () => {
  return (
    <div className='container'>
      <List/>
      <Chats/>
      <Details/>
    </div>
  )
}

export default App