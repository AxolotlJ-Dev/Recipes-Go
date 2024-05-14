export function Card({image, title, desc}: {image: string, title: string, desc: string}) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={image}
        alt={title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {desc}
        </p>
      </div>
    </div>
  );
}
