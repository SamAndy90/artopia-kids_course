import Container from "common/Container";
import Profile from "components/Artist/Profile";

export default function ArtistPage() {
  return (
    <section>
      <Container className={"max-w-screen-2xl"}>
        <div className={"flex gap-10"}>
          <aside className={"basis-[402px] px-[30px]"}>
            <Profile />
          </aside>
          <div className={"flex-1"}>hjhgkhjg</div>
        </div>
      </Container>
    </section>
  );
}
