import { NodeSchema } from "./NodeSchema";

export class CategorySchema {
    id: string;
    name: string;
    nodes: NodeSchema[];

    constructor(
        id: string,
        name: string,
    ) {
        this.id = id;
        this.name = name;
        this.nodes = [];
    }

    setNodes(nodes: NodeSchema[]) {
        this.nodes = nodes;
    }
}
