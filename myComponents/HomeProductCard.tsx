type ProductCardProps = {
  image: string;
  title: string;
  price: string;
};

export default function HomeProductCard({
  image,
  title,
  price,
}: ProductCardProps) {
  return (
    <div className="group bg-neutral-900 rounded-xl overflow-hidden border border-yellow-500/10 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10">
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col items-center text-center">
        <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>

        <p className="text-yellow-400 font-bold text-md">{price}</p>
      </div>
    </div>
  );
}
