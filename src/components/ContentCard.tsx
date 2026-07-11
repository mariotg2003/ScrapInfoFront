import Card from './Card'
import { useEffect, useState } from 'react';
import './css/ContentCard.css'

interface Product {
    id: string;
    product_name: string;
    product_price: string | number;
  product_img: string;
  product_link: string;
}

function ContentCard({type, name} : {type: string, name: string}) {
    const [data, setData] = useState<Product[]>([]);


    useEffect(() => {
        fetch(`https://scrapinfo.onrender.com/select/${type}`)
            .then(response => response.json())
            .then(data => {
                // Handle both array response and object with nested array
                if (Array.isArray(data)) {
                    setData(data);
                } else if (data && typeof data === 'object') {
                    // If response is an object, try to find an array property
                    const arrayData = Object.values(data).find(value => Array.isArray(value)) as Product[];
                    setData(arrayData || []);
                } else {
                    setData([]);
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setData([]);
            });
    }, [type]);

  return (
    <>
    <p className="content-card-title">{name}</p>
    <div className="content-card-container">
      {data.map((item: Product) => (
        <Card key={item.id} data={item}/>
      ))}
    </div>
    </>
  );
}

export default ContentCard;