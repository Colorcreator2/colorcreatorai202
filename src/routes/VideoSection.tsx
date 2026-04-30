import { createFileRoute } from '@tanstack/react-router'
import VideoSection from '@/components/VideoSection'

export const Route = createFileRoute('/VideoSection')({
  component: VideoSection,
})