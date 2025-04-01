import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// カスタムカラー用のユーティリティ
export function getCustomColor(color: string) {
const colorMap = {
	"brand-primary": "bg-orange-500 text-white",
	"brand-secondary": "bg-[#333333] text-white",
	"brand-outline": "border border-orange-500 bg-white text-orange-500",
};
  return colorMap[color as keyof typeof colorMap] || "";
}