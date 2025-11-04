import { NodeSchema } from "src/db/entity/NodeSchema";
import { ObjectSchema } from "src/db/entity/ObjectSchema";

class ShortAbout {
    title: string;
    content: string;
    boldText: string;
    aboutLink: string;

    constructor(
        content: string,
        boldText: string,
        aboutLink: string
    ) {
        this.title = "About Us";
        this.content = content;
        this.boldText = boldText;
        this.aboutLink = aboutLink;
    }
}

class MostUsedItems {
    title: string;
    icon: string;
    items: NodeSchema[];
    constructor(
        icon: string,
        items: NodeSchema[]
    ) {
        this.title = "Most Used Items";
        this.icon = icon;
        this.items = items;
    }
}

class HomePageBuilderProps {
    totalCount: number;
    lastUsedItems: NodeSchema[];
    shortAbout: ShortAbout;
    mostUsedItems: MostUsedItems;

    constructor(
        totalCount: number,
        lastUsedItems: NodeSchema[],
        shortAbout: ShortAbout,
        mostUsedItems: MostUsedItems
    ) {
        this.totalCount = totalCount;
        this.lastUsedItems = lastUsedItems;
        this.shortAbout = shortAbout;
        this.mostUsedItems = mostUsedItems;
    }
}

export class HomePageBuilder {

    buildHomePage(): HomePageBuilderProps {
        // Logic to build the home page using the provided data
        return new HomePageBuilderProps(
            100,
            [],
            new ShortAbout("Short about content", "Bold text", "about/link"),
            new MostUsedItems("icon.png", [])
        );
    }
}