import './css/Main.css'
import Img1 from './Images/Group 6.png';
import Img2 from './Images/vectors/Rectangle.png';
import Img3 from './Images/Group 4.png';
import Img4 from './Images/vectors/Group 2.png';
import Img5 from './Images/vectors/Group 1.png';
import backgImg from './Images/vectors/Group 3.png';
import Title from './Title';

function Main() {
    const title = 'Turn your ideas into reality.';
    const text = 'Start for free and get attractive offers from the community';
    return (
        <div className="main-block">
            <div>
                <img src={Img1} />
            </div>
            <img className='bckImg'
                src={backgImg} />
            <div className='main-img'>
                <img className='bckImg'
                    src={backgImg} />
                <img
                    className='backg-img'
                    src={Img2} />
                <img
                    className='m-img img1'
                    src={Img4} />
                <img
                    className='img'
                    src={Img3} />
                <img
                    className='m-img img2'
                    src={Img5} />
            </div>
            <Title title={title} text={text} />
        </div >
    )
}

export default Main;