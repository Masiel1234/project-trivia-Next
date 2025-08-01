type InputFieldProps = {
  type: string;
  name?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

export default function InputField({
  type,
  name,
  placeholder,
  value,
  onChange,
  required = false,
}: InputFieldProps) {
  return (
    <div className="mb-4">
      <input
        type={type}
        name={name}
        className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}
