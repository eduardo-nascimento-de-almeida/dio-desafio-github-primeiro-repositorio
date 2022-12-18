import { useState } from "react";

const Teste = () => {
  
  
  const [name, setName] = useState("Eduardo");
  

  const handleChangeName = () => {
    setName(prev => prev === 'Eduardo' ? 'Pablo' : 'Eduardo')
  }

  return (
    <div>
        <p>
            {name}   
        </p>
        <button onClick={handleChangeName}>Alterar</button>
    </div>
  )
}

export { Teste };
