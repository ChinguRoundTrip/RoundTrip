'use client'

import { Session } from "next-auth";
import { SessionProvider as Provider } from "next-auth/react"

type Props = {
  children: React.ReactNode;
  session: Session | null;
}

export default function SessionProvider({ children, session }: Props) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

// 'use client'

// import { SessionProvider } from 'next-auth/react'

// export default function SessionProvider({ children }: {
//     children: React.ReactNode
// }) {
//     return (
//         <SessionProvider>
//             {children}
//         </SessionProvider>
//     )
// };
