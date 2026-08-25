import PageHero from "../components/PageHero";

export default function InquirePage() {
  return (
    <>
      <PageHero eyebrow="CUSTOMER CARE" title="INQUIRE" description="LE FIER 고객 문의 페이지입니다." />
      <section className="simple-page content-wrap">
        <form className="inquire-form">
          <label>NAME<input placeholder="성함을 입력하세요" /></label>
          <label>EMAIL<input type="email" placeholder="email@example.com" /></label>
          <label>MESSAGE<textarea rows="8" placeholder="문의 내용을 입력하세요" /></label>
          <button type="button">SEND INQUIRY</button>
        </form>
      </section>
    </>
  );
}
