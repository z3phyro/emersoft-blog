interface Props {
  className?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  leading?: JSX.Element;
}
export default function Input({ className, defaultValue, onChange, placeholder, leading }: Props) {
  return (
    <div className={`relative ${className || ""}`}>
      {leading && (
        <span className={`absolute left-3 top-2 transition-color duration-300`}>{leading}</span>
      )}
      <input
        className={`w-full p-2 bg-white rounded outline-0 shadow-md ease-in-out duration-300 text-sm h-[42px] ${
          leading ? "pl-10" : ""
        }`}
        defaultValue={defaultValue}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}
