// import { LinearEye, LinearEyeSlash } from "@/public/assets/icons";

interface Props {
  onClick: () => void;
  isVisible: boolean;
}

const PasswordToggle = ({ onClick }: Props) => {
  return (
    <button
      className="flex items-center justify-center"
      onClick={onClick}
      type="button"
    >
      {/* {isVisible ? <LinearEye /> : <LinearEyeSlash />} */}
    </button>
  );
};

export default PasswordToggle;
