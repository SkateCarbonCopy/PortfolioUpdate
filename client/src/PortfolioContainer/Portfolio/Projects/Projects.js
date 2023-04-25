import React from 'react';
import './Projects.scss';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
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
            <div className="row" id='Projects'>
                {/* Dashboard Update */}
                <div className="col-7 position-relative mb-5">
                    <a 
                        href={imagesImport["AAP18.png"]} 
                        data-lightbox="Dashboard"
                        data-title={"Acuo Admin Portal 1.8 Home Screen"}
                        data-alt={"Acuo Admin Portal 1.8 Home Screen"}
                        >
                        <img
                            src={imagesImport["AAP18.png"]}
                            className='img-thumbnail'
                            style={{height: "80%"}}
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
                            className='img-thumbnail position-absolute'
                            style={{height: "80%", right: 0, bottom: 0}}
                            alt=""
                        />
                    </a>
                </div>
                <div className="col-5 align-self-center mb-5 px-4">
                    <h1>Dashboard Update</h1>
                    <h5>I was responsible for designing and implementing a new product dashboard as part of a new version release of the product Acuo Admin Portal. This dashboard was to replace the previous home page. My goal was to make it as informative, and engaging as possible. I researched various charting libraries and landed on ChartJS to implement the line and pie chart, while the speedometer was created via the D3 library.</h5> 
                    <h5>The previous home page largely acted as a navigational component, so a left hand column of quick links was added for users who liked to have a one click method of navigating the site.</h5>
                </div>
                {/* Framework Updates */}
                <div className="col-5 align-self-center mb-5 px-4">
                    <h1>Framework Updates</h1>
                    <h5>Throughout my time working on Acuo Admin Portal, I was responsible for a number of high visibility/high impact updates. One of which was updating the entire product’s CSS library from Bootstrap 3 to 4, and eventually 5. </h5> 
                    <h5>This update has enabled the team to more easily utilize modern features added to the library such as flexbox. Since the product has over 20 modules, this change required a very large amount of browser compatibility checking and attention to mobile responsiveness. I used Browserstack to ensure different the content would appear correctly on different devices and screen resolutions.</h5>
                </div>
                <div className="col-7 position-relative mb-5">
                    <a 
                        href={imagesImport["bootstrapExample.png"]} 
                        data-lightbox="Bootstrap"
                        data-title={"Bootstrap 5 Page Example"}
                        data-alt={"Bootstrap 5 Page Example"}
                        >
                        <img
                            src={imagesImport["bootstrapExample.png"]}
                            className='img-thumbnail'
                            style={{height: "100%"}}
                        />
                    </a>
                </div>
                {/* New Features */}
                <div className="col-7 position-relative mb-5">
                    <a 
                        href={imagesImport["StudyHistoryWF.png"]} 
                        data-lightbox="Dashboard"
                        data-title={"Study History Wireframe"}
                        data-alt={"Study History Wireframe"}
                        >
                        <img
                            src={imagesImport["StudyHistoryWF.png"]}
                            className='img-thumbnail'
                            style={{height: "80%"}}
                        />
                    </a>
                    <a 
                        href={imagesImport["StudyHistoryProd.png"]} 
                        data-lightbox="Dashboard"
                        data-title={"Study History Production"}
                        data-alt={"Study History Production"}
                        >
                        <img
                            src={imagesImport["StudyHistoryProdLg.png"]}
                            className='img-thumbnail position-absolute'
                            style={{height: "80%", width:"auto", right: 0, bottom: 0}}
                            alt=""
                        />
                    </a>
                </div>
                <div className="col-5 align-self-center mb-5 px-4">
                    <h1>New Features</h1>
                    <h5>I was responsible for designing and implementing a new product dashboard as part of a new version release of the product Acuo Admin Portal. This dashboard was to replace the previous home page. My goal was to make it as informative, and engaging as possible. I researched various charting libraries and landed on ChartJS to implement the line and pie chart, while the speedometer was created via the D3 library.</h5> 
                    <h5>The previous home page largely acted as a navigational component, so a left hand column of quick links was added for users who liked to have a one click method of navigating the site.</h5>
                </div>
            </div>
        </div>
    )
}