import React from 'react';

interface TechStackItem {
  id: number;
  name: string;
  designation: string;
  image: string;
}

const TechStackIcons: React.FC<{ items: TechStackItem[] }> = ({ items }) => {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-4 py-6">
      {items.map((item) => (
        <img
          key={item.id}
          src={item.image}
          alt={item.name}
          title={item.name}
          className="h-14 w-14 rounded-full border-2 border-white bg-white object-contain shadow-md"
        />
      ))}
    </div>
  );
};

export default TechStackIcons; 