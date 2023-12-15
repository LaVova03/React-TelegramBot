import './Page9Fond.css';
import Photo from '../../assets/page9/natali.png';
import React, { useState, useEffect } from 'react';
import SetTelegram from '../SetTelegram/SetTelegram';
import DoneModal from './../DoneModal/DoneModal';

const Page9Fond = () => {

    const [modal, setModal] = useState(false);

    const [data, setData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    })

    const [emptyFields, setEmptyFields] = useState({
        name: false,
        phone: false,
        email: false,
    });

    useEffect(() => {
        if (modal) {
            setTimeout(() => {
                setModal(false)
            }, 5000)
        }
    }, [modal])

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setEmptyFields({
            ...emptyFields,
            [name]: value.trim() === ''
        });
    };

    const handleChange = (e) => {

        const value = e.target.value;
        const regexName = /^[a-zA-Zа-яА-ЯєЄїЇіІ]*$/;
        const regexPhone = /^[+0-9()\s]+$/;

        if (e.target.name === 'name') {
            if (regexName.test(value)) {
                setData({
                    ...data,
                    [e.target.name]: e.target.value
                });
            }
        } else if (e.target.name === 'phone') {
            if (regexPhone.test(value) || value === '') {
                setData({
                    ...data,
                    [e.target.name]: e.target.value
                });
            }
        } else if (e.target.name === 'email') {
            setData({
                ...data,
                [e.target.name]: e.target.value
            });
        } else if (e.target.name === 'message') {
            setData({
                ...data,
                [e.target.name]: e.target.value
            });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const regexEmail = /@/;
        if (regexEmail.test(data.email)) {
            if (data.name && data.phone && data.email) {
                SetTelegram(data)
                const emptyFieldsObj = {
                    name: data.name.trim() === '',
                    phone: data.phone.trim() === '',
                    email: data.email.trim() === '',
                };
                setEmptyFields(emptyFieldsObj);

                if (data.name && data.phone && data.email) {
                    setData({
                        name: '',
                        phone: '',
                        email: '',
                        message: '',
                    });

                    setModal(true)

                    setEmptyFields({
                        name: false,
                        phone: false,
                        email: false,
                    });
                }
            };
        }
    }

    const scrollToAboutMe = () => {
        window.scrollTo({
            top: 1250,
            behavior: 'smooth'
        });
    };

    const scrollToOffers = () => {
        window.scrollTo({
            top: 4050,
            behavior: 'smooth'
        });
    };

    const setFaceBook = (event) => {
        event.preventDefault()
        window.location.href = 'https://www.facebook.com/natali.aktibaeva';
    }

    const setInstagram = (event) => {
        event.preventDefault()
        window.location.href = 'https://www.instagram.com/aktybaieva/';
    }

    return (
        <div className='page9__wrap'>
            <div className='page9__card'>
                <div className='page9__card__body'>
                    <div className='page9__card__head'>
                        ФОНД<br />ДЛЯ СТАРТАПІВ
                        <ul className='page9__card__ul'>
                            <li className='page9__card__li'><span className='page9__card__span'>10%</span> від доходу буде направлено на <br className='page9__br__adapt' /><span className='page9__card__span'>запуск нових стартапів.</span></li>
                            <li className='page9__card__li'>При накопиченні «в гаманці» суми від <span className='page9__span__yellow'><br className='page9__br__adapt' />100тис грн. </span><br className='page9__br' />ми будемо оголошувати конкурс для бажаючих<br className='page9__br' />отримати таку інвестицію.</li>
                            <li className='page9__card__li'>Правила конкурсу будуть надруковані відразу перед<br className='page9__br' />запуском першого етапу.</li>
                        </ul>
                    </div>
                    <img className='page9__card__photo' src={Photo} alt="logo" />
                </div>
            </div>
            <div className='page9__form__flex'>
                <div className='page9__head__wrap'>
                    <div className='page9__head__form'>
                        Коли,<br />як не зараз?
                    </div>
                    <div className='page9__text__form'>
                        Залишити заявку з Вашим описом<br className='page9__br' />питань, щоб наш консультант<br className='page9__br' />зв’язався з Вами
                    </div>
                </div>
                <div className='page9__form'>
                    <form onSubmit={handleSubmit}>
                        <div className='page9__form__card'>
                            <div>
                                <input
                                    className={emptyFields.name ? 'page9__input1__red' : 'page9__input1'}
                                    type="text"
                                    maxlength="15"
                                    name='name'
                                    placeholder='  ім’я'
                                    value={data.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <input
                                    className={emptyFields.name ? 'page9__input1__adaptRed' : 'page9__input1__adapt'}
                                    type="text"
                                    maxlength="15"
                                    name='name'
                                    placeholder='  ім’я'
                                    value={data.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                            <div>
                                <textarea className='page9__textarea__adapt' maxlength="100" cols="30" rows="10" placeholder=' повідомлення' name='message' value={data.message} onChange={handleChange}></textarea>
                            </div>
                            <div>
                                <input
                                    className={emptyFields.phone ? 'page9__input2__red' : 'page9__input2'}
                                    type="text"
                                    maxlength="20"
                                    name='phone'
                                    placeholder='  телефон'
                                    value={data.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <input
                                    className={emptyFields.phone ? 'page9__input2__adaptRed' : 'page9__input2__adapt'}
                                    type="text"
                                    maxlength="20"
                                    name='phone'
                                    placeholder='  телефон'
                                    value={data.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                        </div>
                        <input
                            className={emptyFields.email ? 'page9__input3__red' : 'page9__input3'}
                            type="text"
                            maxlength="30"
                            name='email'
                            placeholder='  електронна адреса'
                            value={data.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <input
                            className={emptyFields.email ? 'page9__input3__adaptRed' : 'page9__input3__adapt'}
                            type="text"
                            maxlength="30"
                            name='email'
                            placeholder='  електронна адреса'
                            value={data.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <textarea className='page9__textarea' cols="30" rows="10" placeholder=' Повідомлення' name='message' value={data.message} onChange={handleChange} ></textarea>
                        {modal ? <DoneModal /> : null}
                        <button type='submit' className='page9__form__button'>Консультація</button>
                    </form>
                </div>
            </div>
            <div className='page9__final__div'>
                <div className='page9__final__side'>
                    <ul id='page9__final__ul'>
                        <li>
                            <button className='page9__final__button' onClick={scrollToAboutMe}>Про мене</button>
                        </li><br />
                        <li>
                            <button className='page9__final__button' onClick={scrollToOffers}>Пропозиції</button>
                        </li><br />
                    </ul>
                </div>
                <div id='page9__final__center'>
                    © 2023 Aktybaeva
                </div>
                <div className='page9__wrap__btn'>
                    <button className='page9__btn__social1' onClick={setFaceBook}>
                    </button>
                    <button className='page9__btn__social2' onClick={setInstagram}>
                    </button>
                </div>
                <div id='page9__center__adapt'>
                    © 2023 Aktybaeva
                </div>
            </div>
        </div>
    )
}

export default Page9Fond;