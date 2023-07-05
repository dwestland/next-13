import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { LoginButton, LogoutButton } from './auth'
import { User } from '@/app/user'

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <main>
      <LoginButton />
      <LogoutButton />
      <h2>Server Session</h2>
      <pre>{JSON.stringify(session)}</pre>
      <h2>Client Call</h2>
      <User />
    </main>
  )
}


// import { getServerSession } from 'next-auth'
// import { authOptions } from './api/auth/[...nextauth]/route'
// import { LoginButton, LogoutButton } from './auth'
// import { User } from './user'

// export default async function Home() {
//   const session = await getServerSession(authOptions)

//   return (
//     <main>
//       <LoginButton />
//       <LogoutButton />
//       <h2>Server Session</h2>
//       <pre>{JSON.stringify(session)}</pre>
//       <h2>Client Call</h2>
//       <User />
//     </main>
//   )
// }

