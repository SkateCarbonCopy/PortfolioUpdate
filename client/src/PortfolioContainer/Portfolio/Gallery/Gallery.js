import React from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import './Gallery.scss';

function importAll(r) {
    const images = {};
    r.keys().map((item, index) => { 
        return (
            images[item.replace('./', '')] = r(item)
        )
     });
    return images;
}
  
const imagesImport = importAll(require.context('../../../assets/img/gallery', false, /\.(png|jpe?g|svg)$/));

export default function Gallery() {

    const images = [
        {
            file: 'callme',
            title: 'Call Me!',
            description: 'This was created for a friend. I find a great deal of inspiration from street art, and stencils.',
            media: 'Photoshop',
            src: 'callme.jpg',
            alt: 'Black and white stencil design of "Saved By the Bell\'s" Zach Morris using an old-school telephone layered over radiating blue lines.'
        },
        {
            file: 'digitalscenery',
            title: 'Digital Scenery',
            description: 'A retro sci-fi concept created by digital collage, and blending techniques.',
            media: 'Photoshop',
            src: 'digitalscenery.jpg',
            alt: 'Digital collage of person in a suit with a retro computer head sending color waves from the monitor. Background of a distorted cityscape and mathematical symbols overlaid.'
        },
        {
            file: 'owltattoomock',
            title: 'Owl Tattoo Mock-up',
            description: 'A tattoo concept for a series of pieces where fauna is formed by flora.',
            media: 'Photoshop, Illustrator',
            src: 'owltattoomock.jpg',
            alt: 'Owl in flight with leaves and flowers making up the owl\'s form.'
        },
        {
            file: 'jeffQA',
            title: 'Jeff: QA',
            description: 'A character (Jeff) designed for an animated web series.',
            media: 'Illustrator',
            src: 'jeffQA.jpg',
            alt: 'Casual person with long hair in gray shirt and blue jeans.'
        },
        {
            file: 'imagine',
            title: 'Imagine Changing the World',
            description: 'Commissioned mural for Imagine Harvard school in Cleveland, OH.',
            media: 'Spray paint',
            src: 'ImagineChangingTheWorld.jpg',
            alt: '"Imagine Changing the World" in graffiti letters next to globe with angel wings.'
        }, 
        {
            file: 'ToastPoster',
            title: 'Toast Improv Poster',
            description: 'Poster designed for the Toast Improv group.',
            media: 'Photoshop',
            src: 'ToastPoster.jpg',
            alt: 'Faces of actors/actresses altered to appear as though burnt into toast underneath show details.'
        },
        {
            file: 'steveQA',
            title: 'Steve: QA',
            description: 'A character (Steve) designed for an animated web series.',
            media: 'Illustrator',
            src: 'steveQA.png',
            alt: 'Casual person with shaved head, beard, and gray clothing.'
        },
        {
            file: 'elephantTattoo',
            title: 'Elephant Tattoo Mock-up',
            description: 'A tattoo concept for a series of pieces where fauna is formed by flora.',
            media: 'Photoshop, Illustrator',
            src: 'elephantTattoo.jpg',
            alt: 'Portrait of elephant head with flows and leaves making up the features.'
        },
        {
            file: 'rachelQA',
            title: 'Rachel: QA',
            description: 'A character (Rachel) designed for an animated web series.',
            media: 'Illustrator',
            src: 'rachelQA.png',
            alt: 'Person with arms folded, long hair, glasses, blue shirt, and blue jeans.'
        },
        {
            file: 'epiphany',
            title: 'Epiphany',
            description: 'The first of three handmade skateboards and custom painted designs created for the "Board to Death" artshow.',
            media: 'Paint markers, acrylic Paint, sharpie',
            src: 'epiphany.jpg',
            alt: 'Japanese demon mask drawing over graffiti background.'
        }, 
        {
            file: 'kingsofNY',
            title: 'Kings of New York',
            description: 'T-Shirt design example with Graffiti lettering.',
            media: '',
            src: 'kingsofNY.jpg',
            alt: 'Complex graffiti style using greens, and white.'
        },
        {
            file: 'MDshirt',
            title: 'Maryland T-Shirt Design',
            description: 'T-Shirt design for Maryland pride with cityscape of Baltimore.',
            media: 'Pen & Ink, Photoshop',
            src: 'MDshirt.jpg',
            alt: 'Cityscape of Baltimore behind "Maryland" graffiti letters, reflected in Baltimore harbor. Black eyed Susan as the sun (Maryland state flower).'
        },
        {
            file: 'goodbyebluemondays',
            title: 'Goodbye Blue Mondays',
            description: 'Street art inspired self-portrait.',
            media: 'Photoshop',
            src: 'goodbyebluemondays.jpg',
            alt: 'Monochromatic portrait using inverted colors with handstyle graffiti background'
        },
        {
            file: 'breezyclean',
            title: 'Breezy Clean',
            description: 'Logo concept for Breezy Clean company.',
            media: 'Illustrator',
            src: 'breezyclean.jpg',
            alt: 'Minimal house outline with sparkles coming from chimney over text logo'
        },
        {
            file: 'cleboard',
            title: 'Carbon Copy Labs: Cleveland Rides',
            description: 'Skateboard graphic designed with Cleveland sports team logos.',
            media: 'Photoshop',
            src: 'cleboard.jpg',
            alt: 'Overlapping Cleveland sports team "C" logos over "Carbon Copy" text on skateboard deck'
        },
        {
            file: 'oldhaunts',
            title: 'Old Haunts Brewing',
            description: 'Logo concept for Old Haunts Brewing company.',
            media: 'Illustrator',
            src: 'OldHaunts.jpg',
            alt: 'Modern style fox head logo over company name text'
        }, 
        {
            file: 'clegraff',
            title: 'Cleveland Burner',
            description: 'The second of three handmade skateboards and custom painted designs created for the "Board to Death" artshow.',
            media: 'Paint marker, sharpie, arcylic paint',
            src: 'ClevelandGraff.jpg',
            alt: 'Complex "Cleveland" graffiti'
        }, 
        {
            file: 'carboncopylogo',
            title: 'Carbon Copy Labs Logo',
            description: 'Logo for Carbon Copy Labs, a handmade skateboard company operated by myself, and friend.',
            media: 'Illustrator',
            src: 'carboncopylogo.png',
            alt: 'Logo with C\'s in various styles arranged to abstractly resemble a skateboard wheel rolling'
        },
        {
            file: 'cclbanners',
            title: 'Carbon Copy Labs Site Banners',
            description: 'Banners for Carbon Copy Labs website, a handmade skateboard company operated by myself, and friend.',
            media: 'Photoshop',
            src: 'cclbanners.jpg',
            alt: 'Examples of various color effects on website banners of anatomical illustrations and Carbon Copy logo'
        },  
        {
            file: 'wishyouwerehere',
            title: 'Wish You Were Here',
            description: 'Abstract art created for college art show.',
            media: 'Photoshop, Illustrator',
            src: 'wishyouwerehere.jpg',
            alt: 'Abstract 3-D shapes over various patterned backgrounds with moon in the center.'
        }, 
          {
            file: 'syntaxerror',
            title: 'Syntax Error',
            description: 'The third of three handmade skateboards and custom painted designs created for the "Board to Death" artshow.',
            media: 'Paint marker, sharpie, arcylic paint, wood stain',
            src: 'NineToFive.jpg',
            alt: 'Coffin shaped skateboard with business person with retro computer as a head.'
        }
    ];

    return (
        <div className="my-5" id='Gallery'>
            <div className="pt-lg-5 position-relative" style={{zIndex: -100}}>
                <div className='text-black-50 fw-bold section-title section-title-sm'>
                    <span>GALLERY</span>
                </div>
            </div>
            <div style={{zIndex: 100}}>
                <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 3, 1200: 5}} className='gallery-bkgd'>
                    <Masonry gutter={"1.5rem"}>
                        {images.map((image, i) => {
                            return (
                                <a 
                                    href={imagesImport[image.src]} 
                                    data-lightbox="gallery"
                                    data-title={image.title + "&nbsp;-&nbsp;<span>" + image.description + "</span>"}
                                    data-alt={image.title}
                                    key={i}
                                    >
                                    <img
                                        src={imagesImport[image.src]}
                                        style={{width: "100%", display: "block"}}
                                        alt=""
                                    />
                                </a>
                            )
                        })}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </div>
    )
}