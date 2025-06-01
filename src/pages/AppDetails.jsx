import { useEffect, useState } from "react";
import appimg from "../assets/appimg.jpg";

const AppDetails = () => {
    const [appData, setAppData] = useState(null);

    useEffect(() => {
        fetch("/app.json")
            .then(res => res.json())
            .then(data => setAppData(data))
            .catch(err => console.error("Failed to load app data:", err));
    }, []);

    if (!appData) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    return (
        <div className="px-[7%] w-full mx-auto mt-25">
            <img
                className="w-full max-h-[80vh] object-contain rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                src={appimg}
                alt="Nagad App"
            />

            <h1 className="text-3xl font-bold text-center my-10">
                {appData.title}: Open Nagad Account
            </h1>

            <p className="text-lg mb-6">{appData.description}</p>

            <ol className="list-decimal pl-6 space-y-2 mb-6">
                {appData.steps.map((step, index) => (
                    <li key={index} className="hover:underline">{step}</li>
                ))}
            </ol>

            <p className="font-semibold text-green-600 mb-6">{appData.finalNote}</p>

            <h2 className="text-2xl font-bold mb-2">{appData.announcement}</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
                {appData.guidelines.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <h2 className="text-2xl font-bold mb-2">Terms and Conditions</h2>
            <ul className="list-disc pl-6 space-y-2">
                {appData.termsAndConditions.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default AppDetails;
