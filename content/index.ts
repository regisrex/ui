import CCProjImage from '@/assets/images/community-corner-image.jpg'
import BimLauncherProjImage from '@/assets/images/bimlauncher-redesign-image.jpg'
import KuriousLearnImage from "@/assets/images/kurious-learn-image.jpg"
import KoraRedesignImage from "@/assets/images/kora-jobportal-redesign-image.jpg"
import FloraFarmSuiteImage from "@/assets/images/flora-farmsuite-design.jpg"
import { StaticImageData } from 'next/image'

export interface IPProject { 
    image : StaticImageData,
    title : string,
    link : string,
}


export const projects : IPProject[] = [
    {
        image : CCProjImage,
        title : "Community Corner",
        link : "https://www.figma.com/file/r2vXGAml9Tla7HFaYCA8gs/Community-corner?type=design&mode=design&t=ai3orIfsAIDxPYdW-1"
    },
    {
        image : KuriousLearnImage,
        title : "Kurious Learn design",
        link : "https://www.figma.com/file/oca5pDXEDcMdGZg4UopIX7/Kurious-Learn-Organized-(Copy)?type=design&node-id=0%3A1&mode=design&t=0b1LEaj3eKoe9uNl-1"
    },
    {
        image : BimLauncherProjImage,
        title : "BimLauncher redesign",
        link : "https://www.figma.com/file/Uq9LeMmLDlh0DfIraSHNGp/Bimlauncher-(Copy)?type=design&t=JjEbxgIZy7vTGLfS-6"
    },
    {
        image : KoraRedesignImage,
        title : "Kora Jobportal Redesign",
        link : "https://www.figma.com/file/CDwnQi0BVIHnQugc6ffGf6/Kora-Jobportal-%5B-For-Behance-%5D?type=design&node-id=0%3A1&mode=design&t=HxiC8gWftH3E9lQO-1"
    },
    {
        image : FloraFarmSuiteImage,
        title : "Flora Farmsuite design",
        link : "https://www.figma.com/file/dJ3oFEsD1rzyAruEfXSot7/Flora---farmsuite.?type=design&mode=design&t=0b1LEaj3eKoe9uNl-1"
    },
]