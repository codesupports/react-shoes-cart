import { useSelector } from 'react-redux';
import Card from '../commonComponents/Card'


const AddToCartPage = ({ data }) => {
    return (
        <>
            {data?.map((item, index) => {
                return (
                    <Card key={index} data={item} isButton={false} />
                )
            })}
        </>
    )
}

export default AddToCartPage;