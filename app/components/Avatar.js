import { auth } from "@/auth"
 
export default async function Avatar() {
  const session = await auth()
 
  if (!session.user) return null
 
  return (
    <div>
     {JSON.stringify(session)}
    </div>
  )
}