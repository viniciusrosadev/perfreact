export interface AddProductToWithListProps {
    onAddToWithList: () => void;
    onRequestClose: () => void;
}

export function AddProductToWithList({ onAddToWithList, onRequestClose }: AddProductToWithListProps) {
    return (
        <span>
            Deseja adicionar aos favoritos?
            <button onClick={onAddToWithList}>Sim</button>
            <button onClick={onRequestClose}>Não</button>
        </span>
    )
}