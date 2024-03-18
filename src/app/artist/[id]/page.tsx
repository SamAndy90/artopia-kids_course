import Container from "common/Container";
import Banner from "components/Artist/Banner";
import Filter from "components/Artist/Filter";
import Profile from "components/Artist/Profile";

export default function ArtistPage() {
  return (
    <section>
      <Container className={"max-w-screen-2xl"}>
        <div className={"flex gap-10"}>
          <aside className={"basis-[402px] px-[30px]"}>
            <Profile />
          </aside>
          <div className={"flex-1 py-20"}>
            <Banner />
            <Filter />
          </div>
        </div>
      </Container>
    </section>
  );
}
