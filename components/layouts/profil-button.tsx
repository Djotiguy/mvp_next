import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

export default function ProfilButton() {
    // user is not connected -> login button
    return (
      <Link href="/login">
        <Button>Login</Button>
      </Link>
    )

    // user is connected -> avatar + menu
}
