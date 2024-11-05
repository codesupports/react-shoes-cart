import { useSelector } from 'react-redux';
import Card from '../commonComponents/Card'
import { useState, useEffect } from 'react';
import './style.css'

const AddToCartPage = ({ data }) => {
    const [countMap, setCountMap] = useState({});
    const addToCardData = useSelector((state) => state.addToCartSlice.items);

    useEffect(() => {
        var count = {}
        const countObject = () => {
            const counts = data.forEach((item) => {
                count[item.id] = (count[item.id] || 0) + 1
            }, {})
            setCountMap(count);
        }
        countObject()
    }, [data])
    // console.log('countMap', countMap)

    const uniqueObject = data.filter((item, index) => {
        return index === data.findIndex((x) => {
            return item.id === x.id
        })
    })

    const productQuantity = (id) => { // get quantity of product
        return countMap[id] ?? 'Key does not exist in the second object.';
    };

    const productPrice = data.map((price) => {
        return Number(price.newPrice)
    }, 0)

    const totalPrice = productPrice.reduce((acc, curr) => {
        return acc + curr
    })
    // console.log(totalPrice)
    return (
        <div className='shopping-main'>
            <div className='cart-container--left'>
                <div className='conatiner-cartaera'>
                    {uniqueObject?.map((item, index) => {
                        return (
                            <Card key={index} data={item} isButton={false} quantity={productQuantity(item.id)} />
                        )
                    })}
                </div>
            </div>
            <div className='shopping-cartaera'>
                <h4 className='toggle-title'>Shopping Cart (5)</h4>
                <ul>
                    {uniqueObject?.map((item, index) => {
                        return (
                            <li>
                                <p><span>{item.company}-{item.category} ({item.color}) </span><img src={item.img} alt={item.title} /></p>
                                <span>{productQuantity(item.id)} X</span>
                                <span className='product-price'>${item.newPrice}.00</span>
                            </li>
                        )
                    })}
                </ul>
                <div className='cart-summary'>
                    <div className="cart-summary-line">
                        <span className="label js-subtotal">{addToCardData.length} items</span>
                        <span className="value">${totalPrice}.00</span>
                    </div>
                    <div className="cart-summary-line">
                        <span className="label js-subtotal">Shipping Charge</span>
                        <span className="value">$7.00</span>
                    </div>
                    <div className="cart-summary-line pt-4 ">
                        <span className="label js-subtotal fw-bold">Total (tax excl.)</span>
                        <span className="value fw-bold">${totalPrice + 7}.00 </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddToCartPage;