'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type Icon } from '@tabler/icons-react';

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroupLabel,
} from '@/components/ui/sidebar';

export function NavMain({
  items,
  navtitle,
}: {
  navtitle: string;
  items: {
    title: string;
    url: string;
    icon?: Icon;
  }[];
}) {
  const pathname = usePathname();

  if (items.length === 0) return null;

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-1">
        <SidebarMenu>
          <SidebarGroupLabel className="font-mono text-[0.68rem] font-normal uppercase tracking-[0.14em] text-sidebar-foreground/55">
            {navtitle}
          </SidebarGroupLabel>

          {items.map((item) => {
            const isActive =
              item.url === '/'
                ? pathname === '/'
                : pathname === item.url || pathname.startsWith(item.url + '/');
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  tooltip={item.title}
                  isActive={isActive}
                  className="rounded-full data-[active=true]:bg-foreground/10 hover:bg-foreground/[0.06]"
                >
                  <Link
                    href={item.url}
                    className="flex items-center gap-2.5 w-full text-sm transition-all duration-200 hover:translate-x-0.5"
                  >
                    {item.icon && (
                      <item.icon
                        className={`size-[18px] shrink-0 transition-colors duration-200 ${
                          isActive ? 'text-sidebar-primary' : ''
                        }`}
                      />
                    )}
                    <span className={isActive ? 'font-medium text-sidebar-foreground' : ''}>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
