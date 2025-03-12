// import Image from "next/image";

export default function About() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold mb-6">About JobSummary.AI</h1>

                <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-gray-600 mb-8">
                        JobSummary.AI was created to help job seekers save time and improve their chances of landing their dream jobs through AI-powered application tools.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4">Our Mission</h2>
                    <p>
                        We believe that everyone deserves a fair chance at career opportunities. Our mission is to level the playing field in the job application process by providing cutting-edge AI tools that help candidates create professional, compelling job summaries and cover letters regardless of their writing skills or experience level.
                    </p>

                    <div className="my-12 relative h-80 w-full rounded-xl overflow-hidden bg-gray-200 flex items-center justify-center">
                        <p className="text-gray-500">About Image Placeholder</p>
                    </div>

                    <h2 className="text-2xl font-bold mt-12 mb-4">Meet the Developer</h2>
                    <p>
                        JobSummary.AI was founded by a passionate developer who recognized the challenges job seekers face when crafting effective application materials. With a background in both technology and recruitment, our founder set out to create a solution that combines artificial intelligence with expert knowledge of what makes job applications successful.
                    </p>

                    <div className="flex items-center mt-8 mb-12">
                        <div className="mr-6 relative w-[120px] h-[120px] bg-gray-200 rounded-full flex items-center justify-center">
                            <p className="text-gray-500">Avatar</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-1">John Smith</h3>
                            <p className="text-gray-600 mb-2">Founder & Lead Developer</p>
                            <p>Full-stack developer with 8+ years of experience and a passion for AI applications.</p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold mt-12 mb-4">Our Technology</h2>
                    <p>
                        {`JobSummary.AI leverages the power of OpenAI's advanced language models to analyze job descriptions and create tailored, professional content. Our custom algorithms are designed to identify key requirements, skills, and qualifications from job postings and generate relevant summaries and cover letters that highlight your suitability for the role.`}
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4">Privacy & Security</h2>
                    <p>
                        We take your privacy seriously. The job descriptions you submit are used solely for generating your summaries and cover letters and are not stored or used for training our models. Our service is built with security and confidentiality in mind.
                    </p>
                </div>
            </div>
        </div>
    );
}
