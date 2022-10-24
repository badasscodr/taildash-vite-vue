interface ILinks {
  id: number
  name: string
  icon: string
  //   to: string
}
type TLinks = ILinks[]

interface IMenu {
  id: number
  title: string
  links: TLinks
}
type TMenu = IMenu[]

interface IChatData {
  id: number
  image: string
  message: string
  desc: string
  time: string
}
type TChatData = IChatData[]

interface IProfileData {
  id: number
  icon: string
  title: string
  desc: string
  iconColor: string
  iconBg: string
}
type TProfileData = IProfileData[]

interface ICartData {
  id: number
  image: string
  name: string
  category: string
  price: string
}
type TCartData = ICartData[]
