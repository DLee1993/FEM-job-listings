import PropTypes from "prop-types";
import Pill from "./Pill";

const Job = ({ job, setTags, id }) => {
    const {
        company,
        new: recentListing,
        logo,
        featured,
        position,
        role,
        level,
        postedAt,
        contract,
        location,
        languages,
        tools,
    } = job;

    const addTag = (e) => {
        setTags((prevArray) =>
            prevArray.includes(e.target.innerHTML)
                ? [...prevArray]
                : [...prevArray, e.target.innerHTML]
        );
    };

    return (
        <li
            className={`${
                featured ? "border-l-4 border-primary-DarkCyan" : ""
            } relative w-[95%] max-w-[500px] md:max-w-[1000px] h-72 md:h-28 bg-white my-12 md:my-4 mx-auto rounded md:px-6 py-6 md:py-0 flex justify-around md:justify-between items-start md:items-center flex-col md:flex-row`}
        >
            <section
                id={`job_listing-${id}`}
                className="w-[90%] md:w-auto mx-auto md:mx-0 mt-4 md:mt-0"
            >
                <h2 className="hidden">Job Listing</h2>
                <article
                    id={`job_details-${id}`}
                    className="flex justify-center items-start md:items-center flex-col md:flex-row"
                >
                    <figure
                        id={`company_logo-${id}`}
                        className="mr-4 absolute top-[-25px] md:relative md:top-0"
                    >
                        <img src={logo} alt="company logo" className="w-12 md:w-16 h-12 md:h-16" />
                    </figure>
                    <article id={`job_text-${id}`}>
                        <h2>Job Description</h2>
                        <section
                            className={`${
                                recentListing && featured
                                    ? "flex justify-between items-center"
                                    : "flex justify-netween items-center"
                            }`}
                        >
                            <h3 className="hidden">Company</h3>
                            <p
                                id={`company_name-${id}`}
                                className="mr-2 text-primary-DarkCyan font-bold"
                            >
                                {company}
                            </p>
                            <aside className="flex ml-2" aria-label={`job_label-${id}`}>
                                {recentListing ? <Pill title="new!" /> : null}
                                {featured ? <Pill title="featured" /> : null}
                            </aside>
                        </section>
                        <h2 className="text-lg font-bold my-1 cursor-pointer w-fit">{position}</h2>
                        <ul className="flex items-center text-neutral-darkGrayCyan">
                            <li>{postedAt}</li>
                            <li>
                                <div className="w-1 h-1 rounded-full bg-neutral-darkGrayCyan mx-2"></div>
                            </li>
                            <li>{contract}</li>
                            <li>
                                <div className="w-1 h-1 rounded-full bg-neutral-darkGrayCyan mx-2"></div>
                            </li>
                            <li>{location}</li>
                        </ul>
                    </article>
                </article>
            </section>
            <section
                id={`job_tags-${id}`}
                className="w-[90%] md:w-auto mx-auto border-t-[1px] border-neutral-darkGrayCyan pt-4 md:pt-0 md:border-t-0 md:mx-0"
            >
                <h2 className="hidden">Job Tags</h2>
                <ul className="flex justify-start items-center flex-wrap md:justify-center md:w-auto">
                    <li className="tag" onClick={addTag}>
                        {role}
                    </li>
                    <li className="tag" onClick={addTag}>
                        {level}
                    </li>
                    {languages.map((lang, index) => (
                        <li key={index} className="tag" onClick={addTag}>
                            {lang}
                        </li>
                    ))}
                    {tools?.map((tools, index) => (
                        <li key={index} className="tag" onClick={addTag}>
                            {tools}
                        </li>
                    ))}
                </ul>
            </section>
        </li>
    );
};

Job.propTypes = {
    job: PropTypes.object,
    setTags: PropTypes.func,
    id: PropTypes.number,
};

export default Job;
