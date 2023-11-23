import { useEffect, useState } from 'react' 
import { styles } from '../../styles.js' 
import { Link } from 'react-router-dom'
import { close, logo, menu } from '../../assets/index.js' 
import { navLinks } from '../../constants/index.js' 
import './Navbar.css'

const Navbar = () => {
  const [active, setActive] = useState("") 
  const [toggle, setToggle] = useState(false) 
  const [scrolling, setScrolling] = useState(false)

  // Function to handle scrolling and update the 'scrolling' state
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrolling(scrollPosition > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Remove the scroll event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.paddingX} ${scrolling ? 'backdrop-blur-md bg-[#151030aaa]': ''} w-full flex items-center py-5 fixed top-0 z-20`}>
      <div className="navbar-container">
        <Link to="/" className='flex items-center gap-2' onClick={()=>{
          setActive(""); // Clear the 'active' state
          window.scrollTo(0,0); // Scroll to the top of the page
        }}>
          <img loading="lazy" src={logo} alt='logo' className='logo-image'/>
          <p className='logo-text'>
            Computer Engineering
          </p>
        </Link>
        <ul className="nav-list">
          {
            // Map through navigation links and generate list items
            navLinks.map((link,index)=>
              <li key={index}>
                <a
                  className={`nav-link ${active === link.title ? 'hover' : ''}`}
                  href={`#${link.id}`}
                >
                  {link.title}
                </a>
              </li>
            )
          }
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img loading="lazy" src={toggle? menu : close} alt="menu"
          className='w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={()=>setToggle(!toggle)} // Toggle the 'toggle' state
          />
          <div className={`${toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute 
            top-20 right-0 mx-4 my-2
            min-w-[140px] z-10 rounded-xl` }>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {
                // Map through navigation links for the mobile menu
                navLinks.map((link,index)=>
                  <li key={index}>
                    <a
                      className={`${active === link.title ? "text-white" : "text-secondary"} 
                      font-poppins font-medium cursor-pointer text-[16px]`}
                      onClick={()=>{
                        setToggle(!toggle); 
                        setActive(link.title);
                      }}
                      href={`#${link.id}`}
                    >
                      {link.title}
                    </a>
                  </li>
                )
              }
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
