'use client'

import { useState, type FormEvent } from 'react'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface EmailSignupProps {
  heading?: string
  placeholder?: string
  buttonLabel?: string
  onSubmit?: (email: string) => void
}

function EmailSignup({
  heading = 'Sign Up to Receive Email Updates!',
  placeholder = 'Enter your email address',
  buttonLabel = 'Sign Up',
  onSubmit,
}: EmailSignupProps) {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit?.(email)
  }

  return (
    <div className="flex w-full flex-col items-start gap-4 md:items-center">
      <h3 className="m-0 max-w-65 font-helvetica text-2xl font-bold leading-7 tracking-[-1.2px] text-foreground md:max-w-none md:text-[28px] md:leading-7.5 md:tracking-[-1.68px]">
        {heading}
      </h3>

      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-2.5 md:max-w-md md:flex-row md:gap-0 md:items-stretch md:border md:border-foreground md:bg-surface md:focus-within:ring-2 md:focus-within:ring-gold"
      >
        <Input
          type="email"
          placeholder={placeholder}
          aria-label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="h-12.5 w-full rounded-md border border-foreground bg-surface text-[16px] focus-visible:ring-0 md:h-11 md:flex-1 md:rounded-none md:border-0"
        />
        <Button
          type="submit"
          variant="default"
          className="h-12.5 w-34.75 rounded-md text-[16px] md:h-11 md:w-auto md:rounded-none"
        >
          {buttonLabel}
        </Button>
      </form>
    </div>
  )
}

export default EmailSignup
