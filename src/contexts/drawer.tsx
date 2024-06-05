"use client"

import { type ReactNode, createContext, useState, useContext } from "react";

type ContextData = {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
};

const context = createContext({} as ContextData);

export function DrawerProvider({ children }: { children: ReactNode }) {
	const [isOpen, setIsOpen] = useState(false);

	function onOpen() {
		setIsOpen(true);
	}

	function onClose() {
		setIsOpen(false);
	}

	return (
		<context.Provider value={{ isOpen, onClose, onOpen }}>
			{children}
		</context.Provider>
	);
}

export const useDrawer = () => useContext(context);
