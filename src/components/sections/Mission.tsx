import { Container, Section, Typography } from '@/components/common'
import { missionContent } from '@/data/missionContent'
import type { MissionContent } from '@/types'

interface MissionProps {
  content?: MissionContent
}

function Mission({ content = missionContent }: MissionProps) {
  return (
    <Section theme="light" size="md">
      <Container size="narrow" className="flex flex-col items-center gap-6 text-center">
        <Typography
          variant="h2"
          className=""
        >
          {content.title}
        </Typography>
        {content.paragraphs.map((para, i) => (
          <Typography key={i} variant="bodyLarge" >
            {para}
          </Typography>
        ))}
      </Container>
    </Section>
  )
}

export default Mission
