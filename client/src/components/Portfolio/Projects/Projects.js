import React from 'react';
import './Projects.scss';

function importAll(r) {
    const images = {};
    r.keys().map((item, index) => { 
        return (
            images[item.replace('./', '')] = r(item)
        )
     });
    return images;
}

const imagesImport = importAll(require.context('../../../assets/img/portfolio', false, /\.(png|jpe?g|svg)$/));

export default function Projects() {
    return (
        <div className="my-5">
            <div className="pt-lg-5 position-relative" style={{zIndex: -100}}>
                <div className='text-black-50 fw-bold section-title section-title-sm d-flex justify-content-end'>
                    <span>PORTFOLIO</span>
                </div>
            </div>
            <div id='Projects' className='mt-3 mt-lg-0'>
                {/* Dashboard Update */}
                <div className="row">
                    <div className="col-lg-7 position-relative mb-5">
                        <a
                            href={imagesImport["AAP18.png"]}
                            data-lightbox="Dashboard"
                            data-title={"Acuo Admin Portal 1.8 Home Screen"}
                            data-alt={"Acuo Admin Portal 1.8 Home Screen"}
                            >
                            <img
                                src={imagesImport["AAP18.png"]}
                                className='img-thumbnail h-lg-80 d-none d-lg-block'
                                alt={"Acuo Admin Portal 1.8 Home Screen"}
                            />
                        </a>
                        <a
                            href={imagesImport["dashboard20.png"]}
                            data-lightbox="Dashboard"
                            data-title={"Acuo Admin Portal 2.0 Dashboard"}
                            data-alt={"Acuo Admin Portal 2.0 Dashboard"}
                            >
                            <img
                                src={imagesImport["dashboard20.png"]}
                                className='img-thumbnail position-absolute-lg h-lg-80 right-0 bottom-0'
                                alt={"Acuo Admin Portal 2.0 Dashboard"}
                            />
                        </a>
                    </div>
                    <div className="col-lg-5 align-self-center mb-5 px-4">
                        <h1>Dashboard Update</h1>
                        <h5>I was responsible for designing and implementing a new product dashboard as part of a new version release of the product Acuo Admin Portal. This dashboard was to replace the previous home page. My goal was to make it as informative, and engaging as possible. I researched various charting libraries and landed on ChartJS to implement the line and pie chart, while the speedometer was created via the D3 library.</h5>
                        <h5>The previous home page largely acted as a navigational component, so a left hand column of quick links was added for users who liked to have a one click method of navigating the site.</h5>
                    </div>
                </div>
                {/* Framework Updates */}
                <div className="row">
                    <div className="col-lg-5 align-self-center mb-5 px-4 order-2 order-lg-1">
                        <h1>Framework Updates</h1>
                        <h5>Throughout my time working on Acuo Admin Portal, I was responsible for a number of high visibility/high impact updates. One of which was updating the entire product’s CSS library from Bootstrap 3 to 4, and eventually 5. </h5>
                        <h5>This update has enabled the team to more easily utilize modern features added to the library such as flexbox. Since the product has over 20 modules, this change required a very large amount of browser compatibility checking and attention to mobile responsiveness. I used Browserstack to ensure different the content would appear correctly on different devices and screen resolutions.</h5>
                    </div>
                    <div className="col-lg-7 position-relative mb-5 order-1 order-lg-2">
                        <a
                            href={imagesImport["bootstrapExample.png"]}
                            data-lightbox="Bootstrap"
                            data-title={"Bootstrap 5 Page Example"}
                            data-alt={"Bootstrap 5 Page Example"}
                            >
                            <img
                                src={imagesImport["bootstrapExample.png"]}
                                className='img-thumbnail h-lg-100'
                                alt={"Bootstrap 5 Page Example"}
                            />
                        </a>
                    </div>
                </div>
                {/* New Features */}
                <div className="row">
                    <div className="col-lg-7 position-relative mb-5">
                        <a
                            href={imagesImport["StudyHistoryWF.png"]}
                            data-lightbox="Features"
                            data-title={"Study History Wireframe"}
                            data-alt={"Study History Wireframe"}
                            >
                            <img
                                src={imagesImport["StudyHistoryWF.png"]}
                                className='img-thumbnail h-lg-80 d-none d-lg-block'
                                alt={"Study History Wireframe"}
                            />
                        </a>
                        <a
                            href={imagesImport["StudyHistoryProd.png"]}
                            data-lightbox="Features"
                            data-title={"Study History Production"}
                            data-alt={"Study History Production"}
                            >
                            <img
                                src={imagesImport["StudyHistoryProdLg.png"]}
                                className='img-thumbnail position-absolute-lg h-lg-80 right-0 bottom-0'
                                alt={"Study History Production"}
                            />
                        </a>
                    </div>
                    <div className="col-lg-5 align-self-center mb-5 px-4">
                        <h1>New Features</h1>
                        <h5>I reinvented the process of adding new features to Acuo Admin Portal by introducing a more design focused strategy that included wireframes created via Balsamiq, a mockup phase, and implementation phase. Each of these were documented in Jira and allowed stakeholders more opportunities for comment and a closer association with the design process. </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}