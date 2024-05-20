import React, { useEffect, useState }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';
import './scss/app.scss';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [email, setEmail] = useState('');

    return (
        <div className="App">
            <header>
                <div className="header-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 logo">Барахолка</div>
                            <div className="col-6 text-end">
                            <span>
                                <FontAwesomeIcon icon={faHeart} />
                            </span>
                                <span>
                                <FontAwesomeIcon icon={faCartShopping} className="ms-3"/>
                            </span>
                                <a href="/login" className="ms-3 login">Вход и регистрация</a>
                                <button className="ms-3 btn btn-primary">Разместить обьявление</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-10">
                                <div className="d-flex">
                                    <button className="btn btn-primary me-3">Все категории</button>
                                    <form action="" className="d-flex flex-grow-1">
                                        <input type="text" className="form-control" placeholder="Поиск по обьявлениям"/>
                                        <input type="submit" value="Найти" className="btn btn-primary px-5"/>
                                    </form>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="location">Москва</div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
                        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
                    </Routes>
                </BrowserRouter>
            </main>
        </div>
    );
}

export default App;
