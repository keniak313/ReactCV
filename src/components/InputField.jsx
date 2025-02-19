export default function InputField({
  id,
  label,
  value = "",
  onChange,
  isEdit = true,
  isTextArea = false,
}) {
  return (
    <div className={`inputField ${id}`}>
      <label htmlFor={id}>{label}</label>

      {isEdit ? (
        isTextArea ? (
          <textarea
            id={id}
            title={id}
            name={id}
            onChange={onChange}
            value={value}
          ></textarea>
        ) : (
          <input
            id={id}
            title={id}
            name={id}
            value={value}
            onChange={onChange}
          />
        )
      ) : (
        <p id={id} title={id} name={id}>
          {value}
        </p>
      )}
    </div>
  );
}
