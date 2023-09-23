declare module "*.svg";
declare module "*.css";

declare type Book = {
	title: string;
	authors: string[];
	cover: {
		small?: string;
		medium?: string;
		large?: string;
	};
	id: any;
	notes?: Map<string, string> | undefined;
};

declare type SearchLink = {
	name: string;
	url: string;
	icon: string;
	id: any;
	isActive: boolean;
};