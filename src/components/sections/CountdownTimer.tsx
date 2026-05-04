'use client'

import { useEffect, useMemo, useState } from 'react'

import { Container } from '@/components/common'
import { eventDate as defaultEventDate } from '@/data/eventDate'

interface CountdownTimerProps {
  eventDate?: string | Date
}

function getDiffParts(target: number, now: number) {
  const diff = Math.max(0, target - now)
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
  }
}

function CountdownTimer({ eventDate = defaultEventDate }: CountdownTimerProps) {
  const target = useMemo(() => new Date(eventDate).getTime(), [eventDate])
  const [parts, setParts] = useState(() => getDiffParts(target, Date.now()))

  useEffect(() => {
    const id = setInterval(() => {
      setParts(getDiffParts(target, Date.now()))
    }, 30_000)
    return () => clearInterval(id)
  }, [target])

  return (
    <div className="h-22.5 bg-lime text-canvas">
      <Container className="flex h-full items-center justify-center gap-12 text-center md:gap-24 lg:gap-35">
        <Cell label="Days" value={parts.days} />
        <Cell label="Hours" value={parts.hours} />
        <Cell label="Minutes" value={parts.minutes} />
      </Container>
    </div>
  )
}

interface CellProps {
  label: string
  value: number
}

function Cell({ label, value }: CellProps) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-[#242424] text-center font-helvetica text-[15px] font-light leading-8 uppercase">
        {label}
      </span>
      <span className="text-[#242424] text-center font-helvetica text-[40px] font-bold leading-8 tracking-[-0.8px] uppercase">
        {value}
      </span>
    </div>
  )
}

export default CountdownTimer
