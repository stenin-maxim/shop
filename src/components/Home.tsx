import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = (props: any) => {
    const { loggedIn, email } = props;
    const navigate = useNavigate();

    const onButtonClick = () => {
        // You'll update this function later
    }

    return (
        <div className="container">
            <div className="row"></div>
        </div>
    )
}

export default Home