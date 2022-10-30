import pizza1 from '../images/pizza1.png';
import pizza2 from '../images/pizza2.png';
import pizza3 from '../images/pizza3.png';

import ham from '../images/ham.png';
import tomato from '../images/tomato.png'
import garlic from '../images/garlic.png'
import cheese from '../images/cheese.png'

export const PopularData = [
    {
        id: 1,
        image: pizza1,
        title: 'Primavera Pizza',
        weight: '540 gr',
        rating: '5.0',
        price: 3.99,
        sizeName: 'Medium 14\"',
        sizeNumber: 14,
        crust: 'Thin Crust',
        deliveryTime: 30,
        ingredients: [
            {
                id: 1,
                name: 'ham',
                image: ham
            },
            {
                id: 2,
                name: 'tomato',
                image: tomato
            },
            {
                id: 3,
                name: 'garlic',
                image: garlic
            },
            {
                id: 4,
                name: 'cheese',
                image: cheese
            },
        ]
    },
    {
        id: 2,
        image: pizza2,
        title: 'Vegetarian Pizza',
        weight: '450 gr',
        rating: '4.0',
        price: 4.99,
        sizeName: 'Thin 10\"',
        sizeNumber: 10,
        crust: 'Thin Crust',
        deliveryTime: 40,
        ingredients: [
            {
                id: 1,
                name: 'garlic',
                image: garlic
            },
            {
                id: 2,
                name: 'cheese',
                image: cheese
            },
        ]
    },
    {
        id: 3,
        image: pizza3,
        title: 'Pepperoni Pizza',
        weight: '700 gr',
        rating: '4.5',
        price: 9.99,
        sizeName: 'Large 20\"',
        sizeNumber: 18,
        crust: 'Thin Crust',
        deliveryTime: 20,
        ingredients: [
            {
                id: 1,
                name: 'tomato',
                image: tomato
            },
            {
                id: 2,
                name: 'cheese',
                image: cheese
            },
        ]
    },
]

export default PopularData;