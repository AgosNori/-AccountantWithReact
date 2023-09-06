import { useEffect, useState } from "react"
import { Button } from "./components/button"
import { Container } from "./components/container"

function App() {
  const [count, setCount] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  useEffect(() => {
    if (count % 10 === 0 && count !== 0) {
      setShowNotification(true);
      setTimeout(()=>{
        setShowNotification(false);
      },3000);
      /*alert("Es multiplo de 10! yupi")*/
    }
  }, [count])
  return (
    <>
      <Container>
        <h1>Soy el componente App</h1>
        <Button onClick={() =>
          setCount(preState => preState + 1)
        }>Incrementar</Button>
        <p>{count}</p>
        {
        showNotification && <p>Es multiplo de 10!!!</p>
      }
      </Container>
     

    </>
  )
}

export default App
