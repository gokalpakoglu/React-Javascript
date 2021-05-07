import React, {Component} from 'react'
import Carousel from 'react-bootstrap/Carousel'; 

class Slider extends Component{
    render(){
        return(
            <div>
                <Carousel style={{height:"710px",marginTop:"10px"}}>
                    <Carousel.Item >
                        <img class="slider" src="img/Didim-Altınkum-Plajı-Nerede-1.jpg" alt="Resim 2"></img>
                        <Carousel.Caption>
                              
                        </Carousel.Caption>
                        <div class="sly">
                                <h1>Altınkum Plajı</h1>
                            <p>Aydın denince akla ilk gelen de Didim’in Altınkum Plajı oluyor. Bu en çok bilineni ve kalabalık olan plajın 
                        ulaşımı da bir o kadar rahat. Altın sarısı kumları ile dikkat çeken Altınkum Plajı’nda aileler için de bir bölüm bulunuyor.</p>
                            </div>     
                    </Carousel.Item>
                    <Carousel.Item >
                        <img class="slider" src="img/kadınlar.jpg" alt="Resim 4"></img>
                        <Carousel.Caption>
                            
                        </Carousel.Caption>
                        <div class="sly">
                            <h1>Kadınlar Plajı</h1>
                            <p> Aydın’ın en çok bilinen gözde plajlarından biri olan Kadınlar Plajı, Kuşadası’nın merkezi bir noktasında yer alıyor. Uzun sahil şeridiyle 
            dikkat çeken Kadınlar Plajı, adının aksine karma bir plaj… Tüm gün keyifli vakit geçirip, tatilinize renk katmak isterseniz Kadınlar Plajı sizi bekliyor!</p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img class="slider" src="img/kusadasi-sevgi-plaji-2.jpg" alt="Resim 4"></img>
                        <Carousel.Caption>
                            
                        </Carousel.Caption>
                        <div class="sly">
                            <h1>Sevgi Plajı</h1>
                            <p> Kuşadası’nın Davutlar Mahallesi’nde bulunan Sevgi Plajı, 550 metre uzunluğuyla Aydın’ın en uzun plajlarından biri olarak biliniyor. 
            Yaz aylarında oldukça kalabalık olan plaj, yeşillik alanında piknik yapma imkanı da sunuyor. 
            Kuşadası’nın merkezine 17 mesafede yer alan Sevgi Plajı, bisiklet sürmek isteyenler için de keyifli bir alternatifi oluşturuyor.</p>
                            </div>
                    </Carousel.Item>
                    <Carousel.Item >
                        {/* <img src="https://www.multiplegame.com/wp-content/uploads/2020/03/Valorant.jpg" alt="Resim 1"></img> */}
                        <img class="slider" src="img/akbuk-plaji.jpg" alt=""></img>
                        <Carousel.Caption>
                            
                        </Carousel.Caption>
                        <div class="sly">
                            <h1>Akbük Plajı</h1>
                            <p>Didim merkezine 20 km mesafede yer alan Akbük Plajı, sakin atmosfer ve doğal güzellikleri ile kendine hayran bırakıyor. 
            Uzun bir plaj olan Akbük Plajı, huzurlu bir tatil geçirmeniz için güzel bir alternatif oluşturuyor.</p>
                            </div>
                    </Carousel.Item>
                    
                </Carousel>
            </div>
        )
    }
}
export default Slider;