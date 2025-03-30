import React from "react";
import Image from "next/image";

export const Card = () => {
	return (
		<div>
			<Image
				src='/item_sample.png' // 画像のパス（publicフォルダ内の場合）
				alt='説明文' // アクセシビリティのための代替テキスト
				width={130} // 画像の幅（ピクセル）
				height={160} // 画像の高さ（ピクセル）
			/>
			<p style={{ fontSize: "10px", fontWeight: "bold" }}>BRAND</p>
			<p style={{ fontSize: "10px", fontWeight: "normal" }}>category</p>
			<p style={{ fontSize: "14px", fontWeight: "bold" ,color: "#FF5E2A"}}>￥1,980</p>
		</div>
	);
};
