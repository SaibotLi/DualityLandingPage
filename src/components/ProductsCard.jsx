const ProductsCard = ({ imgURL, name }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full items-center">
      <div className="w-[300px] h-[300px] max-sm:w-[200px] max-sm:h-[200px] overflow-hidden">
        <img src={imgURL} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold text-center">
        {name}
      </h3>
    </div>
  );
};

export default ProductsCard;
