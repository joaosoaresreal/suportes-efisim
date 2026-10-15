import anydeskLogo from '@/assets/anydesk_logo.webp'
import efisimSuporteLogo from '@/assets/efisim-suporte_logo.webp'
import rustdeskLogo from '@/assets/rustdesk_logo.webp'
import teamviewerLogo from '@/assets/teamviwer_logo.webp'

export interface DownloadTool {
  id: string
  name: string
  logo: string
  file: string
  size: string
}

export const downloads: DownloadTool[] = [
  {
    id: 'anydesk',
    name: 'AnyDesk',
    logo: anydeskLogo,
    file: 'anydesk.exe',
    size: '3,7 MB',
  },
  {
    id: 'rustdesk',
    name: 'RustDesk',
    logo: rustdeskLogo,
    file: 'rustdesk-jb.exe',
    size: '19,1 MB',
  },
  {
    id: 'efisim-suporte',
    name: 'Efisim Suporte',
    logo: efisimSuporteLogo,
    file: 'efisim-suporte.exe',
    size: '27,9 MB',
  },
  {
    id: 'teamviewer',
    name: 'TeamViewer',
    logo: teamviewerLogo,
    file: 'teamviwer_qs.exe',
    size: '35,5 MB',
  },
]
