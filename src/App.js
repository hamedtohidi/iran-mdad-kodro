
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Continer from './components/continer';
import Contineu from './components/contineu';
import Title from './components/Title';
import Photo from './components/Photo';
import Draw from './components/Draw';
import Logo from './components/Logo';
import Footer from './components/Footer'
import Saidbar from './components/Saidbar';
function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const handleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  }
  return (
    <div className="App">
      <Navbar onServiceClick={() => {scrollToElement('contineu'); handleSidebar();}} onCarClick={() => {scrollToElement('photo'); handleSidebar();}}
        onaboutusClick={() => {scrollToElement('titel'); handleSidebar();}} oncallClick={() => {scrollToElement('continer'); handleSidebar();}}
        onquestionsClick={() => {scrollToElement('draw'); handleSidebar();}} onhomeClick={() => {scrollToElement('grid-continer'); handleSidebar();}} onMenuClick={handleSidebar}/>
      {isSidebarOpen && <Saidbar onServiceClick={() => {scrollToElement('contineu'); handleSidebar();}} onCarClick={() => {scrollToElement('photo'); handleSidebar();}}
        onaboutusClick={() => {scrollToElement('titel'); handleSidebar(); }} oncallClick={() => {scrollToElement('continer'); handleSidebar();}}
        onquestionsClick={() => {scrollToElement('draw'); handleSidebar();}} onhomeClick={() => {scrollToElement('grid-continer'); handleSidebar();}} onCloseClick={handleSidebar} />}
      <Continer />
      <Contineu id="contineu" />
      <Title />
      <Photo />
      <Logo />
      <Draw id='draw' />
      <Footer />  
    </div>
  );
}
export default App;
