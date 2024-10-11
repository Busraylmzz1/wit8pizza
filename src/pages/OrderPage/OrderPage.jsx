import MiniHeader from '../../components/MiniHeader/MiniHeader';
import OrderForm from '../../components/OrderForm/OrderForm';
import './OrderPage.css';
import {menuPrices} from '../../data/priceData';
import Footer from '../../components/Footer/Footer';

export default function OrderPage() {
    return (
        <>
            <MiniHeader />
            <main>
                <section className="details-section">
                    <div className="details-content formpage-container"> 
                        <h3>Position Absolute Acı Pizza</h3>
                        <div className="stats">
                            <p className="price">{'85'}₺</p>
                            <div className="reviews">
                                <p>4.9</p>
                                <p>(200)</p>
                            </div>
                        </div>
                        <p className="description">
                            Frontend Developer olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
                        </p>
                    </div>
                </section>
                <OrderForm />
            </main>
        </>
    );
}
