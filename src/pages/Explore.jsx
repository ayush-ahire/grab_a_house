import { Link } from 'react-router-dom'
// import Slider from '../components/Slider'
import rentCategoryImage from '../assets/jpg/rentCategoryImage.jpg'
import sellCategoryImage from '../assets/jpg/sellCategoryImage.jpg'
// import slider1 from '../assets/jpg/explore-slider1.jpg'
// import slider2 from '../assets/jpg/explore-slider2.jpg'
// import slider3 from '../assets/jpg/explore-slider3.jpg'

function Explore() {
  return (
    <div className='explore'>
      <header>
        <p className='pageHeader'>Explore</p>
      </header>

      <main>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner slider-div">
            <div class="carousel-item active">
              <img src="https://images.pexels.com/photos/4512970/pexels-photo-4512970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100 sliderclass" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="https://images.pexels.com/photos/10628388/pexels-photo-10628388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100 sliderclass" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100 sliderclass" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <p className='exploreCategoryHeading'>Categories</p>
        <div className='exploreCategories'>
          <Link to='/category/rent'>
            <img
              src={rentCategoryImage}
              alt='rent'
              className='exploreCategoryImg'
            />
            <p className='exploreCategoryName'>Places for rent</p>
          </Link>
          <Link to='/category/sale'>
            <img
              src={sellCategoryImage}
              alt='sell'
              className='exploreCategoryImg'
            />
            <p className='exploreCategoryName'>Places for sale</p>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Explore