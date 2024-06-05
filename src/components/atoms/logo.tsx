import Image from "next/image";

export function Logo() {
  return (
    <Image src="/todo-app-logo.svg" alt="logo" width={100} height={32} />
  )
}
