import { useState } from "react";
import useUserName from "../store/useUserStore"

function Form() {
    const [user, setUser] = useState();
    const { saveUserName } = useUserName();

    function handleSubmit() {
        saveUserName(user);
    }
    return (
        <form action="">

            <input
                value={user} 
                onChange={(e) => setUser(e.target.value)} 
                type="text" placeholder="Ingrese un Usuario"></input>
            <button onClick={handleSubmit} type="button">Enviar</button>
        </form>
    );

}
export default Form;