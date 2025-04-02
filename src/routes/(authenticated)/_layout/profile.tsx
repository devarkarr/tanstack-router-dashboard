import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(authenticated)/_layout/profile')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(authenticated)/_layout/profile"!</div>
}
