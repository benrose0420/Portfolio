import React from 'react'
import Link from 'next/link'
import data from "../data.json"

const Experience = () => {
  return (
    <section
        id="experience"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
    >
        <div className='flex-col px-7'>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter ">
                Work Experience
            </h1>
            <div className='flex-col mt-6 px-16 space-y-6 grid'>
                {data.workExperience.map((exp) => (
                    <div key={exp.id} className="grid gap-1 relative">
                    <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-2 dark:bg-gray-50" />

                    <h4 className="text-xl font-medium">
                        {exp.role} @
                        <Link
                        href={exp.companyWebsite}
                        target="_blank"
                        className="ml-2 text-primary"
                        >
                        {exp.company}
                        </Link>
                    </h4>
                    <div className="text-gray-500 dark:text-gray-400">
                        {exp.startDate} - {exp.endDate}
                    </div>
                    <div className="mt-2">
                        <h6 className="font-medium">Key Responsibilities:</h6>
                        <ul className="text-gray-500 text-sm list-disc pl-4">
                        {exp.keyResponsibilities.map((resp) => (
                            <li key={resp}>{resp}</li>
                        ))}
                        </ul>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Experience