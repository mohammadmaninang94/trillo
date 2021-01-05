import Header from './components/header/header.component';
import Sidebar from './components/sidebar/sidebar.component';
import Gallery from './components/gallery/gallery.component';
import Overview from './components/overview/overview.component';

function App() {
  return (
    <div className='container'>
      <Header />
      <div className='content'>
        <Sidebar />
        <main className='hotel-view'>
          <Gallery />
          <Overview />
        </main>
      </div>
    </div>
  );
}

export default App;
