'use client'
import { buttonVariants } from "@/utils/buttons/buttonStyle";
import { ProfileButtonProps } from "@/types/buttons/ButtonProps";

const ProfileButton: React.FC<ProfileButtonProps> = ({ onClick, children }) =>{
return (<button className={buttonVariants.profile} onClick={onClick}>
    {children}
  </button>)
};
export default ProfileButton;
