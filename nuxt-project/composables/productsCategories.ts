    import type { Product, ProductInfo } from "~/types/products";

    
    // const { pending, data: products, refresh } = useFetch(
    //     'https://fakestoreapi.com/products', 
    //     {
    //         lazy: false,
    //         // server: false,
    //         transform: (products) => {
    //             return products.map((product) => ({
    //                 id: product.id,
    //                 title: product.title,
    //                 image: product.image,
    //             }))
    //         }
    //     }
    // );

    // const { pending, data: products } = useFetch(
    //     'https://fakestoreapi.com/products', 
    //     {
    //         lazy: false,
    //         // pick: ["id","image", "title"],
    //     }
    // ); 


    // DATA FETCHING WITHOUT Local Storage
    // export function useProductsCategories() {
    //     const { pending, data: productInfo, refresh, error } = useAsyncData<ProductInfo>(
    //         'productInfo', 
    //         async () => {
    //             const [products, categories] = await Promise.all([
    //                 $fetch("https://fakestoreapi.com/products"),
    //                 $fetch("https://fakestoreapi.com/products/categories"),
    //             ]);
                
    //             return {
    //                 products: products as Product[], 
    //                 categories: categories as string[],
    //             };      
    //         },
    //         {
    //             lazy: false,
    //             transform: (productInfo) => {
    //                 return {
    //                     categories: productInfo.categories,
    //                     products: productInfo.products.map((product) => ({
    //                         id: product.id,
    //                         title: product.title,
    //                         image: product.image
    //                     }))
    //                 }
    //             }
    //         }
    //     )

    //     const handleRefresh = async (event: Event) => {
    //         await refresh();
    //     };

    //     return {
    //         pending,
    //         productInfo,
    //         error,
    //         handleRefresh
    //     }
    // }

    
    // DATA FETCHING WITH Local Storage
    export function useProductsCategories() {
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

    
    
     
        

    