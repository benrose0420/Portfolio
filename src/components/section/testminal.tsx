import React from 'react'
import Image from 'next/image'
import { Card } from '../ui/card'
import { Avatar } from '@radix-ui/react-avatar'

import data from "../data.json"
const Testminal = () => {
  return (
    <section
        id="testimonials"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
      >
        <h2 className="font-bold text-3xl md:text-5xl mb-12 px-6">Testimonials</h2>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 px-7">
          {data.testimonials.map((t) => (
            <Card className="p-6 text-left" key={t.id}>
              <blockquote className="font-medium lg:text-og">
                &ldquo;{t.feedback}.&rdquo;
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <Avatar>
                  <Image
                    height={50}
                    width={50}
                    alt="testimonial avatar"
                    src={t.avatar}
                  />
                </Avatar>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {t.title} @ {t.company}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
  )
}

export default Testminal