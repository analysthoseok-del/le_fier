export default function NotFoundPage({ navigate }) {
  return (
    <section className="not-found">
      <span>404</span>
      <h1>PAGE NOT FOUND</h1>
      <p>요청하신 페이지를 찾을 수 없습니다.</p>
      <button onClick={() => navigate("/")}>BACK TO HOME</button>
    </section>
  );
}
