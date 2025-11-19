interface TabItem{
    id : string;
    label : string;
    path : string;
}

export const DIARY_TABS : TabItem[] = [
    {id : 'main', label : '일기목록', path : '/'},    
    {id : 'report', label : '감정통계', path : '/diary-report'},    
];