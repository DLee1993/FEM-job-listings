// var fullList = [1,2,3,4],
//     array of selected tags = [2,4],
//     filteredLists = arr1.filter(item => arr2.includes(item));
// console.log(res);
import data from "../data.json";
import Job from "./Job";
const JobListings = () => {
    return (
        <main>
            <ul>
                {data.map((job, index) => (
                    <Job job={job} key={index}/>
                ))}
            </ul>
        </main>
    );
};

export default JobListings;
