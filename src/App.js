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
          <div className='details'>
            <div className='description'>
              <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.</p>
              <p className='paragraph'>Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.</p>
              <ul className="list">
                <li className="list__item">Close to the beach</li>
                <li className="list__item">Breakfast included</li>
                <li className="list__item">Free airport shuttle</li>
                <li className="list__item">Free wifi in all rooms</li>
                <li className="list__item">Air conditioning and heating</li>
                <li className="list__item">Pets allowed</li>
                <li className="list__item">We speak all languages</li>
                <li className="list__item">Perfect for families</li>
              </ul>
              <div className="recommend">
                <p className="recommend__count">Lucy and 3 other friends recommend this hotel.</p>
                <div className="recommend__friends">
                  <img src="img/user-3.jpg" alt="Friend 1" className="recommend__photo" />
                  <img src="img/user-4.jpg" alt="Friend 2" className="recommend__photo" />
                  <img src="img/user-5.jpg" alt="Friend 3" className="recommend__photo" />
                  <img src="img/user-6.jpg" alt="Friend 4" className="recommend__photo" />
                </div>
              </div>
            </div>
            <div className='user-reviews'></div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
