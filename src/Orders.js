import React, { useEffect, useState } from 'react'
import './Orders.css'
import { db } from './firebase';
import { useStateValue } from './StateProvider';
import Order from './Order';
import { Link } from 'react-router-dom';
function Orders() {
    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => (
                    setOrders(snapshot.docs.map(doc => (
                        {
                            id: doc.id,
                            data: doc.data()
                        })))
                ))
            console.log("order is", orders);
        } else {
            setOrders([])
        }
    }, [user])
    return (
        <div className="orders">
            <h1>Your Order is Successfully Placed, </h1>
            <h3>Thank you for Shopping with us</h3>
            <Link to='/'>Shop More</Link>
            <div className="orders__order">
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders
