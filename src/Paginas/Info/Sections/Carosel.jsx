import img1 from '../dados/oceanos/1.png'
import img2 from '../dados/oceanos/2.png'
import img3 from '../dados/oceanos/3.png'
import img4 from '../dados/oceanos/4.png'
import img5 from '../dados/oceanos/5.png'
import img6 from '../dados/oceanos/6.png'

import Carousel from 'react-bootstrap/Carousel';

function Carrosel() {
  return (
    <Carousel>
      <Carousel.Item>

        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}

      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img4}
          alt="First slide"
        />
        </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img5}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img6}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrosel;