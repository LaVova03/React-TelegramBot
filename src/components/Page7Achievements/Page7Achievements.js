import './Page7Achievements.css';
import Ellipse from '../../assets/page7/Ellipse.svg';
import Disc from '../../assets/page7/adapt/disc.png'

const Page7Achievements = () => {
    return (
        <div className='page7__main__wrap'>
            <div className='page7__head'>
                Що я вважаю своїми основними<br className='page7__br' /> <span className='page7__head__span'>професійними досягненнями</span> за<br className='page7__br' />останні пару років:
            </div>
            <div className='page7__vertical__line'></div>
            <ul className='page7__ul__grid'>
                <li className='page7__li__year'>
                    <div className='page7__disk__2023'>
                        2023
                        <img className='page7__img__disk' src={Ellipse} alt="logo" />
                    </div>
                </li>
                <li className='page7__ul__adapt'>
                    <ul className='page7__text__ul' id='page7__li__adapt'>
                        <li className='page7__li__textright'>
                            <div className='page7__disk__2023adapt'>
                                2023
                                <img className='page7__img__disk' src={Ellipse} alt="logo" />
                            </div>
                            <img className='page7__img__disc' src={Disc} alt="logo" />
                            Запуск пекарні в Голландії з початковим капіталом<br className='page7__br' /> 50 євро </li><br /><br className='page7__br' /><br className='page7__br' />
                        <li className='page7__li__textright'>
                            <img className='page7__img__disc1' src={Disc} alt="logo" />
                            Вивчення нової сфери для себе – психології. <br />Результат: підписання контракту по співпраці мінімум на рік</li><br className='page7__br' /><br className='page7__br' /><br />
                        <li className='page7__li__textright'>
                            <img className='page7__img__disc2' src={Disc} alt="logo" />
                            Надання послуг консультування бізнесів</li><br /><br className='page7__br' /><br className='page7__br' />
                        <li className='page7__li__textright'>
                            <img className='page7__img__disc3' src={Disc} alt="logo" />
                            Ведення ділових переговорів на англійській мові. <br className='page7__br__adapt' />Це особисте, але внесу в професійні. <br />Бо такого рівня досягла за останній рік</li>
                    </ul>
                </li>
                <br /><br className='page7__br' />
                <li id='page7__li3' className='page7__ul__adapt'>
                    <ul className='page7__li__ul'>
                        <li className='page7__li__text'>
                            <div className='page7__disk__2022adapt'>
                                2022
                                <img className='page7__img__disk' src={Ellipse} alt="logo" />
                            </div>
                            <img className='page7__img__disc4' src={Disc} alt="logo" />
                            Вивчення абсолютно нової сфери для себе за півроку: отримала керування рестораном як<br className='page7__br' /> шеф-повар (абсолютно не моя тема, але що не зробиш для результату)</li><br /><br className='page7__br' /><br className='page7__br' />
                        <li className='page7__li__text'>
                            <img className='page7__img__disc5' src={Disc} alt="logo" />
                            Онлайн-запуск перевезень по Україні<br className='page7__br' />(тимчасовий проект)</li><br /><br className='page7__br' /><br className='page7__br' />
                        <li className='page7__li__text'>
                            <img className='page7__img__disc6' src={Disc} alt="logo" />
                            Надання послуг консультування бізнесів</li>
                    </ul>
                </li>
                <br className='page7__br__adapt' />
                <li className='page7__li__year' id='page7__li4'>
                    <div className='page7__disk__2022'>
                        <img className='page7__img__disk' src={Ellipse} alt="logo" />
                        <label className='page7__lable__year'>2022</label>
                    </div>
                </li>
                <li className='page7__li__year'>
                    <div className='page7__disk__2020'>
                        2020
                        <img className='page7__img__disk' src={Ellipse} alt="logo" />
                    </div>
                </li>
                <li id='page7__li5' className='page7__ul__adapt'>
                    <ul className='page7__text__ul'>
                        <li id='page7__li5__adapt' className='page7__li__textright'>
                            <div className='page7__disk__2020adapt'>
                                2020
                                <img className='page7__img__disk' src={Ellipse} alt="logo" />
                            </div>
                            <img className='page7__img__disc7' src={Disc} alt="logo" />
                            Відкриття свого магазину взуття.<br />Відпрацювала та налагодила усі процеси самостійно</li><br className='page7__br' /><br className='page7__br' /><br />
                        <li className='page7__li__textright'>
                            <img className='page7__img__disc8' src={Disc} alt="logo" />
                            Запуск кавового бренду з парнером.<br />Цей бренд чекає рестарт, бо він вийшов дійсно класним. <br className='page7__br__adapt' />Скоріше за все рестарт буде лише в Європі (причина в факап №1)</li>
                    </ul>
                </li><br className='page7__br__adapt' /><br className='page7__br__adapt' />
                <li id='page7__li6' className='page7__li__text'>
                    <div className='page7__disk__2019adapt'>
                        2019
                        <img className='page7__img__disk' src={Ellipse} alt="logo" />
                    </div>
                    <img className='page7__img__disc9' src={Disc} alt="logo" />
                    Підписання контракту на поставку на<br /> 1 млн грн за 1 смс в Facebook</li>
                <li id='page7__li7' className='page7__li__year'>
                    <div className='page7__disk__2019'>
                        <img className='page7__img__disk' src={Ellipse} alt="logo" />
                        <label className='page7__lable__year'>2019</label>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Page7Achievements;