import { HiUser } from "react-icons/hi";
import "./UserMenu.css";

export const UserMenu = ({ name }) => {
  return (
    <div>
      <p>
        <HiUser className="icon" size="112" /> {name}
      </p>
    </div>
  );
};
