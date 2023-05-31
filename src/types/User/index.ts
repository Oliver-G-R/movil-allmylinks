interface UserReggister {
  fullName: string
  nickName: string
  email: string
  password: string
  repeatPassword: string
}

interface Ilink{
    titleLink: string
    link: string
    socialIcon: string
    id: string
}

interface IStateFieldsLinks extends Omit<Ilink, 'id'>{}


interface Iuser{
    createdAt: Date
    email: string
    id: string
    links: Ilink[]
    principalAccount: Ilink | null
    nickName: string
    updatedAt: Date
    fullName:string
    bio: string
    avatar_public_id: string
    avatar_url: string
}
interface IStateFieldsUser {
    nickName: string
    email: string
    fullName: string
    bio: string
    avatar_url: string
}

export type {
    Ilink,
    Iuser,
    IStateFieldsLinks,
    IStateFieldsUser
}


export {
  UserReggister
}