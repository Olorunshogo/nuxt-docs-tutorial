

import type { Product, ProductInfo } from "~/types/products";

// DATA FETCHING WITH Local Storage
export function useLocalStorageProductsCategories() {
    const { pending, data: productInfo, refresh, error } = useAsyncData<ProductInfo>(
        'productInfo',
        async () => {
            // Check if data is already in localStorage
            const savedData = localStorage.getItem('productInfo');
            const lastFetched = localStorage.getItem('productInfoTimestamp');
            const maxCacheAge = 24 * 60 * 60 * 1000;

            // If data is in localStorage and not expired, use it
            if (savedData && lastFetched && Date.now() - parseInt(lastFetched) < maxCacheAge) {
                // Parse the saved data if it exists
                return JSON.parse(savedData);
            } else {
                // Fetch data from the API if no data is found in localStorage
                const [products, categories] = await Promise.all([
                    $fetch("https://fakestoreapi.com/products"),
                    $fetch("https://fakestoreapi.com/products/categories"),
                ]);
                const productData = {
                    products: products as Product[],
                    categories: categories as string[],
                }

                // Save the fetched data to localStorage for future use
                localStorage.setItem('productInfo', JSON.stringify(productData));

                return productData
            }
        },
        {
            lazy: false,
            transform: (productInfo) => {
                return {
                    categories: productInfo.categories,
                    products: productInfo.products.map((product) => ({
                        id: product.id,
                        title: product.title,
                        image: product.image
                    }))
                }
            }
        }
    );

    const handleRefresh = async (event: Event) => {
        await refresh();
    };

    return {
        pending,
        productInfo,
        error,
        handleRefresh
    };


}