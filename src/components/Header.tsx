import { useState } from 'react';
import '../App.css';
import currency from '../assets/Logos/currency.svg';
import dolar from '../assets/Logos/dolar.svg';
import en from '../assets/Logos/en.svg';
import uk from '../assets/Logos/uk.svg';
import '../index.css';

interface Currency {
    id: number;
    currency: string;
}

interface Language {
    id: number;
    language: string;
    logo: string;
}

export default function Header() {
    const arrayCurrency: Currency[] = [
        { id: 1, currency: "USD" },
        { id: 2, currency: "UAH" },
        { id: 3, currency: "EUR" }
    ];

    const arrayLanguage: Language[] = [
        { id: 1, language: "EN", logo: en },
        { id: 2, language: "UK", logo: uk },
        { id: 3, language: "UK", logo: uk }
    ];

    const [show, setShow] = useState<string>('none');
    const [showLanguage, setShowLanguage] = useState<string>('none');
    const [selectedCurrency, setSelectedCurrency] = useState<string>("USD");
    const [selectedlanguage, setSelectedlanguage] = useState<string>("EN");

    const handleCurrency = () => {
        setShow(show => (show === "none" ? "block" : "none"));
        setShowLanguage("none");
    };

    const handleLanguage = () => {
        setShowLanguage(showLanguage => (showLanguage === "none" ? "block" : "none"));
        setShow("none"); 
    };

    const handleSelectedCurrency = (index: number) => {
        setSelectedCurrency(arrayCurrency[index].currency);
        setShow("none");
    };

    const handleSelectLanguage = (i: number) => {
        setSelectedlanguage(arrayLanguage[i].language);
        setShowLanguage("none");
    };

    return (
        <div>
            <header className='main-header'>
                <button className="navigation-btn"></button>
                <div className="lg-btn">
                    <button className='select-btn1' onClick={handleCurrency}>
                        <div className='currency-div'>
                            <img className="currency-logo" src={currency} alt="Currency" />
                            <img className='dolar' src={dolar} alt="" />
                        </div>
                        <h3 className='text-en'>{selectedCurrency}</h3>
                    </button>

                    <button className='select-btn2' onClick={handleLanguage}>
                    <div className='lang-div'>
                        <img className="lang-logo" src={selectedlanguage === "UK" ? uk : en} alt="language" />
                     </div>
                        <h3 className='text-en'>{selectedlanguage}</h3>
                    </button>
                    <div className='rightlanguage'>
                    <img className="selected-lang-logo" src={selectedlanguage === "UK" ? uk : en} alt="language logo" />
                </div>
                </div>
               

                <div className='currencyDiv' style={{ display: show }}>
                    <ul className='currencyUl'>
                        {arrayCurrency.map((item, index) => (
                            <li className='currencyLi' key={index}>
                                <button onClick={() => handleSelectedCurrency(index)}>
                                    <div className='currency-div'>
                                        <img className="currency-logo" src={currency} alt="Currency" />
                                        <img className='dolar' src={dolar} alt="" />
                                    </div>
                                    <h3 className='text-en'>{item.currency}</h3>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='language-div' style={{ display: showLanguage }}>
                    <ul className='language-ul'>
                        {arrayLanguage.map((item, i) => (
                            <li className='languageLi' key={i}>
                                <button onClick={() => handleSelectLanguage(i)}>
                                    <img className="language-logo" src={item.logo} alt="language logo" />
                                    <h3 className='text-en'>{item.language}</h3>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </header>
        </div>
    );
}
