import React from 'react';

const ArtikelKlein = ({ data }) => {
    return (
        <>
            <div className="artikelen">
                {data.posts && data.posts.length > 0 ? (
                    data.posts.map((post) => (
                        <a href="/" className="article-link" aria-label="" key={post.id}>
                            <article>
                                <img src={post.yoast_head_json.og_image[0].url} alt="Artikel afbeelding" />
                                <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                <p>
                                    door <strong dangerouslySetInnerHTML={{ __html: post.yoast_head_json.author }} />
                                </p>
                            </article>
                        </a>
                    ))
                ) : (
                    <p>No posts available</p>
                )}
            </div>

            <style jsx>{`
                .artikelen {
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                }
                .article-link {
                    text-decoration: none; 
                }
                article {
                    max-width: 260px;
                    margin: 10px;
                    height: 350px;
                    border: 1.6px solid #7B7B7A;
                    cursor: pointer;
                }
                article img {
                    width: 100%;
                    height: 150px;
                    object-fit: cover;
                }
                article h3 {
                    padding: 10px;
                    margin-bottom: 50px;
                    margin-top: 0;
                    color: black;
                }
                article p {
                    padding: 10px;
                    color: #7B7B7A;
                }
            `}</style>
        </>
    );
};

export default ArtikelKlein;