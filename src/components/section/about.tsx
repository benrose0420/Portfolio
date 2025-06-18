import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
//   GlobeIcon,
} from "@radix-ui/react-icons";

import data from "../data.json"
const About = () => {
  return (
    <section
        id="home"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
    >
        <div className='flex flex-col lg:flex-row items-center justify-center gap-8'>
            <div className='mx-auto w-1/3 lg:w-1/3 '>
                <Image 
                    src="/assets/profile.jpg"
                    width={280}
                    height={280}
                    alt='avatar'
                    className='mx-auto blur-3xl aspect-square overflow-hidden object-cover object-center rounded-full'
                />
            </div>
            <div className="w-full lg:w-2/3 px-7 space-y-4">
                    <div className="space-y-2">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter ">
                            Hey 👋, I&apos;m {data.personalInfo.name}
                        </h1>
                        <h3 className='px-16 lg:px-4 mt-6'>This is my first change about this project.</h3>
                    </div>
                    <p className="px-16 lg:px-4 max-w-[600px] lg:text-lg text-gray-500 dark:text-gray-400">
                        {data.personalInfo.bio}
                    </p>
                <div className="space-x-4 px-16 lg:px-4">
                <Link
                    target="_blank"
                    href={data.contactInfo.github}
                    prefetch={false}
                >
                    <Button variant="secondary" size="icon">
                    <GitHubLogoIcon className="h-4 w-4" />
                    {/* <h4>This is a button.</h4> */}
                    </Button>
                </Link>
                <Link
                    target="_blank"
                    href={data.contactInfo.twitter}
                    prefetch={false}
                >
                    <Button variant="secondary" size="icon">
                    <TwitterLogoIcon className="h-4 w-4" />
                    </Button>
                </Link>

                <Link
                    target="_blank"
                    href={data.contactInfo.linkedin}
                    prefetch={false}
                >
                    <Button variant="secondary" size="icon">
                    <LinkedInLogoIcon className="h-4 w-4" />
                    </Button>
                </Link>

                <Link href={`mailto:${data.contactInfo.email}`}>
                    <Button variant="secondary" size="icon">
                    <EnvelopeClosedIcon className="h-4 w-4" />
                    </Button>
                </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About