import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from 'lucide-react'
import { Card, 
    CardTitle, 
    CardHeader,
    CardContent,
    CardDescription,
    CardFooter
} from '../ui/card'
import { Button } from '../ui/button'
import { GitHubLogoIcon, GlobeIcon } from '@radix-ui/react-icons'
import data from "../data.json"


const Project = () => {
  return (
    <section
        id="project"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
    >
      <h2 className="font-bold text-3xl md:text-5xl mb-12 px-6">My Projects</h2>
        <div className="grid grid-cols-1 gap-4 lg:gap-6 px-6">
          {data.projects.map((project) => (
            <Card key={project.title} className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/3 p-2 flex items-center">
                <Image
                  src={project.cover}
                  alt="Project 1"
                  height={200}
                  width={300}
                  className="rounded-md object-cover"
                />
              </div>

              <div className="w-full lg:w-2/3">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <div className="flex space-x-3">
                    <Link
                      target="_blank"
                      href={project.live_url}
                      prefetch={false}
                    >
                      <Button size="sm">
                        <GlobeIcon className="h-3 w-3 mr-2" />
                        Live Demo
                      </Button>
                    </Link>
                    <Link
                      target="_blank"
                      href={project.code_repo_url}
                      prefetch={false}
                    >
                      <Button size="sm" variant="outline">
                        <GitHubLogoIcon className="h-3 w-3 mr-2" />
                        Open Repository
                      </Button>
                    </Link>
                  </div>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
    </section>
  )
}

export default Project