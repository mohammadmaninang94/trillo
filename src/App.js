import Header from './components/header/header.component';
import Sidebar from './components/sidebar/sidebar.component';

function App() {
  return (
    <div className='container'>
      <Header />
      <div className='content'>
        <Sidebar />
        <main className='hotel-view'>
          hotel view
        </main>
      </div>
    </div>
  );
}

export default App;
