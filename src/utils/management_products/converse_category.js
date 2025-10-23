export const converse_category = (category) => {

    const categories_en = [
        "men's clothing",
        "women's clothing",
        "jewelery",
        "electronics"
    ];

    const categories_es = [
        "Ropa de hombre",
        "Ropa de mujer",
        "Joyería",
        "Electrónica"
    ];

    let final_category = "";

    switch (category) {
        case categories_es[0]:
            final_category = categories_en[0];
            break;
        case categories_es[1]:
            final_category = categories_en[1];
            break;
        case categories_es[2]:
            final_category = categories_en[2];
            break;
        case categories_es[3]:
            final_category = categories_en[3];
            break;

        default:
            return { error: "Categoria no encontrada" }
    }

    return final_category;

};