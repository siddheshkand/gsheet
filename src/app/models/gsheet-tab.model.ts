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

export interface Gsx$sno {
	$t: string;
}

export interface Gsx$stateut {
	$t: string;
}

export interface Gsx$numprimaryhealthcentershmi {
	$t: string;
}

export interface Gsx$numcommunityhealthcentershmi {
	$t: string;
}

export interface Gsx$numsubdistricthospitalshmi {
	$t: string;
}

export interface Gsx$numdistricthospitalshmi {
	$t: string;
}

export interface Gsx$totalpublichealthfacilitieshmi {
	$t: string;
}

export interface Gsx$numpublicbedshmi {
	$t: string;
}

export interface Gsx$numruralhospitalsnhp18 {
	$t: string;
}

export interface Gsx$numruralbedsnhp18 {
	$t: string;
}

export interface Gsx$numurbanhospitalsnhp18 {
	$t: string;
}

export interface Gsx$numurbanbedsnhp18 {
	$t: string;
}

export interface Entry {
	id: Id;
	updated: Updated;
	category: Category[];
	title: Title;
	content: Content;
	link: Link[];
	gsx$sno: Gsx$sno;
	gsx$stateut: Gsx$stateut;
	gsx$numprimaryhealthcentershmis: Gsx$numprimaryhealthcentershmi;
	gsx$numcommunityhealthcentershmis: Gsx$numcommunityhealthcentershmi;
	gsx$numsubdistricthospitalshmis: Gsx$numsubdistricthospitalshmi;
	gsx$numdistricthospitalshmis: Gsx$numdistricthospitalshmi;
	gsx$totalpublichealthfacilitieshmis: Gsx$totalpublichealthfacilitieshmi;
	gsx$numpublicbedshmis: Gsx$numpublicbedshmi;
	gsx$numruralhospitalsnhp18: Gsx$numruralhospitalsnhp18;
	gsx$numruralbedsnhp18: Gsx$numruralbedsnhp18;
	gsx$numurbanhospitalsnhp18: Gsx$numurbanhospitalsnhp18;
	gsx$numurbanbedsnhp18: Gsx$numurbanbedsnhp18;
}

export interface Feed {
	xmlns: string;
	xmlns$openSearch: string;
	xmlns$gsx: string;
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

export interface GSheetTab {
	version: string;
	encoding: string;
	feed: Feed;
}