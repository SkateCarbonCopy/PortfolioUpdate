import React from 'react';
import Carousel from '../../utilities/Carousel/Carousel';
import './References.scss';

function importAll(r) {
    const images = {};
    r.keys().map((item, index) => { 
        return (
            images[item.replace('./', '')] = r(item)
        )
     });
    return images;
}
  
const imagesImport = importAll(require.context('../../assets/img/references', false, /\.(png|jpe?g|svg)$/));

export default function References() {

    let referenceDetails = [
        {
            name: "Giovanna Orlando",
            role: "Internal Project Manager at Hyland",
            quoteParagraphs: ["Colin is a fantastic colleague. Collaborating and creating things with him is truly a joy. He offers solutions, listens to and incorporates ideas, and remains positive through challenges. He's smart and reliable. I'm certain that Colin will be an asset to any team he joins."],
            img: "Giovanna.jpg"
        }, 
        {
            name: "Shelby Lounsborough",
            role: "Manager of Training at Hyland",
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
        }, 
        {
            name: "Erin Thompson, M. A.",
            role: "Senior Instructional Designer",
            quoteParagraphs: [
                "Colin is someone you want on your team. He is thoughtful in his approach to his work and provides equally thoughtful input and feedback to other’s projects, always making them better with his insight. Even in stressful moments Colin remains composed and focused on the goal ahead of him. He makes time for his teammates and exudes positive energy. Writing this makes me realize how much I miss working with him, and how lucky others will be to work with him. "
            ],
            img: 'Erin.jpg'
        }, 
        {
            name: "Matthew Gray", 
            role: "Full Stack Developer",
            quoteParagraphs: [
                "I highly recommend Colin for his exceptional creativity and his ability to learn anything and everything. During his time at Hyland, Colin consistently exceeded expectations and delivered high quality work that demonstrated his impressive talent and eye for design. His creative approach to problem solving and design have been instrumental in the success of many new features and reports in our project.",
                "Colin is also a team player and a pleasure to work with. He made a big impact to our team immediately after joining. His positive attitude and willingness to go the extra mile to support his colleagues have made him indispensable."
            ], 
            img: 'Matt.jpg'
        },
        {
            name: "Brian Horsch", 
            role: "Director R&D - Healthcare Enterprise Medical Imaging at Hyland",
            quoteParagraphs: [
                "Colin started with Hyland as an eLearning intern and advanced into the role of eLearning specialist.",
                "Starting in 2016, Colin worked as a Web Delivery Specialist on the Education Services team for several years. He created and updated web pages for the training website, managed training content, and designed and hosted events for clients during tech conferences.",
                "In 2020, Colin transferred into the Enterprise Imaging group as a software developer on the Acuo Admin Portal (AAP) team. Colin took on a complete redesign of AAP and its new dashboard homepage, worked on a new UI for reports in AAP 2.0, and has advanced the reporting, analytics and administration modules to new levels. Colin has shown tremendous growth and passion in all his work and has been an outstanding team member."
            ], 
            img: undefined
        }
    ];

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex !== 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }

    referenceDetails = shuffle(referenceDetails);

    const mapQuoteParagraphs = function (arr) {
        return arr.map((ref, i) => (
            // <span className={`mb-3 ${i < arr.length-1 && i !== 0 ? "d-block" : ""} ${i === 1 ? "mt-3 d-block" : ""}`} key={i}>
            //     {ref}
            // </span> 
            <h6 key={i}>
                {ref}
            </h6> 
        ))
    }

    const getReferences = () => {
    return referenceDetails.map((ref, i) => (
        <div className="my-5 my-lg-0 text-center d-flex px-0 px-md-2 px-xl-3 reference-card" key={i}>
            <div className='profile position-relative d-flex flex-wrap align-content-center justify-content-center'>
                {ref.img && 
                    <img
                        src={imagesImport[ref.img]}
                        alt={ref.name}
                        className='user'/>}
                <blockquote>{mapQuoteParagraphs(ref.quoteParagraphs)}</blockquote>
                <div>
                    <h4 className='ref-name fw-bold'>{ref.name}</h4>
                    <h5 className='ref-role'>{ref.role}</h5>
                </div>
            </div>
        </div>
    ));
    };

    return (
        <div className="pt-5 dark-section" id='References'>
            <div className="pb-lg-5 container position-relative">
                <div className='text-white-50 fw-bold section-title section-title-sm'>
                    <span>REFERENCES</span>
                </div>
            </div>
            <section className='testimonials container pb-5'>
                    <Carousel show={3}>
                        {getReferences()}
                    </Carousel>
            </section>
        </div>
    )
}