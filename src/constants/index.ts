interface Sizes {
  deskScale: number
  deskPosition: [number, number, number]
  cubePosition: [number, number, number]
  reactLogoPosition: [number, number, number]
  ringPosition: [number, number, number]
  targetPosition: [number, number, number]
}

export interface WorkExperience {
  id: number
  name: string
  pos: string
  duration: string
  title: string
  icon: string
}

export const calculateSizes = (
  isSmall: boolean,
  isMobile: boolean,
  isTablet: boolean
): Sizes => {
  return {
    deskScale: isSmall ? 0.07 : isMobile ? 0.08 : 0.085,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
        ? [5, -5, 0]
        : isTablet
          ? [5, -5, 0]
          : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
        ? [5, 4, 0]
        : isTablet
          ? [5, 4, 0]
          : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
        ? [-10, 10, 0]
        : isTablet
          ? [-12, 10, 0]
          : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
        ? [-9, -10, -10]
        : isTablet
          ? [-11, -7, -10]
          : [-13, -13, -10],
  }
}

export const personalData = {
  name: 'Wesley Ribas',
  profile: '/profile.png',
  designation: 'Desenvolvedor Full Stack',
  email: 'wesleyribas2015@gmail.com',
  phone: '+5531973219539',
  address: 'Minas Gerais, Brasil ',
  github: 'https://github.com/WesleyR10',
  linkedIn: 'https://www.linkedin.com/in/wesley-ribas-4996ba173/',
  devUsername: 'WesleyR10',
  resume:
    'https://drive.google.com/file/d/1pxnfaBHIP5S1fDuBmgBPDskRn-jLnpgn/view?usp=sharing',
}

export const workExperiences: WorkExperience[] = [
  {
    id: 1,
    name: 'Mdsystem Web',
    pos: 'Desenvolvedor Front-End',
    duration: '2024 - Present',
    title:
      'Desenvolvimento de interfaces de usuário responsivas utilizando React, Sass, Wordpress, Php entre outros. Integração para o cliente através do Wordpress Admin.',
    icon: '/workspace/Mdsysteam.jpg',
  },
  {
    id: 2,
    name: 'Corabyte',
    pos: 'Desenvolvedor Front-End',
    duration: '2024 - Present',
    title:
      "Desenvolvimento de interfaces inovadoras utilizando Next.js, TailwindCSS, Typescript entre outros. Integração com API's externas e desenvolvimento de novas funcionalidades.",
    icon: '/workspace/Corabyte.png',
  },
]
