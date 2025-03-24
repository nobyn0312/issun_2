import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// カスタムカラー用のユーティリティ
export function getCustomColor(color: string) {
const colorMap = {
	"brand-primary": "bg-[#FF5E2A] text-white",
	"brand-secondary": "bg-[#333333] text-white",
	"brand-outline": "border border-[#FF5E2A] bg-[#FFFFFF] text-[#FF5E2A]",
};
  return colorMap[color as keyof typeof colorMap] || "";
}