import React from 'react';

const BlogSection = () => {
    return (
        <section className="blog__area-3 pb-140 blog__animation">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="sec-title-wrapper text-anim pt-130">
                            <h2 className="sec-sub-title">Recent Blog</h2>
                            <h3 className="sec-title title-anim" style={{ perspective: '400px' }}>
                                <div style={{
                                    display: 'block',
                                    textAlign: 'start',
                                    position: 'relative',
                                    transformOrigin: '483px 30px',
                                    transform: 'translate3d(0px, 0px, 0px)',
                                    opacity: 1
                                }}>
                                    Read Updated
                                </div>
                                <div style={{
                                    display: 'block',
                                    textAlign: 'start',
                                    position: 'relative',
                                    transformOrigin: '483px 30px',
                                    transform: 'translate3d(0px, 0px, 0px)',
                                    opacity: 1
                                }}>
                                    Journal
                                </div>
                            </h3>
                            <p style={{ perspective: '400px' }}>
                                <div style={{
                                    display: 'block',
                                    textAlign: 'start',
                                    position: 'relative',
                                    transformOrigin: '165px 12.5938px',
                                    transform: 'translate3d(0px, 0px, 0px)',
                                    opacity: 1
                                }}>
                                    Read our blog and try to see everything
                                </div>
                                <div style={{
                                    display: 'block',
                                    textAlign: 'start',
                                    position: 'relative',
                                    transformOrigin: '165px 12.5938px',
                                    transform: 'translate3d(0px, 0px, 0px)',
                                    opacity: 1
                                }}>
                                    from every perspective. Our passion lies
                                </div>
                                <div style={{
                                    display: 'block',
                                    textAlign: 'start',
                                    position: 'relative',
                                    transformOrigin: '165px 12.5938px',
                                    transform: 'translate3d(0px, 0px, 0px)',
                                    opacity: 1
                                }}>
                                    in making everything accessible and
                                </div>
                                <div style={{
                                    display: 'block',
                                    textAlign: 'start',
                                    position: 'relative',
                                    transformOrigin: '165px 12.5938px',
                                    transform: 'translate3d(0px, 0px, 0px)',
                                    opacity: 1
                                }}>
                                    aesthetic for everyone.
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <article className="blog__item-3" style={{ transform: 'translate(0px, 0px)', opacity: 1 }}>
                            <div className="blog__img-wrapper-3">
                                <a href="https://axtra-next-agency.vercel.app/blog-details">
                                    <div className="img-box">
                                        <img
                                            alt="Blog Thumbnail"
                                            width="330"
                                            height="450"
                                            decoding="async"
                                            data-nimg="1"
                                            className="image-box__item"
                                            style={{ color: 'transparent', width: 'auto', height: 'auto' }}
                                            srcSet="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.8079d114.jpg&w=384&q=75"
                                            src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.8079d114.jpg&w=384&q=75"
                                        />
                                    </div>
                                </a>
                            </div>
                            <div className="blog__info-3">
                                <h4 className="blog__meta">
                                    <a href="https://axtra-next-agency.vercel.app/category">UI Design</a> . 02 May 2019
                                </h4>
                                <h5>
                                    <a className="blog__title-3" href="https://axtra-next-agency.vercel.app/blog-details">
                                        How to bring fold to your startup company with Axtra
                                    </a>
                                </h5>
                                <a className="blog__btn" href="https://axtra-next-agency.vercel.app/blog-details">
                                    Read More
                                    <span><i className="fa-solid fa-arrow-right"></i></span>
                                </a>
                            </div>
                        </article>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <article className="blog__item-3" style={{ transform: 'translate(0px, 0px)', opacity: 1 }}>
                            <div className="blog__img-wrapper-3">
                                <a href="https://axtra-next-agency.vercel.app/blog-details">
                                    <div className="img-box">
                                        <img
                                            alt="Blog Thumbnail"
                                            width="330"
                                            height="450"
                                            decoding="async"
                                            data-nimg="1"
                                            className="image-box__item"
                                            style={{ color: 'transparent', width: 'auto', height: 'auto' }}
                                            srcSet="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F6.faeeace1.jpg&w=256&q=75"
                                            src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F6.faeeace1.jpg&w=256&q=75"
                                        />
                                    </div>
                                </a>
                            </div>
                            <div className="blog__info-3">
                                <h4 className="blog__meta">
                                    <a href="https://axtra-next-agency.vercel.app/category">UI Design</a> . 02 May 2019
                                </h4>
                                <h5>
                                    <a className="blog__title-3" href="https://axtra-next-agency.vercel.app/blog-details">
                                        How to manage a talented and successful design team
                                    </a>
                                </h5>
                                <a className="blog__btn" href="https://axtra-next-agency.vercel.app/blog-details">
                                    Read More
                                    <span><i className="fa-solid fa-arrow-right"></i></span>
                                </a>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
