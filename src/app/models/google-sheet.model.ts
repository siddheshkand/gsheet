export interface Id {
	$t: string;
}

export interface Updated {
	$t: string;
}

export interface Category {
	scheme: string;
	term: string;
}

export interface Title {
	type: string;
	$t: string;
}

export interface Link {
	rel: string;
	type: string;
	href: string;
}

export interface Name {
	$t: string;
}

export interface Email {
	$t: string;
}

export interface Author {
	name: Name;
	email: Email;
}

export interface OpenSearch$totalResult {
	$t: string;
}

export interface OpenSearch$startIndex {
	$t: string;
}

export interface Id {
	$t: string;
}

export interface Updated {
	$t: string;
}

export interface Category {
	scheme: string;
	term: string;
}

export interface Title {
	type: string;
	$t: string;
}

export interface Content {
	type: string;
	$t: string;
}

export interface Link {
	rel: string;
	type: string;
	href: string;
}

export interface Gs$colCount {
	$t: string;
}

export interface Gs$rowCount {
	$t: string;
}

export interface Entry {
	id: Id;
	updated: Updated;
	category: Category[];
	title: Title;
	content: Content;
	link: Link[];
	gs$colCount: Gs$colCount;
	gs$rowCount: Gs$rowCount;
}

export interface Feed {
	xmlns: string;
	xmlns$openSearch: string;
	xmlns$gs: string;
	id: Id;
	updated: Updated;
	category: Category[];
	title: Title;
	link: Link[];
	author: Author[];
	openSearch$totalResults: OpenSearch$totalResult;
	openSearch$startIndex: OpenSearch$startIndex;
	entry: Entry[];
}

export interface Gsheet {
	version: string;
	encoding: string;
	feed: Feed;
}