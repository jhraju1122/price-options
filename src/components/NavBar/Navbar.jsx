import { useState } from "react";
import Link from "../Link/Link";
import { TiThMenu } from "react-icons/ti";
import { GrClose } from "react-icons/gr";
const Navbar = () => {
  const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'NotFound', path: '*' }
      ];
      
      

    return (
        <nav className="text-black bg-yellow-400 p-6">
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            {
              open === true ? <GrClose className="text-2xl "></GrClose> :           <TiThMenu className="text-2xl "></TiThMenu>

            }
          </div>
          <ul className={`md:flex duration-1000 mr-3 gap-5
          ${open ? 'top-16' : '-top-60'}
          absolute md:static bg-yellow-400 px-6`}>
          {
                routes.map(route =><Link key={route.id} route={route}></Link>)
            }
          </ul>
        </nav>
    );
};

export default Navbar;