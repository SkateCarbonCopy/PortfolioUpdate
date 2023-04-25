import React from 'react';
import './References.scss';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
  
const imagesImport = importAll(require.context('../../assets/img/references', false, /\.(png|jpe?g|svg)$/));

export default function References() {

    const referenceDetails = [
        {
            name: "Giovanna Orlando",
            role: "Internal Project Manager at Hyland",
            quoteParagraphs: ["Colin is a fantastic colleague. Collaborating and creating things with him is truly a joy. He offers solutions, listens to and incorporates ideas, and remains positive through challenges. He's smart and reliable. I'm certain that Colin will be an asset to any team he joins."],
            img: "Giovanna.jpg"
        }, 
        {
            name: "Shelby Lounsborough",
            role: "Team Lead - External Training at Hyland",
            quoteParagraphs: [
                "Colin is the gold standard when it comes to design, customer focus, and peer leadership.",
                "Colin was an ambassador and mentor to me as I joined Hyland nearly 8 years ago. He leads by example in everything he does.",
                "Colin built a reputation for being able to listen to questions and concerns from non technical stakeholders, and propose/implement solutions through his extensive work on the backend of platforms and integrations. Hyland’s training website from 2015-2022 was a long standing digital representation of Colin’s work and skill sets at play. Colin was regularly a point of contact if there ever was a question or issue regarding the platform. He always was kind, approachable, and responded with a sense of urgency. Colin often was able to diagnose root causes of problems and correct them.",
                "Working with Colin instills a high degree of confidence in the quality, solutions, and continued support of any project he touches."
            ],
            img: 'Shelby.jpg'
        },
        {
            name: "Kevin Rusnak",
            role: "Senior Manager, Digital Learning at Hyland",
            quoteParagraphs: [
                "Colin is a highly skilled web developer with a strong understanding of front-end technologies such as HTML, CSS, and JavaScript. He consistently delivers high-quality code and is always looking for ways to improve the user experience. He was vital to the success of Training.Hyland.com and the e-commerce engine that drove sales.",
                "He was responsible for several web development projects and redesign projects that highlighted his understanding of our platform and best-in-class development process. I am honestly not sure what we would have done without his collaboration and strong solution building skills.",
                "He is a great team player and always goes above and beyond to ensure the project is delivered on time and to the highest standard. Colin has a great ability to communicate technical concepts to non-technical stakeholders. He is always willing to take the time to explain things in a clear and concise manner."
            ],
            img: 'Kevin.jpg'
        }
    ];

    const mapQuoteParagraphs = function (arr) {
        return arr.map((ref, i) => (
            <span className={`mb-3 ${i < arr.length-1 && i !== 0 ? "d-block" : ""} ${i === 1 ? "mt-3" : ""}`}>
                {ref}
            </span> 
        ))
    }

    const getReferences = () => {
    return referenceDetails.map((ref) => (
        <div className="col-lg-4 text-center d-flex">
            <div className='profile position-relative d-flex flex-wrap align-content-center justify-content-center'>
                <img
                    src={imagesImport[ref.img]}
                    alt={ref.name}
                    className='user'
                />
                <blockquote>{mapQuoteParagraphs(ref.quoteParagraphs)}</blockquote>
                <h4 className='dark-orange fw-bold'>{ref.name}</h4>
                <h5>{ref.role}</h5>
            </div>
        </div>
    ));
    };

    return (
        <div className="my-5 dark-section" id='References'>
            <div className="py-lg-5 container position-relative">
                <div className='text-white-50 fw-bold section-title section-title-sm'>
                    <span>REFERENCES</span>
                </div>
            </div>
            <section className='testimonials container pb-5'>
                    <div className="row my-2 d-flex flex-wrap">
                        {getReferences()}
                    </div>
                </section>
        </div>
    )
}