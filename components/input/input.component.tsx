interface Props {
  className?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  leading?: JSX.Element;
}
export default function Input({ className, defaultValue, onChange, placeholder, leading }: Props) {
  return (
    <div className={`relative group ${className || ""}`}>
      {leading && (
        <span className={`absolute left-3 top-2 transition-color duration-300`}>{leading}</span>
      )}
      <input
        className={`w-full p-2 bg-white focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-400  rounded-lg outline-0 shadow-md text-sm h-[42px] ${
          leading ? "pl-10" : ""
        }`}
        defaultValue={defaultValue}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}
