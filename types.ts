export type Funcs = {
    id:number;
    name:string;
    slug:string;
}

export type Service = {
    id:number;
    name:string;
    slug:string;
}

export type Post = {
    id: number;
    category: string;
    title: string;
    image: string;
    caption: string;
    date: string | Date;
    minutesToRead: number;
    author: string;
    nbViews: number;
    nbComments: number;
    slug: string;
    content?: string;
}

export type Reservations = {
    id: number;
    name: string;
    email: string;
    phone: number;
    date: string | Date;
    time: number | string;
    nbPeople: number;
    message: string;
}