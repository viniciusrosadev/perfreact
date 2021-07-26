import { memo } from 'react'

interface ProductItemProps {
    product: {
        id: number;
        price: number;
        title: string;
    }
    onAddToWishList: (id: number) => void
}

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
    return (
        <div>
            {product.title} - <strong>{product.title}</strong>
            <button onClick={() => onAddToWishList(product.id)}>Add to wishlist</button>
        </div>
    )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product)
})

/* memo
Pure functional components
renders too often
re-renders with same props
medium to big size
*/