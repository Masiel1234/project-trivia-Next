"use client";

import { useRouter } from "next/navigation";
import { buttonVariants } from "@/utils/buttons/buttonStyle";
import { ProfileButtonProps } from "@/types/buttons/ButtonProps";

const ProfileButton: React.FC<ProfileButtonProps> = ({ to, onClick, children }) => {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (to) {
      router.push(to);
    }
  };

  return (
    <button className={buttonVariants.profile} onClick={handleClick}>
      {children}
    </button>
  );
};

export default ProfileButton;
