declare module 'remark-html' {
    const html: any
    export default html
}

declare module "*.scss" {
    interface IClassNames {
        [className: string]: string;
    }
    const classNames: IClassNames;
    export = classNames;
}
