export interface IAcademyListData {
	vipArticle: {
		weekDay: string;
		date: string;
		title: string;
		desc: string;
		img: string;
		articleId: string;
	};
	regularArticles: {
		weekDay: string;
		date: string;
		title: string;
		desc: string;
		img: string;
		articleId: string;
	}[];
}
