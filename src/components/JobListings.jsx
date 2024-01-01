// var fullList = [1,2,3,4],
//     array of selected tags = [2,4],
//     filteredLists = arr1.filter(item => arr2.includes(item));
// console.log(res);
import { useState } from "react";
import data from "../data.json";
import Job from "./Job";
import Tag from "./Tag";

const JobListings = () => {
    const [tags, setTags] = useState([]);

    const filteredArray = data.filter((j) => {
        if (tags.includes(j.role)) {
            return j;
        } else if (tags.includes(j.level)) {
            return j;
        } else if (j.languages.some((e) => tags.includes(e))) {
            return j;
        } else if (j.tools.some((e) => tags.includes(e))) {
            return j;
        }
    });

    return (
        <main className="relative pt-10 -mt-20">
            <section
                id="filterTags"
                className={
                    tags.length === 0
                        ? "hidden"
                        : "w-[95%] max-w-[500px] md:max-w-[1000px] mx-auto h-fit min-h-[3.5rem] flex justify-between items-center px-6 bg-white"
                }
            >
                <h2 className="hidden" aria-label="job filter">
                    Tags filter
                </h2>
                <section className="max-w-[250px] md:max-w-[75%] flex flex-wrap">
                    <h2 className="hidden" aria-label="filtered tags">
                        Filtered tags
                    </h2>
                    {tags.map((tag, index) => (
                        <Tag tag={tag} key={index} tagList={tags} setTags={setTags} />
                    ))}
                </section>
                <button
                    className="hover:text-primary-DarkCyan hover:underline"
                    onClick={() => setTags([])}
                >
                    Clear
                </button>
            </section>
            <ul className="mt-14">
                {filteredArray.length > 0
                    ? filteredArray.map((job, index) => (
                          <Job job={job} key={index} id={index} setTags={setTags} />
                      ))
                    : data.map((job, index) => (
                          <Job job={job} key={index} id={index} setTags={setTags} />
                      ))}
            </ul>
        </main>
    );
};

export default JobListings;
