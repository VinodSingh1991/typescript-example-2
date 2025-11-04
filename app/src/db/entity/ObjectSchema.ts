
export class ObjectSchema {
    objectId: string;
    objectName: string;
    objectDescription: string;
    objectIcon: string;
    objectColor: string;
    urlPath?: string;
    orignalSlug?: string;
    slug: string;
    count: string

    constructor(
        objectId: string,
        objectName: string,
        slug: string,
        objectDescription?: string,
        objectIcon?: string,
        objectColor?: string,
        count?: string
    ) {
        this.objectId = objectId || "";
        this.objectName = objectName || "";
        this.objectDescription = objectDescription || "";
        this.objectIcon = objectIcon || "";
        this.objectColor = objectColor || "";
        this.urlPath = `/${slug}` || "";
        this.orignalSlug = slug || "";
        this.slug = slug || "";
        this.count = count || "0";
    }
}