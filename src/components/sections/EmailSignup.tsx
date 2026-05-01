import { useState, type FormEvent } from 'react'

import { Typography } from '@/components/common'
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
    <div className="flex w-full flex-col items-center gap-4">
      <Typography variant="h3" align="center">
        {heading}
      </Typography>

      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-md items-stretch border border-foreground bg-surface focus-within:ring-2 focus-within:ring-gold"
      >
        <Input
          type="email"
          placeholder={placeholder}
          aria-label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="h-11 flex-1 rounded-none border-0 focus-visible:ring-0"
        />
        <Button type="submit" variant="default" className="h-11 rounded-none">
          {buttonLabel}
        </Button>
      </form>
    </div>
  )
}

export default EmailSignup
