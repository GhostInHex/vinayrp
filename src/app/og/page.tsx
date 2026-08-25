import { SiteMark } from "@/components/site-mark"

export default function Page() {
  return (
    <div className="max-w-screen overflow-x-clip">
      <div className="mx-auto flex h-screen flex-col justify-center md:max-w-3xl">
        <SiteMark className="mx-auto h-auto w-2/3 max-w-md" />
      </div>
    </div>
  )
}
