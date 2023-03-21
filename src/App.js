import './App.css';
import { Header } from './components/header';
import { Banner } from './components/banner/banner';
import { Features } from './sections/features';
import { OurWork } from './sections/our-work';
import { Stuff } from './sections/stuff';
import { Team } from './sections/team';
import { Techs } from './sections/techs';
import { Project } from './sections/project';
import { Foorter } from './components/footer';
import { Blog } from './sections/blog';
import { Subscribe } from './sections/subscribe';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Features />
      <OurWork />
      <Stuff />
      <Team />
      <Techs />
      <Project />
      <Blog />
      <Subscribe />
      <Foorter />
    </>
  );
}

export default App;
