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
    
    export function useProductsCategories() {
        const { pending, data: productInfo, refresh, error } = useAsyncData<ProductInfo>(
            'productInfo', 
            async () => {
                const [products, categories] = await Promise.all([
                    $fetch("https://fakestoreapi.com/products"),
                    $fetch("https://fakestoreapi.com/products/categories"),
                ]);
                
                return {
                    products: products as Product[], 
                    categories: categories as string[],
                };      
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
        )

        const handleRefresh = async (event: Event) => {
            await refresh();
        };

        return {
            pending,
            productInfo,
            error,
            handleRefresh
        }
    }
    
     
        

    