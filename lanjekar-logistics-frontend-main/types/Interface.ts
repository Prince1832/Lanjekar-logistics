
export interface sectionHeadingInterface{
    smalltitle:string,
    title:string,
    titledescription?:string,
    description?:string,
    css?:string

}

export interface ArticleCardinterface{
    banner?:string,
    title?:string,
    readTime?:string,
    slug?:string,
    id?:string,
    description?:string,
    showpara?:string,
    createAt?:string,
    createdby:string
    acticlefor:string,

}
export interface pageHeadinginterface{
    heading:string,
}


export interface OurTeamCardinterface{
    image:string,
    name:string ,
    detail:string,
    bio:string;
}
export interface Frominterface{
    fromcss:string,
    inputparent:string,

}

export interface BlogCardinterface{
    image:string,
    title:string,
    description:string ,
    time:string,
    createdby:string
    slug:string

}

export interface Service {
    _id: string;
    name: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    logo: string;
  }