const Input = ({
  type,
  placeholder,
  value,
  onChange,
  className,
  name,
  min,
  max,
  step,
}: {
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  name?: string;
  min?: string;
  max?: string;
  step?: string;
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full h-10 rounded-lg p-2 bg-gray-700/50 ${className}`}
      name={name}
      min={min}
      max={max}
      step={step}
    />
  );
};

export default Input;
