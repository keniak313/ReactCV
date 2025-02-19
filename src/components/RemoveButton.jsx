import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function RemoveButton({ onClick}) {
  return (
    <button className="remove" onClick={onClick}>
      <FontAwesomeIcon icon={faTrash} />
    </button>
  );
}
