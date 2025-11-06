import Tab from "../component/tab";

function DiaryReport() {
  return (
    <>
      <Tab
        pageLink1="/diary"
        pageLink2="/diary-report"
        pageName1="일기목록"
        pageName2="감정통계"
      />

      <h1>DIARY REPORT</h1>
    </>
  );
}

export default DiaryReport;
