'use client'
import { buttonVariants } from "@/utils/buttons/buttonStyle"
import { GoArrowLeft } from "react-icons/go"
const ReturnButton: React.FC = () => {
    return(
    <button className={buttonVariants.return} onClick={() => history.back()}>
            <GoArrowLeft className="w-5 h-5" />
          </button>
)}
export default ReturnButton;