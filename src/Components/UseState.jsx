import { useContext } from "react";
import { SecurityCodesContext } from "../Context/Context";

const UseState = () => {
  const context = useContext(SecurityCodesContext)  
  
  return(
    <div className="w-full flex flex-col items-center mt-10 mb-5">
    <h2 className="font-medium text-xl">Eliminar UseState</h2>
    <p className="text-lg mb-1">
      Por favor escribe el codigo de seguridad.
    </p>
    {context.useSuccess && (
    <p className="text-green-500 font-medium">
      El codigo es valido.
    </p>)}
    {context.useError && (
    <p className="text-red-500 font-medium">
      El codigo es incorrecto
    </p>)}
    {context.useLoading && (
      <p className="font-medium">
        Cargando...
      </p>)}
    <input
      placeholder="Codigo de seguridad"
      className="w-150 border border-gray-400 p-1 mb-2 rounded-lg"
      value={context.useValue}
      onChange={event=> context.setUseValue(event.target.value)}
    />
    <button 
    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
    onClick={() => {
      context.setUseLoading(true)
      context.changeUseState()
      }}>
      Comprobar
    </button>
  </div>
);}

export default UseState;
