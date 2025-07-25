'use client'

import { LinkButtonProps } from "@/types/buttons/ButtonProps";
import { buttonVariants } from "@/utils/buttons/buttonStyle";
import Link from "next/link";

const LinkButton: React.FC<LinkButtonProps> = ({to,name,variant}) => (
    <Link href={to} className={buttonVariants[variant]}>
      {name}
    </Link>
);
export default LinkButton;