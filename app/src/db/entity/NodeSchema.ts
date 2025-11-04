
export class NodeSchema {
    id: string;
    name: string;
    description: string;
    slug: string;
    categorySlug: string;
    urlPath?: string;

    constructor(
        id: string,
        name: string,
        slug: string,
        categorySlug: string,
        description: string
    ) {
        this.id = id;
        this.name = name;
        this.slug = slug;
        this.categorySlug = categorySlug;
        this.urlPath = `/${categorySlug}/${slug}` || "";
        this.description = description;
    }
}