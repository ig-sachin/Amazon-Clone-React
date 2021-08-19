import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "https://images.unsplash.com/photo-1628615392498-ebbab3eb54d1?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { url: "https://images.unsplash.com/photo-1628620600676-4a3481c08021?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { url: "https://images.unsplash.com/photo-1628617743047-6e92513353b1?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { url: "https://images.unsplash.com/photo-1628557044797-f21a177c37ec?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
];

export const Slider = () => {
    return (
        <div>
            <SimpleImageSlider
                width={896}
                height={504}
                images={images}
            />
        </div>
    );
}

