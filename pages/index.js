import React from 'react'
import Sidebar from '../components/sidebar'
import Slider from '../components/slider'
import MovieList from '../components/movieList'

const Home = () => (
  <>
    <div className="container">
      <div className="row">
        <Sidebar />

        <div className="col-lg-9">
          <Slider />
          <MovieList />
        </div>

      </div>
    </div>
  </>
)

export default Home