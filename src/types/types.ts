export type ExtractTypes<T> = {
	[Property in keyof T]: T[Property]
}