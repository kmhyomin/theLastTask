import Tab from "../component/tab";

function DiaryReport() {
  return (
    <>
      <Tab
        pageLink_First="/diary"
        pageLink_Second="/diary-report"
        pageName_First="일기목록"
        pageName_Second="감정통계"
      />

      <h1>DIARY REPORT</h1>
    </>
  );
}

export default DiaryReport;
