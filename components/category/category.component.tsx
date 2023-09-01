import Link from "next/link";

interface Props {
  href: string;
  name: string;
  onClick?: (e: any) => void;
}
export default function Category({ href, name, onClick }: Props) {
  return (
    <Link
      className="p-2 rounded-xl bg-gray-100 text-gray-600 hover:text-blue-400 ease-in-out duration-300"
      href={href}
      onClick={onClick}>
      {name}
    </Link>
  );
}
