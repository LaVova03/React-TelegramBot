import './Page7Achievements.css';
import Ellipse from '../../assets/page7/Ellipse.svg';

const Page7Achievements = () => {
    return (
        <div className='page7__main__wrap'>
            <div className='page7__head'>
                Що я вважаю своїми основними<br className='page7__br' /> <span className='page7__head__span'>професійними досягненнями</span> за <br className='page7__br' />останні пару років:
            </div>
            <ul className='page7__ul__grid'>
                <li>
                    <div className='page7__disk__2023'>
                        2023
                        <img className='page7__img__disk' src={Ellipse} alt="logo" />
                    </div>
                </li>
                <li>
                    <ul className='p7__ul__right'>
                        <li>Запуск пекарні в Голландії з початковим капіталом<br />50 євро</li><br /><br />
                        <li>Вивчення нової сфери для себе – психології.<br />Результат: підписання контракту по співпраці мінімум на рік</li><br /><br />
                        <li>Надання послуг консультування бізнесів</li><br /><br />
                        <li>Ведення ділових переговорів на англійській мові. Це особисте, але внесу в професійні. Бо такого рівня досягла за останній рік</li>
                    </ul>
                </li>
                <li>
                    <ul className='p7__ul__left'>
                        <li>Вивчення абсолютно нової сфери для себе за півроку: отримала керування рестораном як шеф-повар (абсолютно не моя тема, але що не зробиш для результату)</li><br /><br />
                        <li>Онлайн-запуск перевезень по Україні (тимчасовий проект)</li><br /><br />
                        <li>Надання послуг консультування бізнесів</li>
                    </ul>
                </li>
                <li>
                    <div className='page7__disk__2022'>
                        <img className='page7__img__disk' src={Ellipse} alt="logo" />
                        2022
                    </div>
                </li>
                <li>
                    <div className='page7__disk__2020'>
                        2020
                        <img className='page7__img__disk' src={Ellipse} alt="logo" />
                    </div>
                </li>
                <li>
                    <ul className='p7__ul__right2'>
                        <li>
                            Відкриття свого магазину взуття. <br />Відпрацювала та налагодила усі процеси самостійно
                        </li><br /><br />
                        <li>
                            Запуск кавового бренду з партнером.<br />Цей бренд чекає рестарт, бо він вийшов дійсно класним. Скоріше за все рестарт буде лише в Європі (причина в факап №1)
                        </li>
                    </ul>
                </li>
                <li>
                    <ul className='p7__ul__left2'>
                        <li>Підписання контракту на поставку на<br />1 млн грн за 1 смс в Facebook</li>
                    </ul>
                </li>
                <li>
                    <div className='page7__disk__2019'>
                        <img className='page7__img__disk' src={Ellipse} alt="logo" />
                        2019
                    </div>
                </li>
            </ul>



            <div className='page7__vertical__line__adapt'>
                <ul className='page7__adapt__ul'>
                    <li>
                        <span className='page7__adpt__img'>
                            <label>2023</label>
                            <img src={Ellipse} alt="logo" />
                        </span> Запуск пекарні в Голландії з початковим капіталом 50 євро
                    </li>
                    <li>
                        Вивчення нової сфери для себе – психології. Результат: підписання контракту по співпраці мінімум на рік
                    </li>
                    <li>
                        Надання послуг консультування бізнесів
                    </li>
                    <li>
                        Ведення ділових переговорів на англійській мові. Це особисте, але внесу в професійні. Бо такого рівня досягла за останній рік
                    </li>
                </ul>
                <ul className='page7__adapt__ul'>
                    <li>
                        <span className='page7__adpt__img'>
                            <label>2022</label>
                            <img src={Ellipse} alt="logo" />
                        </span> Вивчення абсолютно нової сфери для себе за півроку: отримала керування рестораном як шеф-повар (абсолютно не моя тема, але що не зробиш для результату)
                    </li>
                    <li>
                        Онлайн-запуск перевезень по Україні (тимчасовий проект)
                    </li>
                    <li>
                        Надання послуг консультування бізнесів
                    </li>
                </ul>
                <ul className='page7__adapt__ul'>
                    <li>
                        <span className='page7__adpt__img'>
                            <label>2020</label>
                            <img src={Ellipse} alt="logo" />
                        </span> Відкриття свого магазину взуття. Відпрацювала та налагодила усі процеси самостійно
                    </li>
                    <li>
                        Запуск кавового бренду з партнером. Цей бренд чекає рестарт, бо він вийшов дійсно класним. Скоріше за все рестарт буде лише в Європі (причина в fuck up №1)
                    </li>
                </ul>
                <ul id='page7__adapt__lastul'>
                    <li id='page7__adapt__lastli'>
                        <span className='page7__adpt__img' id='page7__adapt__lastspan'>
                            <label className='page7__adapt__lastlabel'>2019</label>
                            <img className='page7__adapt__lastimg' src={Ellipse} alt="logo" />
                        </span> Підписання контракту на поставку на 1 млн грн за 1 смс в Facebook
                    </li>
                </ul>
            </div>
            <div className='page7__adapt__height'></div>
        </div>
    )
}

export default Page7Achievements;