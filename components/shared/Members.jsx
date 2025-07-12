import teamMembers from '@/data/team'

import Image from 'next/image'
import Link from 'next/link'
import FadeUpOneByOneAnimation from '../animations/FadeUpOneByOneAnimation'

const Members = () => {
  const { teamData } = teamMembers
  return (
    <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
      {teamData.slice(0, 3).map((member, i) => (
        <FadeUpOneByOneAnimation i={i} className="group/image" key={member.id}>
          <div className="mb-6 rounded-medium bg-white p-2.5 dark:bg-dark-200">
            <div className=" overflow-hidden rounded bg-gray-100 dark:bg-[#30302F]">
              <Image
                src={member.image}
                alt="team member image"
                className="h-auto w-auto grayscale transition-all duration-300 group-hover/image:grayscale-0 max-md:w-full"
                width={389}
                height={250}
              />
            </div>
          </div>
          <div className="text-center">
            <Link href={`/teams/${member.id}`}>
              <h3 className="mb-2">{member.name}</h3>
            </Link>
            <p className="mb-6 text-sm font-medium leading-[1.5]">{member.designation}</p>
          </div>
        </FadeUpOneByOneAnimation>
      ))}
    </div>
  )
}

export default Members
