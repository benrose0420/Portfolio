import React from 'react'
import data from "../data.json"


const Education = () => {
  return (
    <section
        id="education"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
    >
      <div className='flex-col px-7'>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter ">
                Education
            </h1>
            <div className='flex-col mt-6 px-16 space-y-6 grid'>
                {data.education.map((edu) => (
                    <div key={edu.id} className="grid gap-1 relative">
                    <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-2 dark:bg-gray-50" />

                    <h4 className="text-xl font-medium">
                        {edu.degree} @
                    </h4>
                    <h4 className='text-xl'>{edu.institution}</h4>
                    <div className="text-gray-500 dark:text-gray-400">
                        {edu.startDate} - {edu.endDate}
                    </div>
                    <p>{edu.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Education