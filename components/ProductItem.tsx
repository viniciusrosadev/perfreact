import { memo, useState } from 'react'
import { AddProductToWithListProps } from './AddProductToWishList'
import dynamic from 'next/dynamic'
import lodash from 'lodash'

interface ProductItemProps {
    product: {
        id: number;
        price: number;
        priceFormatted: string;
        title: string;
    }
    onAddToWishList: (id: number) => void
}

const AddProductToWithlist = dynamic<AddProductToWithListProps>(() => {
    return import('./AddProductToWishList').then(mod => mod.AddProductToWithList)
}, {
    // eslint-disable-next-line react/display-name
    loading: () => <span>Carregando...</span>
})

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
    const [isAddingToWishList, setIsAddingToWishList] = useState(false)

    return (
        <div>
            {product.title} - <strong>{product.priceFormatted}</strong>
            <button onClick={() => { setIsAddingToWishList(true) }}>Adicionar aos favoritos</button>

            {isAddingToWishList && (
                <AddProductToWithlist onAddToWithList={() => onAddToWishList(product.id)} onRequestClose={() => setIsAddingToWishList(false)} />
            )}
        </div>
    )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
    return lodash.isEqual(prevProps.product, nextProps.product)
})

/* memo
Pure functional components
renders too often
re-renders with same props
medium to big size
*/