import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img from './../../../assets/image-1.jfif'
import img1 from './../../../assets/image-2.jfif'
import img2 from './../../../assets/image-3.jfif'

const Slider = () => {
    return (
        <div>
            <Carousel>
                <div className='w-full vh-100'>
                    <img className='w-75'  src={img} alt="" />
                </div>
                <div>
                    <img src={img1} alt="" />
                </div>
                <div>
                    <img src={img2} alt="" />
                </div>

            </Carousel>
            {/* <img className='w-full' src={img} alt="" />
            <img className='w-full' src={img1} alt="" />
            <img className='w-full' src={img2} alt="" /> */}
        </div>
    );
};

export default Slider;