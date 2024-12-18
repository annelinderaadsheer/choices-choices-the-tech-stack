import { useEffect, useState } from 'react'; 
import { categoriesData, dateFormat } from '../lib/data'; 
import Image from 'next/image';

export default function Header() {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        setCurrentDate(new Date().toLocaleDateString('nl-NL', dateFormat));
    }, []);

    return (
    <header>
      <div className="klein-scherm">
        <section className="mobile-header">
          <nav>
            <div id="menuToggle">
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
              <ul id="menu">
                <li>
                  <a href="/">Voorpagina</a>
                </li>
                {categoriesData.map((category) => (
                  <li key={category.slug}>
                    <a href={`/categorie/${category.slug}`}>{category.name}</a>
                  </li>
                ))}
                <div className="boven-mobile">
                  <li>Colofon</li>
                  <li>Over</li>
                  <li>Meedoen</li>
                  <li>Contact</li>
                </div>
              </ul>
            </div>
          </nav>
          <a href="/">
            <Image src="/Redpers-logo.webp" alt="RedPers logo" width="150" height="35" />
          </a>
          <a href="/search" className="mobile-search-icon">
            <Image src="/free-search-icon-2903-thumb.png" alt="Search" width="25" height="25" />
          </a>
        </section>

        <section className="mobile-datum">
          <div className="datum uppercase">
            <p>{currentDate}</p>
            <p className="uppercase">podium voor de journalistiek</p>
          </div>
        </section>
      </div>

      <div className="groot-scherm">
        <section className="boven">
          <ul>
            <li>Colofon</li>
            <li>Over</li>
            <li>Meedoen</li>
            <li>Contact</li>
          </ul>
        </section>
        <section className="midden">
          <div className="datum">
            <p className="datum-bold uppercase">{currentDate}</p>
            <p className="uppercase">Podium voor de journalistiek</p>
          </div>
          <a href="/">
            <Image src="/RedPers-logo.webp" alt="RedPers logo" width="160" height="40" />
          </a>
          <ul>
            <li>Nieuwsbrief</li>
            <li><button>Doneren</button></li>
            <li>
              <a href="/search">
                <Image src="/free-search-icon-2903-thumb.png" alt="Search" width="20" height="20" />
              </a>
            </li>
          </ul>
        </section>
        <section className="onder">
          <ul>
            <li><a href="/">Voorpagina</a></li>
            {categoriesData.map((category) => (
              <li key={category.slug}>
                <a href={`/categorie/${category.slug}`}>{category.name}</a>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <style jsx>{`
        #menuToggle {
          display: block;
          position: relative;
          top: 5px;
          left: 10px;
          z-index: 1;
          -webkit-user-select: none;
          user-select: none;
        }

        #menuToggle input {
          display: block;
          width: 40px;
          height: 32px;
          position: absolute;
          top: -7px;
          left: -5px;
          cursor: pointer;
          opacity: 0; 
          z-index: 2; 
          -webkit-touch-callout: none;
        }

        #menuToggle span {
          display: block;
          width: 33px;
          height: 4px;
          margin-bottom: 5px;
          position: relative;
          border-radius: 3px;
          background-color: black;
          z-index: 1;
          transform-origin: 4px 0px;
          transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
                      opacity 0.55s ease;
        }

        #menuToggle span:first-child {
          transform-origin: 0% 0%;
        }

        #menuToggle span:nth-last-child(2) {
          transform-origin: 0% 100%;
        }

        #menuToggle input:checked ~ span {
          opacity: 1;
          transform: rotate(45deg) translate(-2px, -1px);
          background: #232323;
        }

        #menuToggle input:checked ~ span:nth-last-child(3) {
          opacity: 0;
          transform: rotate(0deg) scale(0.2, 0.2);
        }

        #menuToggle input:checked ~ span:nth-last-child(2) {
          transform: rotate(-45deg) translate(0, -1px);
        }

        #menu {
          flex-direction: column;
          position: absolute;
          width: 175px;
          margin: -100px 0 0 -50px;
          padding: 50px;
          outline: 1px solid black;
          height: 500px;
          padding-top: 125px;
          background: #F7F7F5;
          list-style-type: none;
          -webkit-font-smoothing: antialiased; 
          transform-origin: 0% 0%;
          transform: translate(-100%, 0);
          transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);
        }

        #menu li {
          padding: 5px;
        }

        .boven-mobile {
          border-top: 1px solid rgba(154, 154, 154, 0.679);
          font-size: smaller;
          font-weight: bold;
        }

        #menuToggle input:checked ~ ul {
          transform: none;
        }

        .mobile-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px;
          border-bottom: 1px solid rgba(154, 154, 154, 0.679);
        }

        .mobile-datum {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
          font-size: smaller;
          border-bottom: 1px solid rgba(154, 154, 154, 0.679);
        }

        .onder ul {
          display: flex;
          align-items: center;
          padding: 15px;
          justify-content: center;
          gap: 20px;
          list-style: none;
          border-bottom: 1px solid #ddd;
          border-top: 1px solid #ddd;
          font-family: var(--menu-item);
          font-size: 14px;
        }

        .midden {
          display: flex;
          align-items: center;
          padding: 20px;
          justify-content: space-between;
        }

        .midden ul {
          display: flex; 
          list-style: none; 
          margin: 0;
          cursor: pointer;
          padding: 0;
          margin-left: 50px;
          gap: 20px;
          font-family: var(--menu-item);
        }

        .datum {
          display: flex;
          flex-direction: column; 
          margin-right: 20px;
        }

        .datum p {
          margin: 0;
          font-family: var(--menu-item);
          font-size: 14px;
        }

        .datum-bold {
          font-weight: bold;
        }

        ul {
          list-style-type: none;
          display: flex;
          gap: 15px; 
          padding: 0;
          margin: 0;
        }

        .boven li:hover {
          color: #000000;
          background-color: #f0f0f0;
        }

        ul a:hover {
          color: #ff0000;
          background-color: #f0f0f0;
        }

        ul li {
          display: flex;
          align-items: center;
        }

        button {
          background-color: #E85340;
          color: white;
          border: none;
          cursor: pointer;
          border-radius: 2px;
          width: 110px;
          height: 30px;
        }

        .boven {
          background-color: black;
          display: flex;
          color: white;
          justify-content: end;
        }
        
        .boven ul {
          display: flex;
          list-style: none;
          margin: 0;
          cursor: pointer;
          padding: 0;
        }

        .boven ul li {
          padding: 15px;
          font-family: var(--menu-item);
          font-size: 14px;
        }

        @media (max-width: 786px) {
          .groot-scherm {
            display: none;
          }

          .boven ul {
            display: none; 
          }
        }

        @media (min-width: 786px) {
          .klein-scherm {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}