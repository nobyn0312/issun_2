"use client";

import React, { useEffect, useState } from "react";

type Item = {
  id: number;
  imageUrl: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  createdAt: string;
};

export const ItemList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(
          "https://rails-ec-rest-api.onrender.com/api/v1/members/items?page=1"
        );
        if (!res.ok) throw new Error("データの取得に失敗しました");
        const data = await res.json();
        setItems(data.items);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) return <p>読み込み中...</p>;
  if (error) return <p>エラー: {error}</p>;

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {items.map(item => (
        <div key={item.id} className="border p-4 rounded shadow">
          <img
            src={
              item.imageUrl || "https://via.placeholder.com/150?text=No+Image"
            }
            alt={item.name}
            className="w-full h-40 object-cover mb-2"
          />
          <h2 className="text-lg font-semibold">{item.name}</h2>
          <p className="text-sm text-gray-600">{item.description}</p>
          <p className="mt-2 text-green-700 font-bold">
            ¥{item.price.toLocaleString()}
          </p>
          <p className="text-sm text-gray-500">在庫: {item.stock}</p>
        </div>
      ))}
    </div>
  );
};
