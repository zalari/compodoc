export interface PageInterface {
    name: string;
    id: string;
    filename?: string;
    context: string;
    path?: string;
    module?: any;
    pipe?: any;
    class?: any;
    effect?: any;
    event?: any;
    document?: any;
    command?: any;
    interface?: any;
    directive?: any;
    injectable?: any;
    additionalPage?: any;
    files?: any;
    data?: any;
    depth?: number;
    pageType?: string;
    component?: any;
    markdown?: string;
}
