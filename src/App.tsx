import Header from "./components/Header"
import Info from "./components/Info"
import Features from "./components/Features"
import Testimonials from "./components/Testimonials"
import GetProduct from "./components/GetProduct"
import Footer from "./components/Footer"
import { 
  createContext, 
  useState, 
  useEffect 
} from "react"

export const windowSizeContext = createContext<number>(window.innerWidth);

function App() {
  
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
      const handleResize = () => {
          setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);


  return (
    <windowSizeContext.Provider value={windowWidth}>
     <Header />
     <Info />
     <Features />
     <Testimonials />
     <GetProduct />
     <Footer />
    </windowSizeContext.Provider>
  )
}

export default App
