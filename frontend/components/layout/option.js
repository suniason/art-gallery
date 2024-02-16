import Link from 'next/link'

const LayoutOption = ({ name, path }) => {
  return (
    <li className="font-semibold text-md px-4 py-2">
      <Link href={path}>{name}</Link>
    </li>
  )
}

export default LayoutOption
