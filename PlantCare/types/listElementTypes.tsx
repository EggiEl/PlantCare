type ListItem = {
    id: number;
    name: string;
    description: string;
    image_url: string;
};


export type ListProps = {
    data: ListItem[];
    setModalVisible?: (visible: boolean) => void;
    setModalImage?: (imageUrl: string | null) => void;
};