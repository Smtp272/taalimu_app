import { Link } from 'react-router-dom'
import "./languageLinkComponent.css"

function LanguageLinkComponent(props) {
    const language_link = `/languages/${props.language_data.ethnic_group}/${props.language_data.dialect}`
    return (
        <div className="lan-l-div">
            <section className="">
                <img src={props.language_data.img_url} alt={`Image of the traditional ${props.language_data.people} people`} >
                </img>
            </section>
            <section className='language-desc'>
                <h1>{props.language_data.dialect}</h1>
                <p>{props.language_data.briefDescription}</p>
                <p>Population: {convert_population(props.language_data.population)}</p>
                <Link  to={language_link} className="l-exp">More...</Link>
            </section>
        </div>
    );
}

LanguageLinkComponent.defaultProps =
{
    language_data: {
        ethnic_group: 'Bantu',
        dialect: "Kikuyu",
        people: "Agikuyu",
        briefDescription: "A group of ",
        img_url: "",
        population: 20000001
    }
}


function convert_population(num) {
    return num.toLocaleString('en-US')
}
export default LanguageLinkComponent;
