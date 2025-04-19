"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, Clock, ThumbsUp, Sparkles, BarChart } from "lucide-react";
import { motion } from "framer-motion";
import image from '../../public/image.webp'

// Animated Blob Component with enhanced animation
const AnimatedBlob = ({
  className,
  delay = 0,
  scale = true,
  rotate = true
}: {
  className: string,
  delay?: number,
  scale?: boolean,
  rotate?: boolean
}) => {
  
  return (
    <motion.div
      className={`absolute rounded-full blur-[80px] opacity-30 ${className}`}
      animate={{
        x: ["0%", "10%", "-10%", "0%"],
        y: ["0%", "-15%", "10%", "0%"],
        scale: scale ? [1, 1.1, 0.9, 1] : [1, 1, 1, 1],
        rotate: rotate ? [0, 10, -10, 0] : 0,
      }}
      transition={{
        duration: 20,
        delay: delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    />
  );
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with animated gradient and blobs */}
      <section className="animated-gradient bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 relative overflow-hidden">
        {/* Background blobs */}
        <AnimatedBlob className="bg-blue-300 w-[500px] h-[500px] -left-64 -top-64" />
        <AnimatedBlob className="bg-indigo-300 w-[600px] h-[600px] -right-96 top-[10%]" delay={2} />
        <AnimatedBlob className="bg-purple-300 w-[400px] h-[400px] left-[10%] bottom-[5%]" delay={4} />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              className="md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animated-text-gradient bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600">
                AI-Powered Job Application Assistant
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Create professional job summaries and tailored cover letters in seconds.
                Stand out from the competition with AI-enhanced job applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/tool"
                  className="shimmer-gradient bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white font-medium rounded-lg px-8 py-3 flex items-center justify-center transition-all hover:shadow-lg"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="bg-white text-blue-600 border border-blue-200 font-medium rounded-lg px-8 py-3 flex items-center justify-center hover:bg-blue-50 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative h-[400px] w-full rounded-3xl">
                <Image
                  src={image}
                  alt="AI Job Summary Illustration"
                  fill
                  className=" rounded-3xl"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section with blobs */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background blobs for benefits section */}
        <AnimatedBlob className="bg-blue-100 w-[700px] h-[700px] -right-96 -top-64" delay={1} />
        <AnimatedBlob className="bg-indigo-100 w-[500px] h-[500px] -left-64 bottom-0" delay={3} />
        <AnimatedBlob className="bg-purple-100 w-[300px] h-[300px] right-[20%] bottom-[30%]" delay={5} />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose JobSummary.AI?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform provides everything you need to create winning job applications
            </p>
          </div>

          {/* Benefits section cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                {/* Benefit content */}
                {index === 0 && (
                  <>
                    <div className="inline-block p-4 bg-blue-50 rounded-lg mb-4">
                      <Clock className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Save Time</h3>
                    <p className="text-gray-600">
                      Generate professional job summaries and cover letters in seconds, not hours.
                      Focus your energy on preparing for interviews instead.
                    </p>
                  </>
                )}
                {index === 1 && (
                  <>
                    <div className="inline-block p-4 bg-blue-50 rounded-lg mb-4">
                      <ThumbsUp className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Improve Quality</h3>
                    <p className="text-gray-600">
                      Our AI analyzes thousands of successful applications to create
                      perfectly structured and compelling content for your job applications.
                    </p>
                  </>
                )}
                {index === 2 && (
                  <>
                    <div className="inline-block p-4 bg-blue-50 rounded-lg mb-4">
                      <Sparkles className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Customized Content</h3>
                    <p className="text-gray-600">
                      Each summary and cover letter is uniquely tailored to your job description,
                      ensuring relevance and personalization.
                    </p>
                  </>
                )}
                {index === 3 && (
                  <>
                    <div className="inline-block p-4 bg-blue-50 rounded-lg mb-4">
                      <FileText className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Professional Format</h3>
                    <p className="text-gray-600">
                      Get perfectly formatted documents that adhere to industry standards
                      and highlight your most relevant qualifications.
                    </p>
                  </>
                )}
                {index === 4 && (
                  <>
                    <div className="inline-block p-4 bg-blue-50 rounded-lg mb-4">
                      <BarChart className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Increased Success Rate</h3>
                    <p className="text-gray-600">
                      Stand out from other applicants with optimized applications that
                      get noticed by recruiters and ATS systems.
                    </p>
                  </>
                )}
                {index === 5 && (
                  <>
                    <div className="inline-block p-4 bg-blue-50 rounded-lg mb-4">
                      <ArrowRight className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Easy to Use</h3>
                    <p className="text-gray-600">
                      Simply paste in the job description, and our AI does the rest.
                      No complicated tools or design skills needed.
                    </p>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section with subtle gradient animation */}
      <section className="py-20 animated-gradient-fast bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Adding blobs to this section */}
        <AnimatedBlob className="bg-blue-200 w-[600px] h-[600px] -left-96 top-[30%]" delay={2} />
        <AnimatedBlob className="bg-purple-200 w-[500px] h-[500px] right-0 -bottom-64" delay={4} />
        <AnimatedBlob className="bg-indigo-200 w-[400px] h-[400px] right-[40%] -top-32" delay={1} />

        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animated-text-gradient bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 inline-block">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creating perfect job summaries and cover letters has never been easier
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-white flex items-center justify-center text-2xl font-bold mb-6">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Paste Job Description</h3>
              <p className="text-gray-600">
                Copy and paste the job description from any job posting into our tool.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-white flex items-center justify-center text-2xl font-bold mb-6">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">AI Processing</h3>
              <p className="text-gray-600">
                Our advanced AI analyzes the job requirements and creates tailored content.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-white flex items-center justify-center text-2xl font-bold mb-6">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Get Your Results</h3>
              <p className="text-gray-600">
                Receive a professional job summary and cover letter ready to use in your application.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/tool"
              className="shimmer-gradient bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg px-8 py-3 inline-flex items-center justify-center transition-all hover:shadow-lg"
            >
              Try It Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section with animated gradient */}
      <section className="py-20 animated-gradient bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white relative overflow-hidden">
        {/* Adding blobs to CTA section - with different colors that complement the dark background */}
        <AnimatedBlob className="bg-white w-[500px] h-[500px] -left-64 -top-64 opacity-10" delay={3} />
        <AnimatedBlob className="bg-blue-300 w-[700px] h-[700px] right-0 bottom-0 opacity-10" delay={1} />
        <AnimatedBlob className="bg-purple-300 w-[400px] h-[400px] left-[30%] -bottom-32 opacity-10" delay={5} />

        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to transform your job application process?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of job seekers who have improved their applications with JobSummary.AI
          </p>
          <Link
            href="/tool"
            className="bg-white text-blue-600 hover:bg-blue-50 font-medium rounded-lg px-8 py-3 inline-flex items-center justify-center transition-all"
          >
            Get Started For Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
