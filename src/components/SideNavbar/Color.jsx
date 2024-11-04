import React, { useState, useEffect } from 'react'
import Input from '../commonComponents/Input'
import { categoryColor } from '../../features/SidenavSlice'
import { useDispatch, useSelector } from 'react-redux';

const Color = ({ data }) => {
    const [selectedValue, setSelectedValue] = useState('All');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(categoryColor(selectedValue));
    }, [selectedValue])


    const filterCat = data.map((item) => {
        return item.color
    })
    const filterName = filterCat.filter((x, index) => {
        return filterCat.indexOf(x) == index
    })
    const addAllName = filterName.splice(0, 0, 'All')

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <section className="category-block">
            <h5 className='py-3'>Category</h5>
            {
                filterName && filterName.map((item, i) => {
                    return (
                        <Input
                            key={i}
                            name={item}
                            id={item}
                            value={item}
                            checked={selectedValue === item}
                            onChange={handleChange}
                            label={item}
                        />
                    )
                })
            }

        </section>
    )
}

export default Color
