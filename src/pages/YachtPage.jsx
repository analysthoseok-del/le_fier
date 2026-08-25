import PageHero from "../components/PageHero";

export default function YachtPage() {
  return (
    <>
      <PageHero eyebrow="SIGNATURE COLLECTION" title="YACHT" description="프리미엄 프로젝트용 확장 페이지 템플릿입니다." />
      <section className="simple-page content-wrap">
        <div className="feature-block">
          <h2>LE FIER SIGNATURE EXPERIENCE</h2>
          <p>이 페이지는 사용자가 요청한 React 프로젝트 목차 구조를 그대로 유지하기 위한 독립 라우트입니다.</p>
        </div>
      </section>
    </>
  );
}
