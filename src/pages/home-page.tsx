import { Fragment } from "preact/jsx-runtime";
import { Container } from "../components/common/container";
import { WelcomeBanner } from "../components/welcome-banner";

export function HomePage() {
  return (
    <Fragment>
      <WelcomeBanner />
      <Container>
        <div>home-page</div>
      </Container>
    </Fragment>
  );
}
