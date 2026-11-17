
import { NavLink } from "react-router";

const Menu = () => {
    return ( 
       <header className="w-55 h-screen bg-green-900 p-4">
        <h1 className="text-4xl font-semibold text-zinc-500 mb-5">Tetos</h1>
        <nav className="flex flex-col *:leading-10 *:font-semibold *:text-white! *:rounded *:duration-200! *:pl-04 *:[&.active]:bg-white! *:[&.active]:text-green-950!">
            <NavLink end to="/painel">Home</NavLink>
            <NavLink end to="/painel/niveis">Niveis</NavLink>
        </nav>
     <ConfigProvider/>
 </header>
 
 );

}
 
export default Menu;