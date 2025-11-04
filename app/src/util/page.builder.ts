import { ObjectSchema } from "src/db/entity/ObjectSchema";

export class AuthInfo {
    isAuthenticated: boolean;
    userId?: string;
    roles?: string[];
    [key: string]: any;

    constructor(
        isAuthenticated: boolean,
        userId?: string,
        roles?: string[],
    ) {
        this.isAuthenticated = isAuthenticated;
        this.userId = userId;
        this.roles = roles;
    }
}

class Footer {
    year: number;
    companyName: string;

    constructor(
        year: number,
        companyName: string
    ) {
        this.year = year;
        this.companyName = companyName
    }
}

export class PageDataModel {
    pageType: string;
    pageModel: any;
    title: string;
    content: string;
    metaDescription: string;
    authInfo: AuthInfo;
    objects: ObjectSchema[];
    footer: Footer

    constructor({
        pageType,
        pageModel,
        title,
        content,
        metaDescription,
        authInfo,
        objects
    }: {
        pageType: string;
        pageModel: any;
        title: string;
        content: string;
        metaDescription: string;
        authInfo: AuthInfo;
        footer?: Footer;
        objects: ObjectSchema[];
    }) {
        this.pageType = pageType;
        this.pageModel = pageModel;
        this.title = title;
        this.content = content;
        this.metaDescription = metaDescription;
        this.authInfo = authInfo;
        this.objects = objects;
        this.footer = new Footer(new Date().getFullYear(), "My Company");
    }
}
