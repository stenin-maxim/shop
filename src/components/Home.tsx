import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faHeart } from '@fortawesome/free-solid-svg-icons'

const Home = (props: any) => {
    const { loggedIn, email } = props;
    const navigate = useNavigate();

    const onButtonClick = () => {
        // You'll update this function later
    }

    let categories = [
        {
            name: "Авто",
            img: 'images/icon-cat-automobiles-rotator.png',
        },
        {
            name: "Недвижимость",
            img: "images/icon-cat-realty-rotator.png",
        },
        {
            name: "Одежда, обувь, аксессуары",
            img: "images/icon-cat-mclothes-rotator.png",
        },
        {
            name: "Компьютерная техника",
            img: "images/icon-cat-pc-rotator.png",
        },
        {
            name: "Для дома и дачи",
            img: "images/icon-cat-home-rotator.png"
        },
        {
            name: "Телефоны и планшеты",
            img: "images/icon-cat-gadgets-rotator.png"
        },
        {
            name: "Запчасти",
            img: "images/icon-cat-automoto-rotator.png",
        },
        {
            name: "Товары для детей",
            img: "images/icon-cat-kids-rotator.png",
        },
        {
            name: "Красота и здоровье",
            img: "images/icon-cat-beauty-rotator.png",
        },
        {
            name: "Животные",
            img: "images/icon-cat-pets-rotator.png",
        },
        {
            name: "Прочее",
            img: "images/icon-cat-other-rotator.png",
        },
        {
            name: "Стройматериалы и инструменты",
            img: "images/icon-cat-tools-rotator.png",
        }
    ];

    return (
        <div className="container">
            <div className="row">
                <h2 className="mb-3">Выберите категорию</h2>
                {categories.map((item) => (
                    <div className="col-2 text-center mb-3 category">
                        <a href="">
                            <img className="img-category" src={item.img} alt={item.name}/>
                            <span>{ item.name }</span>
                        </a>
                    </div>
                ))}
            </div>
            <div className="row">
                <h2>Все обьявления</h2>
                <div className="col-10">
                    <div className="col-3">
                        <img src="" alt=""/>
                        <span>title</span>
                        <span>15.59 руб.</span>
                        <FontAwesomeIcon icon={faHeart} />
                        <span>Москва</span>
                        <span>23.03.2024</span>
                    </div>
                </div>
                <div className="col-2">
                    <ul>
                        <li>Правила сайта</li>
                        <li>Реклама на сайте</li>
                        <li>О сайте</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home