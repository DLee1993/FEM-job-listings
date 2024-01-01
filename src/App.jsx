import Header from "./components/Header";
import JobListings from "./components/JobListings";
const App = () => {
    return (
        <>
            <Header />
            <h1 className="text-4xl font-bold text-center hidden">Job Listings</h1>
            <JobListings />
        </>
    );
};

export default App;
