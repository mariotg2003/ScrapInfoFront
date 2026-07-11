import './css/Card.css'
import { normalizePriceText, normalizeProductText } from '../utils/NormalizeNames';


interface Product {
    id: string;
    product_name: string;
    product_price: string | number;
    product_img: string;
    product_link: string;
    product_old_price?: string;
}

function Card({data} : {data: Product}) {
  const productName = normalizeProductText(data.product_name);
  const productPrice = normalizePriceText(data.product_price);
  const productOldPrice = normalizePriceText(data.product_old_price);

  return (
    <div className="card" onClick={() => window.open(`https://www.pccomponentes.com/${data.product_link}`, '_blank')}>
      <div className="card_img">
        <img src={data.product_img} alt={productName} />
      </div>
      <p className="card_name">{productName}</p>
      <p className="card_price">{productPrice}</p>
      {productOldPrice && <p className="card_old_price">{productOldPrice}</p>}
    </div>
  );
}

export default Card;