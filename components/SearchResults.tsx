import { useMemo } from "react"
import { ProductItem } from "./ProductItem"

interface SearchResultsProps {
    results: Array<{ id: number, price: number, title: string }>
    onAddToWishList: (id: number) => void
}


export function SearchResults({ results, onAddToWishList }: SearchResultsProps) {
    const totalPrice = useMemo(() => {
        return results.reduce((total, product) => {
            return total + product.price
        }, 0)
    }, [results])

    return (
        <div>
            <h2>{totalPrice}</h2>
            {results.map(product => {
                return (
                    <ProductItem key={product.id} product={product} onAddToWishList={onAddToWishList} />
                )
            })}
        </div>
    )
}


/*
useMemo/usecallBack
1. Calculos pesados
2. Igualdadade referencial (quando a gente repassa aquela informação a um componente filho)
3. 
*/