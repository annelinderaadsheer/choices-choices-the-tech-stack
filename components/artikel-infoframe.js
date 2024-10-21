// components/ArtikelInfoframe.js

import React from 'react';

const ArtikelInfoframe = ({ post }) => {
  const dateFormat = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  return (
    <header>
      <div className="container">
        <article className="summary">
          <p className="boven-kop uppercase bold">
            {post.yoast_head_json.schema["@graph"][0].articleSection[0]}
          </p>
          <h1 className="artikel-kop">{post.title.rendered}</h1>
          <div
            className="introtekst"
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />
          <div className="author-and-read-time">
            <p>
              Door <span className="bold">{post.authors[0].display_name}</span>
            </p>
            <p>{post.yoast_head_json.twitter_misc["Geschatte leestijd"]}</p>
          </div>
        </article>
        <article className="img-container">
          <img
            width="850"
            height="400"
            src={post.yoast_head_json.og_image[0].url}
            alt="Artikel afbeelding"
          />
          <p className="small">
            {(new Date(post.date)).toLocaleDateString("nl-NL", dateFormat)}
          </p>
        </article>
      </div>

      <style jsx>{`
        * {
          text-align: center;
        }

        header {
          width: calc(100vw - 2em);
          background-color: var(--accent-color2);
          padding: 0 1em;
        }

        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: var(--main-width);
          margin: var(--margin-center);
        }

        .summary {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 100%;
          overflow-wrap: break-word;
        }

        .artikel-kop {
          font-family: var(--font-alt);
          font-style: var(--font-style-bold);
          font-size: 38px;
          line-height: 120%;
          letter-spacing: -1%;
          margin: 0;
        }

        .boven-kop {
          font-family: var(--font-main);
          font-style: var(--font-style);
          font-size: 12px;
          line-height: 220%;
          letter-spacing: 8%;
          color: var(--accent-color1);
        }

        .introtekst {
          font-family: var(--font-main);
          font-style: var(--font-style-light);
          font-size: 21px;
          line-height: var(--line-height-small);
          letter-spacing: -1%;
        }

        img {
          max-width: 100%;
          height: auto;
        }

        @media only screen and (min-width: 960px) {
          .container {
            flex-direction: row;
            justify-content: center;
            gap: 2em;
            padding-top: 4em;
            max-width: var(--main-width);
          }

          * {
            text-align: start;
          }

          .img-container {
            display: flex;
            flex-direction: column-reverse;
            align-items: end;
            width: 55%;
          }

          .summary {
            width: 45%;
          }

          .author-and-read-time {
            display: flex;
            justify-content: space-between;
          }
        }
      `}</style>
    </header>
  );
};

export default ArtikelInfoframe;
