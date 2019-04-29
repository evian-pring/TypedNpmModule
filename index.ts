export interface MyObject {
    method1: (str: string) => string,
    method2: () => void
}

export const myObject = {
    method1: (str: string): string => str,
    method2: () => {}
}