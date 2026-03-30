import { useState } from 'react'
import Hero from './components/Hero/Hero'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import PageLoader from './components/shared/PageLoader'

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoadComplete = () => {
    setIsLoaded(true);
  };

  return (
    <>
      {!isLoaded && <PageLoader onLoadComplete={handleLoadComplete} />}
      <main
        className={`min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ willChange: isLoaded ? 'auto' : 'opacity' }}
      >
        <Hero isLoaded={isLoaded} />
        <Portfolio />
        <Contact />
      </main>
    </>
  )
}

export default App
