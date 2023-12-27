import { Link } from 'react-router-dom'
import Hero1 from '../assets/Hero1.jpg'
import Hero2 from '../assets/Hero2.jpg'
import Hero3 from '../assets/Hero3.jpg'
import Hero4 from '../assets/Hero4.jpg'

const carouselImages = [Hero1, Hero2, Hero3, Hero4]
const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          we are changing the way people shop!
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          praesentium, modi at minus inventore, doloribus exercitationem tempore
          doloremque iure sunt maxime. Omnis, laudantium totam fuga fugiat
          soluta eum qui hic!
        </p>
        <div className="mt-10">
          <Link to="./products" className="btn btn-primary">
            Our Products
          </Link>
        </div>
      </div>

      <div className="hidden h0[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((image) => {
          return (
            <div key={image} className="carousel-item">
              <img
                src={image}
                className="rounded-box h-full w-80 object-cover"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Hero
