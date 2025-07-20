function ProductList({ products, query }) {
  const highlightMatch = (text, query) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, '<span class="bg-yellow-200">$1</span>');
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-6">
      {query && products.length === 0 ? (
        <div className="text-center">
          <p className="text-red-500 text-lg">No results found for "{query}"</p>
          <p className="text-gray-500">Try a different search term.</p>
        </div>
      ) : (
        <>
          <p className="text-gray-600 mb-4">
            {products.length} item{products.length !== 1 ? "s" : ""} found
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3
                  className="text-lg font-semibold"
                  dangerouslySetInnerHTML={{
                    __html: highlightMatch(product.name, query),
                  }}
                />
                <p className="text-gray-600">{product.description}</p>
                <p className="text-blue-500 font-bold">${product.price}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ProductList;
