
import Chai from "./chai";


function App() {

  const username = 'Radha'
  

  return (
    // also known as react fragment. empty tag in jsx file you can only return one element.
    <> 
    <Chai/>
    <h1>chai aur code {username}</h1>
    <p>test paragraph</p>
    </>
  );
}

export default App
