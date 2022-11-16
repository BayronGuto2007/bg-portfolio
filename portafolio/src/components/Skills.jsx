import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import meter4 from '../assets/img/meter1.svg';
import meter5 from '../assets/img/meter2.svg';
import colorSharp from '../assets/img/color-sharp.png';

export const Skills2 = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>Skills</h2>
                        <p></p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image1" />
                                <h5>Backend</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image2" />
                                <h5>FrontEnd</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image3" />
                                <h5>Bases de Datos</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image4" />
                                <h5>Script en Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image5" />
                                <h5>Desarrollo Movil</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image6" />
                                <h5>Desarrollo Web</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image6" />
                                <h5>Analisis de Datos</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image3" />
                                <h5>Servidores</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="imagen4"/>
        </section>
    );

}