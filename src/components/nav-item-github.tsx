import { Button } from "@/components/ui/button"
import { GitHubIcon } from "@/components/icons"
import { SOCIAL } from "@/features/portfolio/data/social-links"

export function NavItemGitHub() {
  return (
    <Button asChild variant="ghost" size="icon-sm" className="border-none">
      <a
        href={SOCIAL.github.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile"
        title="GitHub profile"
      >
        <GitHubIcon aria-hidden />
      </a>
    </Button>
  )
}
