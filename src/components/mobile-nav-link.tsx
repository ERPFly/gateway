import { PopoverButton } from '@headlessui/react'
import type { ReactNode } from 'react'

type TLinkProps = {
  href: string
  className?: string
  children: ReactNode
  target?: HTMLAnchorElement['target']
}

const Link = ({ children, className, href, target }: TLinkProps) => {
  return (
    <a href={href} target={target} className={className}>{children}</a>
  )
}

type TMobileNavLinkProps = {
  href: string
  children: React.ReactNode
}

export const MobileNavLink = ({
  href,
  children,
}: TMobileNavLinkProps) => {
  return (
    <PopoverButton as={Link} href={href} className="block w-full p-2">
      {children}
    </PopoverButton>
  )
}