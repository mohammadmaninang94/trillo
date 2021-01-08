import Header from './components/header/header.component';
import Sidebar from './components/sidebar/sidebar.component';
import Gallery from './components/gallery/gallery.component';
import Overview from './components/overview/overview.component';
import FeatureList from './components/feature-list/feature-list.component';
import Recommend from './components/recommend/recommend.component';
import ReviewBox from './components/review-box/review-box.component';

import reviews from './assests/data/reviews';

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
              <FeatureList />
              <Recommend />
            </div>
            <div className='user-reviews'>
              {reviews.map(({ ...otherProps }) => (
                <ReviewBox {...otherProps} />
              ))}
              <button className='btn-inline'>Show all <span>&rarr;</span></button>
            </div>
          </div>
          <div className='cta'>
            <h2 className='cta__book-now'>Good news! We have 4 free rooms for your selected dates!</h2>
            <button type='button' className='btn'>
                <span className='btn__visible'>Book Now</span>
                <span className='btn__invisible'>Only 4 rooms left</span>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
