import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function AddButton({onClick}) {
  return (
    <button
      className="add"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faSquarePlus} />
      Add one more
    </button>
  );
}
