import { MenuData } from "@/shared/data/menu.data";
import Link from "next/link";
export const Menu = () => {
    return(
        <menu className="flex justify-center items-center">
            {MenuData.map((item, key) => (
                <ul className="">
                    <li className="">
                        <Link href={item.uri} className="text-xs p-6 text-white justify-center font-medium hover:bg-[#2d2d2d]">{item.label}</Link>
                    </li>
                </ul>
            ))}
        </menu>
    );
}