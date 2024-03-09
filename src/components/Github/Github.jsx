import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     fetch("https://api.github.com/users/kiranbchitari")
    //         .then(res => {
    //             if (!res.ok) {
    //                 throw new Error("Failed to fetch data");
    //             }
    //             return res.json();
    //         })
    //         .then(data => {
    //             setData(data);
    //             setLoading(false);
    //         })
    //         .catch(error => {
    //             setError(error.message);
    //             setLoading(false);
    //         });
    // }, []);

    // if (loading) {
    //     return <div className="text-center">Loading...</div>;
    // }

    // if (error) {
    //     return <div className="text-center text-red-500">Error: {error}</div>;
    // }

    return (
        <div className="bg-gray-200 text-gray-800 text-xl text-center p-4">
            {data && (
                <>
                    <div className="font-bold mb-2">GitHub Name: {data.name}</div>
                    <div className="mb-4">GitHub Repos: {data.public_repos}</div>
                    <div>
                        <img
                            src={data.avatar_url}
                            alt="GitHub Avatar"
                            className="rounded-full h-20 w-20 mx-auto"
                        />
                    </div>
                </>
            )}
        </div>
    );
}

export default Github;

export const getGithubUserInfo = async () => {
    const response = await fetch('https://api.github.com/users/kiranbchitari')
    return response.json();
}