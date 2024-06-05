import { cn } from "@/lib/utils";

type Props = {
	name?: string;
	value?: string;
	onChange?: (value: string) => void;
	className?: string;
	placeholder?: string;
};

export function Input({
	name,
	value,
	onChange,
	className,
	placeholder,
}: Props) {
	return (
		<input
			name={name}
			value={value}
			onChange={onChange ? ({ target }) => onChange(target.value) : undefined}
			className={cn(
				"flex items-center px-4 h-12 text-slate-200 bg-slate-800 rounded-xl focus:outline-teal-400 focus:shadow-none",
				className,
			)}
			placeholder={placeholder}
		/>
	);
}
