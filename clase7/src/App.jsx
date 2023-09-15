import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import Form from "./components/form";
import useUserName from "./store/useUserStore"

const HomePage = () => {
  const { user } = useUserName();
  return (
    <>
      <h1>Login form</h1>
      {user}
      <br></br>
      {user ? <Link to={"/productos"}> Ir a productos.</Link> : <Form />}


    </>
  );
};

const ProductsPage = () => {
  useEffect(() => {
    console.log("ProductsPage");
  }, []);
  return (
    <>
      <h1>Productos Page</h1>
      si no hay usuario, mostrar un mensaje de volver a login
      <Link to={"/"}>Ir al error.</Link>
      si hay usuario, mostrar los productos
    </>
  );
};
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productos" element={<ProductsPage />} />
        <Route
          path="*"
          element={
            <>
              <h1>Página no encontrada</h1>
              <Link to={"/"}>Ir al inicio.</Link>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;